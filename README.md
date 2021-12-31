Technologie Mobile
===

Groupe
---

Nous avons gardé le même groupe que pour le projet platine, à savoir
* Gaël Bricout (gael.bricout.etu@univ-lille.fr)
* Annelise Carlier (annelise.carlier.etu@univ-lille.fr)
* Anthony Lafolie (anthony.lafolie.etu@univ-lille.fr)
* Anthony Mendez (anthony.mendez.etu@univ-lille.fr)

Thème projet platine
---
L'idée de notre projet platine est d'aider à la création de voyages en groupe. Nos principales fonctionnalités étaient une carte partagée sur laquelle l'utilisateur ajoute un "pin" qui permet de notifier aux autres membres du groupe l'activité qu'il veut faire.
Ensuite, les activités sont répertoriées dans un calendrier partagé, sur lequel les utilisateurs peuvent organiser leur voyage.
<div align=center>
  <img align=top src="src/assets/img/screen2.jpg" alt="Maquette carte" style="width:300px;margin:10px;"/>
  <img align=top src="src/assets/img/screen1.jpg" alt="Maquette calendrier" style="width:300px;margin:10px:"/>
</div>

Sujet
---

Le but ici est de créer une partie de l'application faite dans le projet platine. <br>
Nous avons décidé de reproduire l'étape de création et de partage de voyage en Angular, car nous avions fait notre projet en Flutter. Nous avons également choisi de garder le même environnement Back-end.

<br><br>

Nous n'avons pas utilisé d'API externe au projet dans cette version. Certaines fonctionnalités sont donc moins dynamiques et sécurisées, comme par exemple le choix de ville et de pays qui sont libres pour l'utilisateur.

<br><br>

Voici les screenshot de cette partie sur l'application flutter:
<div align=center>
  <img align=top src="src/assets/img/screen_list.jpg" alt="Liste de voyage" style="width:300px;margin:10px;"/>
  <img align=top src="src/assets/img/screen_create.jpg" alt="Création de voyage" style="width:300px;margin:10px:"/>
  <img align=top src="src/assets/img/screen_share.jpg" alt="Partage de voyage" style="width:300px;margin:10px;"/>
</div>

Manuel d'installation
---

* Utiliser le site web : https://plango-application.herokuapp.com/accueil
* En local :
 * Prérequis : avoir node, npm à jour.
 * Cloner le repository ici présent
 * Ouvrir un terminal de commande
 * Se placer à la racine du projet
 * Lancer la commande *npm i*
 * Lancer la commande *ng s*
 * Ouvrir un moteur de recherche, avec le lien http://localhost:4200/

Ajouts Mobile
---

* Application en ligne via le lien : https://plango-application.herokuapp.com/accueil
* Chargement des *composants* sur la liste pour les connexions lentes (voir ce à quoi ressemble l'application alors que les composants ne sont pas encore chargés) : **Fonctionne hors ligne**
* Completement mobile, autant utilisable sur mobile que sur ordinateur
* Données stockées en locale lors du premier chargement (pour la liste des voyages), permettant de ne pas avoir à rechercher les données dans l'api au prochain chargement : **Fonctionne hors ligne**
* Utilisation de Angular Material vu en cours
* Gestion de l'accessibilité pour personnes malvoyantes :
 * Couleurs choisies avec un contraste élevé pour tout distinguer sans problème.
 * Ajout de balises title et alt sur chaque textes et images
* Facilité de maintenance (composants réutilisés, variables css stockées, arborescance du projet)
* Réduction de la taille des images (webp) et app spliting pour éviter la conception au monolithe, permettant **d'améliorer la vitesse et l'UX**

Ce qu'on aurait pu ajouter
---
* *Lazy loading* : Nous ne l'avons pas implémenté au vue de la simplicité de l'application actuelle. Dans le cas d'une plus grande application et des modules différents, nous l'aurions implémenté.
* *PWA* : l'application étant mobile first, nous aurions pu développer une PWA afin de permettre à l'utilisateur d'installer l'application web pour améliorer l'UX
* *Mode sombre*
* *Worker* : Si l'application était plus développée, et en PWA, nous aurions pu implémenter un Worker pour le choix des données affichées à l'utilisateur.
* *Système de cache*
