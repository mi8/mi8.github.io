---
title: "L'humain dans la boucle : le secret des agents qui fonctionnent vraiment"
description: "Les meilleurs agents IA ne remplacent pas les humains -- ils savent quand demander de l'aide. Voici comment nous concevons les schémas d'escalade."
pubDate: 2026-01-05
---

L'argumentaire est tentant : déployer un agent IA, retirer les humains de la boucle et regarder les coûts baisser. En pratique, les agents entièrement autonomes en environnement entreprise sont un risque. Ils hallucinent. Ils rencontrent des cas limites que les concepteurs n'avaient pas anticipés. Ils commettent des erreurs en toute confiance sur des décisions à fort enjeu.

Les agents qui fonctionnent réellement en production ne sont pas ceux qui n'ont jamais besoin des humains. Ce sont ceux qui savent *quand* demander de l'aide.

## Pourquoi l'autonomie totale est un piège

Les processus en entreprise ont des conséquences réelles. Un agent qui approuve le mauvais paiement fournisseur, envoie une réponse incorrecte à un régulateur ou classifie mal un ticket de support prioritaire crée des problèmes qui coûtent bien plus que la main-d'oeuvre que l'agent était censé économiser.

L'autonomie totale érode également la confiance. Si les parties prenantes ne peuvent pas vérifier ce que fait l'agent -- et ne peuvent pas intervenir lorsqu'il se trompe -- elles cesseront de l'utiliser. Nous avons vu des agents bien construits être abandonnés parce que l'équipe métier ne faisait pas confiance aux résultats et n'avait aucun moyen de corriger le tir.

L'objectif n'est pas de supprimer toute intervention humaine. C'est de trouver le bon *ratio* : automatiser les 80 % de tâches routinières et transmettre les 20 % qui sont ambiguës, à fort enjeu ou inédites à un humain capable de les traiter en quelques secondes.

## Les schémas d'escalade qui fonctionnent

Voici les schémas que nous utilisons dans les systèmes d'agents en production. La plupart des agents ont besoin d'au moins deux d'entre eux.

### Seuils de confiance

L'agent évalue sa propre certitude sur chaque décision. En dessous d'un seuil défini, il escalade au lieu d'agir. Il ne s'agit pas simplement de la "confiance du modèle" -- cela inclut des vérifications structurées comme la conformité de l'entrée aux schémas attendus, la validité des données renvoyées par les appels d'outils et le respect des règles de validation par la sortie.

En pratique, nous calibrons ces seuils pendant une période de déploiement supervisé. L'agent traite des entrées réelles, un humain examine chaque décision, et nous ajustons le seuil jusqu'à ce que le taux d'escalade atteigne le bon équilibre entre autonomie et sécurité.

### Confirmation des actions à fort enjeu

Certaines actions sont toujours à fort enjeu indépendamment du niveau de confiance : approuver des paiements au-delà d'un certain montant, envoyer des communications externes, modifier des données de production ou effectuer des changements irréversibles. Pour celles-ci, l'agent prépare l'action et la soumet à l'approbation humaine avant de l'exécuter.

C'est le schéma le plus simple et celui qui génère le plus de confiance. Les parties prenantes sont bien plus à l'aise avec un agent qui dit "Je souhaite envoyer cette réponse au client -- approuvez-vous ?" qu'avec un agent qui l'envoie directement.

### Détection d'ambiguïté

Parfois, l'agent reçoit une entrée qui ne correspond clairement à aucun de ses parcours définis. Un e-mail client contenant à la fois une réclamation et une nouvelle commande. Un document faisant référence à des entités absentes de tout système connecté. Une demande qui contredit des instructions précédentes.

Les bons agents détectent l'ambiguïté de manière explicite plutôt que de deviner. Nous intégrons des contrôles d'ambiguïté dans l'étape de raisonnement de l'agent : si l'entrée peut raisonnablement être interprétée de plusieurs façons, l'agent escalade en présentant les interprétations concurrentes pour que l'humain tranche.

### Files d'attente de révision périodique

Toutes les décisions ne nécessitent pas une supervision humaine en temps réel. Pour les flux de travail à faible enjeu et à fort volume, nous utilisons des files d'attente de révision asynchrones. L'agent traite les éléments en continu, et un humain examine un échantillon de décisions sur une cadence quotidienne ou hebdomadaire. Si la révision révèle des erreurs systématiques, les instructions de l'agent sont mises à jour.

Ce schéma fonctionne bien pour des processus comme la classification de données, l'étiquetage de contenu ou l'extraction de documents -- où les erreurs individuelles ont un faible impact mais où les tendances d'erreurs doivent être détectées.

## Concevoir l'interface humaine

Le mécanisme d'escalade n'est efficace que si l'interface présentée à l'humain l'est aussi. Une notification indiquant "L'agent a besoin d'aide" sans aucun contexte est inutile. Chaque escalade devrait inclure :

- **Ce que l'agent essayait de faire** -- la tâche et son contexte
- **Pourquoi il a escaladé** -- le déclencheur spécifique (faible confiance, action à fort enjeu, entrée ambiguë)
- **Ce que l'agent recommande** -- sa meilleure estimation, même s'il est incertain
- **Ce que l'humain doit décider** -- une question claire et précise, pas un déversement d'informations sans structure

L'humain devrait pouvoir résoudre une escalade en moins de 30 secondes pour les cas courants. Si vos escalades nécessitent systématiquement cinq minutes d'investigation, l'agent ne fournit pas assez de contexte.

## Trouver le bon ratio

Nous visons généralement une répartition 80/20 au lancement : l'agent traite 80 % des cas de manière autonome et 20 % sont escaladés. Au fil du temps, à mesure que les instructions de l'agent sont affinées et que les cas limites sont traités, ce ratio évolue. Nous avons vu des agents matures atteindre un ratio 95/5 après plusieurs mois d'exploitation.

L'enseignement clé : commencer avec davantage de supervision humaine et la réduire progressivement construit la confiance plus rapidement que de commencer en autonomie totale et d'ajouter des garde-fous après un incident. Gagnez l'autonomie de manière incrémentale. C'est ainsi que vous construisez des agents qui restent en production.
