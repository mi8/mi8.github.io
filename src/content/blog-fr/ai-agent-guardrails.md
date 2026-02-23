---
title: "Garde-fous pour les agents IA : comment securiser les systemes autonomes"
description: "Les agents autonomes ont besoin de limites. Voici comment nous concevons des garde-fous qui maintiennent la securite des agents sans les rendre inutiles."
pubDate: 2026-01-15
---

Un agent IA sans garde-fous est un risque. Un agent avec trop de garde-fous est inutile. Le defi d'ingenierie consiste a trouver les bonnes contraintes -- des limites qui maintiennent la securite du systeme tout en preservant l'autonomie qui fait la valeur des agents.

Voici comment nous abordons la question.

## Validation des entrees : controler ce qui entre

Chaque interaction avec un agent commence par une entree. Cette entree peut provenir d'un utilisateur, d'un systeme en amont ou d'un autre agent. Avant que l'agent ne raisonne sur quoi que ce soit, validez-la.

- **Application de schemas.** Si l'agent attend une entree structuree, rejetez tout ce qui n'est pas conforme. Ne laissez pas l'agent tenter d'interpreter des donnees incoherentes.
- **Filtrage de contenu.** Detectez les tentatives d'injection de prompt, les informations personnellement identifiables qui ne devraient pas etre traitees, ou les entrees qui sortent du perimetre defini de l'agent.
- **Limites de taille.** Une charge utile anormalement volumineuse peut faire exploser les fenetres de contexte et les couts. Definissez des limites strictes et echouez proprement.

C'est de la programmation defensive de base, appliquee aux agents. Rien d'exotique, mais ignorer cette etape est la meilleure facon de se retrouver avec des agents qui traitent des donnees pour lesquelles ils n'ont jamais ete concus.

## Filtrage des sorties : controler ce qui sort

L'agent produira des sorties -- des reponses textuelles, des appels API, des documents generes. Chaque sortie doit passer par une validation avant d'atteindre les utilisateurs ou les systemes en aval.

- **Validation du format.** Si l'agent est cense produire du JSON, validez le schema avant de le transmettre. S'il genere un e-mail destine au client, verifiez que les champs requis sont remplis et que les marqueurs de ton sont dans les limites acceptables.
- **Controle du contenu.** Verifiez la presence de donnees hallucinees, d'informations internes divulguees ou de contenu qui enfreint vos politiques. Ce n'est pas theorique -- les agents en production produisent occasionnellement des sorties factuellement incorrectes ou contextuellement inappropriees.
- **Seuils de confiance.** Lorsque la confiance de l'agent dans sa sortie est faible, dirigez vers une verification humaine au lieu de l'envoyer directement.

## Perimetre d'action : limiter ce que l'agent peut faire

C'est la categorie de garde-fous la plus critique. Un agent ayant acces a des outils peut effectuer des actions reelles dans des systemes reels. Delimitez ces actions de maniere stricte.

- **Moindre privilege.** Donnez a l'agent acces aux seuls outils dont il a besoin, rien de plus. Un agent qui traite des factures n'a pas besoin d'acceder a votre systeme RH.
- **Separation lecture / ecriture.** Commencez par donner aux agents un acces en lecture seule. Passez a l'acces en ecriture uniquement apres avoir valide le comportement en production. Ce seul principe previent la plupart des defaillances catastrophiques.
- **Liste blanche d'actions.** Definissez une liste explicite des actions autorisees. Tout le reste est refuse par defaut. C'est plus de travail qu'une liste noire, mais c'est fondamentalement plus sur.
- **Contraintes de ressources.** Plafonnez le nombre d'appels API par tache, le total de tokens consommes et le cout en euros par execution. Un agent bloque dans une boucle de raisonnement ne devrait pas pouvoir generer une facture illimitee.

## Escalade humaine dans la boucle

Toutes les decisions ne doivent pas etre autonomes. Concevez des chemins d'escalade clairs pour les situations ou l'agent doit s'arreter et demander a un humain.

- **Actions a enjeux eleves.** Supprimer des donnees, envoyer des communications externes, approuver des transactions au-dessus d'un seuil -- ces actions doivent necessiter une confirmation humaine, au moins tant que vous n'avez pas une confiance elevee dans le comportement de l'agent.
- **Situations de faible confiance.** Lorsque l'agent ne peut pas determiner la marche a suivre, il doit escalader plutot que deviner. Un agent bien concu qui dit "Je ne suis pas sur, voici mes options, que dois-je faire ?" est bien plus precieux qu'un agent qui fait la mauvaise chose avec assurance.
- **Scenarios inedits.** Si l'agent rencontre une situation significativement differente de sa distribution d'entrainement, il doit escalader. Cela necessite une surveillance de la derive de distribution, ce qui nous amene a l'observabilite.

L'experience utilisateur de l'escalade compte. Si l'escalade est lourde ou lente, les utilisateurs la contourneront ou cesseront d'utiliser l'agent. Rendez-la fluide : contexte clair, questions specifiques, flux d'approbation simples.

## Journalisation d'audit : tout enregistrer

Chaque action effectuee par un agent doit etre journalisee avec suffisamment de details pour reconstituer l'integralite de la chaine de decision apres coup.

- **Entree recue.** Ce qui a declenche l'agent.
- **Trace de raisonnement.** Ce que l'agent a considere et pourquoi il a choisi une action particuliere.
- **Actions effectuees.** Chaque appel d'outil, chaque requete API, chaque sortie generee.
- **Resultats.** Ce qui s'est passe en consequence, y compris les erreurs et les tentatives de reprise.

C'est non negociable pour les industries reglementees, mais c'est une bonne pratique partout. Lorsqu'un agent fait quelque chose d'inattendu, vous devez pouvoir repondre rapidement et definitivement a la question "pourquoi". Sans journalisation exhaustive, vous deboguez a l'aveugle.

## Budget et limites de debit

Les agents consomment des ressources : tokens LLM, appels API, temps de calcul. Sans limites strictes, un seul agent defaillant peut generer des couts significatifs.

- **Budgets par tache.** Definissez un plafond de tokens et de cout maximal pour chaque execution d'agent. Si l'agent le depasse, terminez proprement et envoyez une alerte.
- **Limitation de debit.** Plafonnez le debit des appels API externes pour empecher les agents de submerger les services en aval.
- **Disjoncteurs.** Si le taux d'erreur d'un agent depasse un seuil, arretez-le automatiquement et notifiez l'equipe d'exploitation.

## Les garde-fous sont une fonctionnalite

Nous entendons parfois une resistance aux garde-fous formulee comme "vous limitez les capacites de l'agent". C'est l'inverse. Les garde-fous sont ce qui rend les agents deployables. Un agent en qui vous ne pouvez pas avoir confiance en production n'est pas capable -- c'est une demo.

L'objectif est de disposer d'agents a la fois puissants et previsibles. Cela exige d'ingenierer les limites avec la meme rigueur que celle appliquee aux capacites. Si vous definissez correctement les garde-fous, vous pouvez accorder plus d'autonomie aux agents au fil du temps, a mesure que la confiance grandit. Si vous les definissez mal, vous passerez votre temps a gerer des incidents au lieu de creer de la valeur.
