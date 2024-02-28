# Challenge

## Objectifs 

- Par équipe vous disposez d'une demi journée pour produire une application dont le cahier des charges est ci-dessous
- L'idée est de penser en react et de réfléchir au problèmatique du projet avec les outils React que vous avez vu en formation
- Techniquement, l'idée est de coder un MVP du produit

## Cahier des charges de l'application

* Vous aller créer un jeu de cartes pour deux joueurs. 
* Voici la présentation de chaque carte :
  * Elle a les caracteristiques suivantes :
      * Un nom
      * une Force
      * Des points de vie
      * un coût
      * Un nombre de point rapporté
* Le but du jeu est d'accumuler 20 points, le premier joueur a y parvenir gagne la partie
* Chaque joueur joue son tour, dans lequel il peut effectuer autant d'actions qu'il le souhaite parmi les actions suivantes, et tant qu'il peut payer pour faire ces actions :
  * Mettre une de ses cartes face cachée dans sa réserve personnelle (une fois par tour uniquement)
  * Jouer une carte en payant son cout, pour cela on utilise les cartes de sa réserve personnelle. Chaque carte de la réserve ne peut être utilisée qu'une seule fois par tour
  * Récuperer des points : une fois posée sur la table de jeu, la carte peut être inclinée pour récupérer un nombre de point égal à celui présent sur cette carte
  * Attaquer une carte adverse : pour cela on soustrait au points de vie de la carte attaquée la force de la carte attaquante
* Une fois les actions souhaitées terminées, le joueur met fin à son tour et on passe à l'autre joueur qui fait pareil.
* Au début du jeu, chaque joueur a 7 cartes dans sa main. Au début de son tour, il pioche une carte de son paquet de cartes.
* Il existe 200 cartes différentes (avec des noms et caracteristiques différentes).
* Chaque joueur a à sa disposition un paquet de carte de 60 cartes parmi les 200 cartes.

* Allez-vous réussir à terrasser votre adversaire ? oui
