# Pensées Éclair - Application de Mini Blog (Node.js)

Une application web full-stack de type blog, conçue pour être à la fois simple et fonctionnelle. Ce projet met en œuvre un serveur Node.js/Express connecté à une base de données NoSQL (MongoDB) pour permettre une gestion complète et dynamique des articles.

## Aperçu

![Aperçu de Pensées Éclair](pensees-eclair-screenshot.png)

## Fonctionnalités

* **Gestion des Articles (CRUD)** : Implémentation complète des fonctionnalités permettant de Créer, Lire, Modifier (Update) et Supprimer (Delete) des articles.
* **Base de Données NoSQL** : Connexion à MongoDB avec l'ORM Mongoose pour la modélisation et la persistance des données.
* **Rendu Côté Serveur** : Utilisation du moteur de template EJS pour générer dynamiquement les pages HTML avec les données du serveur.
* **Design Responsive** : Interface utilisateur soignée avec Bootstrap 5 et CSS personnalisé (thème, polices, animations de survol).

## Technologies utilisées

* **Backend** : Node.js, Express
* **Base de Données** : MongoDB, Mongoose
* **Frontend / Moteur de Template** : EJS, Bootstrap 5, CSS3
* **Middleware** : `method-override` (pour les requêtes PUT et DELETE)

## Installation et Lancement

Suivez ces étapes pour lancer le projet localement :

1.  Clonez ce dépôt (ou téléchargez le zip) :
    ```bash
    # Remplacez par l'URL de VOTRE dépôt GitHub
    git clone [https://github.com/VotreNom/mon-mini-blog.git](https://github.com/VotreNom/mon-mini-blog.git)
    ```

2.  Naviguez dans le dossier du projet :
    ```bash
    cd mon-mini-blog
    ```

3.  Installez les dépendances npm :
    ```bash
    npm install
    ```

4.  **Prérequis** : Assurez-vous que votre serveur MongoDB est lancé et accessible localement (ex: `mongodb://localhost:27017`).

5.  Lancez le serveur :
    ```bash
    node server.js
    ```

6.  Ouvrez votre navigateur et allez sur `http://localhost:3000`.

