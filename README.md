# Cours Angular

Projet d'apprentissage **Angular 22** : leçons, exercices et TP sur les fondamentaux du framework, avec une interface en **Tailwind CSS 4 + DaisyUI 5**.

## Contexte

Projet de formation réalisé à l'ADRAR. Les pages « leçons » reprennent les feuilles de cours du formateur ; le reste (exercices, TP, routes, organisation du code) a été réalisé par moi en suivant les consignes de la formation.

## Technologies

| Rôle | Outil | Version |
| --- | --- | --- |
| Framework | Angular (core, router, forms, common) | 22.2 |
| Langage | TypeScript | 6.0 |
| Interface | Tailwind CSS, DaisyUI, PostCSS | 4.3, 5.7, 8.5 |
| Réactivité et HTTP | RxJS, HttpClient | 7.8 |
| Base de données | Firebase Realtime Database, AngularFire | 13.4, 22 (RC) |
| Coloration du code | Shiki | 4.6 |
| Tests | Vitest, jsdom | 5.0, 30 |
| Formatage | Prettier | 3.8 |
| Déploiement | Docker, nginx | — |

## Architecture

Le code est organisé par rôle dans `src/app` :

- **`pages/`** : un composant par page (leçons, exercices, TP, accueil), chargé par le routeur.
- **`components/`** : composants réutilisables (carte d'animal, en-tête et pied de page, composants du TP).
- **`models/`** : interfaces et types TypeScript qui décrivent les données (animal, tâche, météo, Digimon).
- **`services/`** : accès aux données et logique métier hors des composants (API météo, tâches sur Firebase), injectés avec `inject()`.
- **`pipes/`** : pipe personnalisé pour la coloration du code.
- **`shared/`** : éléments communs, comme la page 404.
- **`app.routes.ts`** : routage, avec lazy loading pour certaines pages.
- **`app.config.ts`** : configuration de l'application (routeur, HTTP, Firebase).
- **`environments/`** : configuration Firebase, non versionnée (un exemple est fourni).

Ce découpage aborde la séparation des responsabilités : les composants affichent, les services échangent avec l'extérieur (API, base de données) et les modèles décrivent la forme des données.

## Notions Angular abordées

- **Composants** : standalone, composants enfants, communication `input` / `output`
- **Décorateurs** : `@Component`, `@Service`, `@Pipe`
- **Cycle de vie** : `ngOnInit`, `ngOnDestroy`
- **Signals** : `signal`, `computed`, `effect`
- **Templates** : data binding (`[class.x]`, `[attr.x]`, `[innerHTML]`), `@if`, `@for`, `ngModel`, variables de template (`#ref`), pipe `async`, pipe personnalisé
- **Services et injection de dépendances** : `@Service`, `inject()`
- **Routage** : `RouterLink`, `RouterOutlet`, lazy loading, page 404
- **HTTP et RxJS** : `HttpClient`, `Observable`, `interval`, `map`, `filter`, `unsubscribe`, `takeUntilDestroyed`
- **Asynchrone et Firebase** : `async` / `await`, `try` / `catch` / `finally`, Realtime Database (`ref`, `get`, `push`, `set`, `update`, `remove`)
- **TypeScript** : interfaces et types dans des fichiers de modèles
- **Accessibilité** : attributs ARIA, `role`, texte réservé aux lecteurs d'écran (`sr-only`)
- **Configuration** : `app.config.ts` (`provideRouter`, `provideHttpClient`, `provideFirebaseApp`), fichiers `environment`

## Pages à voir

- **Refuge animalier** : composant enfant réutilisable avec `input`, données en `signal`, `computed`.
- **Liste des tâches** : ajout, changement de statut et suppression, persistance Firebase, états de chargement et d'erreur.
- **API Digimon** : appels HTTP avec `HttpClient` et pagination.
- **Observables** : exercices RxJS (observable simple et avancé).
- **TP communication entre composants** : `input` vers l'enfant, `output` vers le parent.
- **Page 404** : animation en CSS.

Le reste du projet contient les leçons (data binding, rendu conditionnel, listes, signals) et les exercices associés.

## Utilisation de l'IA

Conformément à la charte IA de la formation, j'ai utilisé **Claude (Anthropic)** et le **mode IA de Google** pour : obtenir des explications sur les notions du cours, générer la plupart des templates HTML (DaisyUI), et corriger ou relire certaines erreurs dans mon code. Les templates ont fait l'objet d'une vérification d'ensemble (balises sémantiques, contrastes, responsive).

## Anciennes et nouvelles syntaxes

Le projet présente aussi l'ancienne syntaxe d'Angular (`*ngIf`, `*ngFor`, `CommonModule`), notamment dans les leçons sur le rendu conditionnel et le rendu de listes, afin de savoir lire le code existant des projets plus anciens (code legacy). Le reste du projet utilise la syntaxe actuelle : `@if` / `@for`, `input()` / `output()`, composants standalone et signals.

## Lancer le projet

```bash
git clone https://github.com/GuillaumeItier/cours-angular.git
cd cours-angular
npm install
npm start        # http://localhost:4200
npm test         # tests unitaires (Vitest)
npm run build    # build de production
```

**Configuration Firebase** (nécessaire seulement pour la page « Liste des tâches ») : les fichiers `environment` ne sont pas versionnés. Copier le modèle puis remplacer les valeurs `VOTRE_...` par celles de votre projet Firebase :

```bash
cp src/environments/environment.example.ts src/environments/environment.ts
cp src/environments/environment.example.ts src/environments/environment.development.ts
```

## Lancer avec Docker

```bash
docker compose up --build
```

Puis ouvrir `http://localhost:8080`. Le `Dockerfile` construit l'application en production (Node), puis la sert avec nginx, qui redirige les routes Angular vers `index.html`. Les fichiers `environment` doivent exister avant le build.

## Crédits

- Animation de la lampe de la page 404 : adaptée de [CodePen](https://codepen.io/uiswarup/pen/qBebRpq).
- Données : [digi-api.com](https://digi-api.com) et [prevision-meteo.ch](https://www.prevision-meteo.ch).
- Interface : [Tailwind CSS](https://tailwindcss.com) et [DaisyUI](https://daisyui.com).

## Pistes d'amélioration

- Mise en ligne de l'application et intégration continue (GitHub Actions).
- Tests unitaires plus complets et tests end-to-end avec Cypress.
- Règles de sécurité Firebase plus strictes, inscription et authentification.
- Réorganisation du code.
- Page d'accueil, header et footer à réaliser.
- Exercices et leçons supplémentaires à implémenter.
