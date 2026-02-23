---
title: "Managing LLM Costs in Production Agent Systems"
description: "LLM API costs can spiral fast. Here are the practical strategies we use to keep agent systems economically viable."
pubDate: 2025-10-15
---

A well-designed agent prototype might cost $0.02 per task. Scale it to 10,000 tasks per day, add retries, multi-step reasoning, and a few tool-call loops, and suddenly you're looking at a five-figure monthly API bill. LLM costs in production are manageable, but only if you design for them from the start.

Here's what actually drives costs and what we do about it.

## Understanding the cost drivers

Before optimizing, you need to know where the money goes.

### Token volume

This is the obvious one. Every input token and output token costs money. But the real token hogs aren't the user inputs — they're the system prompts, the context windows stuffed with retrieved documents, and the multi-turn reasoning chains where the agent thinks through complex decisions. A single agent task that takes five reasoning steps with a 4,000-token system prompt can easily consume 30,000+ tokens.

### Model choice

The price difference between models is enormous. GPT-4 class models can be 30-60x more expensive per token than smaller models like GPT-4o-mini or Claude Haiku. If every task in your pipeline hits the most capable model, your costs will reflect it.

### Retries and error loops

Agents fail. Tool calls return errors, outputs fail validation, and the agent retries. Each retry is another full round of token consumption. A poorly handled error loop where the agent retries the same failing action five times doesn't just waste time — it wastes money.

## Strategies that actually work

### Model routing

This is the highest-leverage optimization. Not every task needs the most capable model. A system that classifies incoming requests, extracts structured data from clean forms, or generates simple summaries can run on a smaller, cheaper model without meaningful quality loss.

We implement model routing at the task level. A lightweight classifier (itself running on a cheap model) evaluates the incoming task and routes it to the appropriate model tier. Simple extraction tasks go to the fast model. Complex reasoning, ambiguous inputs, or high-stakes decisions go to the capable model. In practice, 60-70% of tasks in a typical enterprise workflow can run on the cheaper tier.

The key: don't just route on task *type* — route on task *difficulty*. The same task type can be easy or hard depending on the input. An invoice with clean, structured fields is a cheap-model job. An invoice that's a scanned PDF with handwritten notes needs the heavy model.

### Semantic caching

If your agent processes similar inputs repeatedly — and in enterprise workflows, it often does — caching saves significant money. We cache at the semantic level, not just exact match. When a new input is sufficiently similar to a previously processed one (measured by embedding distance), we return the cached result instead of making a new LLM call.

This works exceptionally well for classification tasks, FAQ-style queries, and any workflow where inputs cluster around common patterns. We've seen cache hit rates of 30-40% on support ticket classification, which translates directly to a 30-40% cost reduction for that component.

### Prompt optimization

Shorter prompts cost less. But this isn't about being terse — it's about being efficient. Common wins:

- **Strip unnecessary examples** from few-shot prompts once the model handles the task reliably with fewer
- **Move static context to system prompts** where it's cached by providers that support prompt caching
- **Use structured output formats** (JSON schemas) instead of long natural-language instructions about output format
- **Remove redundant instructions** that accumulated during development and never got cleaned up

We review and trim prompts quarterly. It's not glamorous work, but a 20% reduction in prompt tokens across all agents adds up fast at scale.

### Batching

Some agent tasks don't need real-time responses. For these, batching multiple items into a single LLM call reduces per-item costs. Instead of processing ten invoices in ten separate calls, you process them in one call with ten items. You pay for the tokens either way, but you reduce per-call overhead and can often use more efficient prompt structures.

Batching works best for homogeneous tasks — ten items of the same type, processed the same way. It works poorly when items need individualized reasoning or when failure on one item shouldn't block the others.

### Cost budgets per agent

Every agent in our systems has a cost budget: a maximum spend per task and per time period. If an agent exceeds its per-task budget — usually because it's stuck in a retry loop or a reasoning chain that isn't converging — it stops, logs the issue, and escalates. This prevents runaway costs from a single malfunctioning task.

We set budgets based on observed cost distributions during the pilot period. The budget is typically set at 3x the median task cost, which catches genuine anomalies without triggering on normal variance.

## Putting it together

No single strategy solves the cost problem. The combination matters. A system that routes 65% of tasks to a cheap model, caches 30% of those, runs optimized prompts, and has hard cost caps will spend a fraction of what a naive implementation costs — while delivering the same quality.

The most important thing: instrument your costs from day one. Track spend per agent, per task type, per model, and per time period. You can't optimize what you don't measure. We've found that teams who add cost tracking after launch consistently overspend by 3-5x compared to teams who build it in from the start.

## The open-source alternative: fixed costs vs. per-token pricing

There's a fundamentally different cost model worth considering: self-hosted open-source models. Instead of paying per token to an API provider, you run models like Llama, Mistral, or Qwen on your own infrastructure (or your provider's). The cost structure flips from variable per-token pricing to fixed infrastructure cost — GPU compute, regardless of how many tokens you push through it.

This doesn't automatically mean cheaper. At low volumes, API pricing wins. But at scale, the math changes. Once your GPU utilization is high enough, the marginal cost per token drops well below API rates, and you stop worrying about retry loops and verbose prompts inflating your bill.

There's a second benefit beyond cost: data sovereignty. When you run open-source models on sovereign infrastructure, your data never leaves your control. No tokens sent to third-party API endpoints, no external data processing agreements to negotiate, no ambiguity about where your customer data ends up. For any enterprise that cares about data residency — whether driven by GDPR, HIPAA, or internal policy — this removes an entire category of compliance overhead.

The trade-off is operational complexity. You're managing GPU infrastructure, model updates, and inference optimization yourself — or working with a provider who does it for you. But for high-volume production workloads where cost predictability and data control matter, it's a path worth evaluating.

## The bottom line

LLM costs are a real constraint, but they're an engineering problem, not a fundamental barrier. Treat them like you'd treat any other infrastructure cost: measure, optimize, set guardrails, and review regularly.
