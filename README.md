  # :deciduous_tree: Padawans plateform

---
:gb:
#### :cherry_blossom:Description


This application is a simple platform to centralize our work and it concentrates on the main competencies of the French level 2 developer degree.

Each student must self evaluate their level.

### :tulip:Install and setup
First Clone the repo and do an `npm install` in the /api/ folder.
Next look in the `assets/conception/scriptBD/pdawans.sql` for the sql script. Then in phpmyadmin create a new database called `padawans` (uft8_general_ci) and paste this script from pdawans.sql into the sql tab then execute! And voila! :trumpet: you are ready!


#### :scroll:Todo
NIVEAU 1 
Stages of conception, concevoir une base de données :  
* [X] Description de l'application, explication & pitch  
* [X] Define different models 
* [X] make a database model un MCD  http://www.mocodo.net/   
* [X] Make “un MPD” - Schéma for the database

NIVEAU 2   
Layout of an application :
Use a Database : 
Perform queries and a working CRUD for different models and elements : 
sql sever and backend server (node.js) :
* [ ] Use Figma   
* [ ] wireframes / and sketches
* [X] relational database MYSQL  
* [X] Outils - phpmyadmin / Workbench  
* [X] Nodejs - express - mysql  

Create a Front-end interface : Level 1 - Level 2  
* [ ] React js 
* [ ] Bundler  
* [ ] Best practices for conception  
* [ ] Respect the design prototype (graphics, fonts, ux)   
####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :triangular_ruler:Conception


- [Conceptual data model](/assets/conception/mcd.svg)
- [physical data model
  ](assets/conception/mpd.png)

 #### :memo:Rules
 
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant

:arrow_right: une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant

un module contient 1,N competence
une competence apartient a un seul module

:arrow_right: La table competence id.module

---



:fr:
#### :cherry_blossom:Description de l'application  


“Padawans” est une plateforme qui a pour but de centraliser tous les modules ainsi que toutes 
les compétences du référentiel CDA.
Elle permet aux apprenants un suivi de leur évolution par rapport aux différentes compétences du référentiel et aux autres apprenants de leurs promotion.


### :tulip:Installation
Cloner le repo, executer la commande `npm install` permettant d'installer les dependences.
Le projet utilise une base de données mysql.
Dans phpmyadmin crée une nouvelle base de données  `padawans`  (uft8_general_ci)  
Ensuite executer le script sql  `assets/conception/scriptBD/pdawans.sql` 
Et voila le tour est joué! :trumpet: 

#### :scroll:Todo

Étape de Conception, concevoir une base de données : NIVEAU 1  
* [X] Description de l'application, explication & pitch  
* [X] Définir les différentes entités (modèles)  
* [X] Faire un MCD sur http://www.mocodo.net/ 
* [X] Faire un MPD - Schéma de base de données 


Maquetter une application : NIVEAU 2    
* [ ] Utilisation de Figma   
* [ ] Création de wireframe    

Mettre en place une base de données : NIVEAU 2  
* [X] BD MYSQL  
* [X] Outils - phpmyadmin 

Développer des composants dans le langage d'une base de données, back-end, multi-couche, composant métier : NIVEAU 2  
* [X] Nodejs - express - mysql  

Préparer et exécuter les plans de tests d’une application : NIVEAU 2  
* [X] Utilisation de postman  
* [X] Afficher les requêtes et les résultats des fonctionnalités énoncés dans le sujet  

Développer la partie front-end d'une interface : NIVEAU 1 - NIVEAU 2  
* [ ] Mise en place d'une architecture front en React js 
* [ ] Bundler  
* [ ] Mise en place des bonnes pratiques de conception  
* [ ] Intégrations des maquettes  

####  📦Entities

| Padawan | Skill | description | level | module | padawan has skill |
|-----------------------------------------|--------------------|-------------|----------|----------|---------------------------------|
| #id firstname lastname email password | #id name id.module | #id content | #id name | #id name | #(id.padawan id.skill) id.level |

 #### :triangular_ruler:Conception


- [Conceptual data model](/assets/conception/mcd.svg)
- [physical data model
  ](assets/conception/mpd.png)

 #### :memo:Règles 
 
un apprenant peut avoir 0,N competence
une competence peut etre aquise par 0,N aprenant

:arrow_right: une relation Avoir entre apprenant et competence

pour un apprenant il a 1,1 niveau pour 1,1 competence
pour une competence il y a 1,1 seul niveau pour 1,1 apprenant

un module contient 1,N competence
une competence apartient a un seul module

:arrow_right: La table competence id.module


 #### :see_no_evil:Back-end: Description API
 
 cliquez sur la route pour voir le test fait avec postman.
 
* [/api/padawans/register](/assets/conception/postman/)

Enregistrer un nouveau apprenant, les données obligatoires à saisir sont: firstname, lastname, email et password.

* /api/padawans/authenticate  (fonctionnalité en cours d'implémentation) 

l'athentification de l'apprenant, une fois authentifier il reçoit un token, l'authentification necessite la saisie de l'email et du mot de passe.
 
* [/api/padawans/](/assets/conception/postman/)

Affiche la liste des apprenants.
 
* [/api/padawans/register/id](/assets/conception/postman/)

Affiche les informations d'un apprenanten renseignant son identifant.
 
* [/api/skills/](assets/conception/postman/)

Affiche la liste des compétences.
 
* [/api/skills/module/id](assets/conception/postman/)

Affiche la liste des compétences d'un module, nécessite la saisie de l'identifiant du module.
 
* [/api/skills/id/padawans](assets/conception/postman/)

Affiche liste des apprenant avec leurs niveau d'une compétence triée par niveau, nécessite la saisie de l'identifiant de la compétence.

* [/api/skills/id](assets/conception/postman/)

Affiche une compétence ainsi que le nom du module qu'elle appartient, faut renseigner l'identifiant de la compétence.

* [/api/descriptions/skill/id](assets/conception/postman/)

Affiche toutes les descriptions d'une compétences, nécessite la saisie de l'identifiant de la compétence.

* [/api/levels/](assets/conception/postman/)

Affiche la liste des niveaux.

* [/api/levels/id](assets/conception/postman/)

Affiche les information d'un niveau,  nécessite la saisie de l'identifiant du niveau.

* /api/level/id (fonctionnalité en cours d'implémentation) 

Mettre à jour le niveau d'un apprenant.

* [/api/modules/](assets/conception/postman/)

Afficher la liste des modules.

* [/api/modules/id](assets/conception/postman/)

Affiche les informations d'un module, faut renseigner l'identifiant du module.

#### 🙉 Front-end

Premiere idée d'une maquette faite sur papier [voici à quoi ça ressemble](/assets/images/)

La date prévu pour commmencer le developpement de la partie front-end est  le 20/04/2020

---

#### :princess: Contacts

* kula.jega@gmail.com

* rim.chakroun.pro@gmail.com

* shelleycavaness@gmail.com


