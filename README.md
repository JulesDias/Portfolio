# Portfolio de Ludivine Rameaux

Portfolio professionnel présentant les projets de design et créations de Ludivine Rameaux, étudiante à Strate École de Design.

## 📋 Description

Site web portfolio moderne développé avec Next.js 15, présentant différents projets de design incluant :
- **Pom'Potes** - Extension de gamme packaging (Automne 2023)
- **Résurgence** - Projet de signalétique
- **Sketches & Typographie** - Créations graphiques
- Galerie de projets divers (jeux, dessins, photographie)

## 🚀 Technologies

- **Framework** : Next.js 15 (App Router)
- **React** : 19.0
- **TypeScript** : Configuration stricte
- **Styling** : Tailwind CSS avec palette personnalisée
- **Animations** : Motion (Framer Motion), React Scroll Parallax
- **UI Components** : Mantine Core, composants personnalisés
- **Icônes** : Tabler Icons, React Icons

### Palette de couleurs personnalisée
- `greenCustom`: #c1cd88
- `DarkGreenCustom`: #ACBD83
- `OtherGreenCustom`: #dfe4c8
- `ClearBlueCustom`: #7DCCDB

### Typographies
- **Titres** : Poppins (semi-bold), Kiera Display, Cinematografica
- **Texte** : Avenir, Montserrat Variable

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🛠️ Scripts disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Compile le projet pour la production
npm run start    # Lance le serveur de production
npm run lint     # Vérifie le code avec ESLint
```

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Page d'accueil avec carousel
│   │   ├── about/                # Page à propos
│   │   ├── Creation/             # Galerie Bento Grid
│   │   └── projet/
│   │       ├── pompotes/         # Projet packaging Pom'Potes
│   │       ├── signaletique/     # Projet Résurgence
│   │       ├── sketch/
│   │       └── typographie/
│   ├── components/
│   │   ├── Header.tsx            # Navigation avec auto-hide
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── ClientParallaxWrapper.tsx
│   │   └── ui/                   # Composants UI réutilisables
│   ├── styles/
│   │   └── globals.css           # Styles globaux + @font-face
│   └── lib/
│       └── utils.ts              # Utilitaires
├── public/
│   ├── fonts/                    # Polices personnalisées
│   ├── pompotes/                 # Images projet Pom'Potes
│   └── resurgence/               # Images projet Résurgence
├── tailwind.config.ts            # Configuration Tailwind
└── next.config.ts                # Configuration Next.js
```

## 🎨 Fonctionnalités

- **Design responsive** : Optimisé pour mobile, tablette et desktop
- **Navigation intelligente** : Header qui se cache au scroll quand un carousel est présent
- **Animations fluides** : Transitions et effets de parallaxe
- **Galerie Bento Grid** : Mise en page moderne pour les projets
- **Images optimisées** : Utilisation de Next.js Image pour la performance
- **Mode sombre** : Intégration du toggle dark mode

## 🖼️ Pages principales

### Accueil (`/`)
Carousel Apple-style avec présentation des projets phares

### À propos (`/about`)
Présentation de Ludivine avec vidéo responsive

### Créations (`/Creation`)
Galerie Bento Grid affichant 9 projets avec effets hover

### Projets
- `/projet/pompotes` - Extension packaging Pom'Potes
- `/projet/signaletique` - Signalétique Résurgence
- `/projet/sketch` - Dessins et croquis
- `/projet/typographie` - Créations typographiques

## 📝 Configuration des fonts

Les polices sont chargées via `@font-face` dans `globals.css` et référencées dans `tailwind.config.ts` :

```css
/* globals.css */
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/Poppins-SemiBold.ttf');
}
```

```typescript
// tailwind.config.ts
fontFamily: {
  Poppins: ['Poppins', 'sans-serif'],
  Avenir: ['Avenir', 'Montserrat', 'sans-serif'],
  // ...
}
```

## 🚢 Déploiement

### Vercel (recommandé)
Le projet est optimisé pour un déploiement sur Vercel :

1. Connecter le repository GitHub à Vercel
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement à chaque push

```bash
# Ou utiliser Vercel CLI
npm i -g vercel
vercel
```

### Autre hébergeur
```bash
npm run build
npm run start
```

## 🔧 Personnalisation

### Modifier les couleurs
Éditer `tailwind.config.ts` :
```typescript
colors: {
  greenCustom: '#c1cd88',
  // Ajouter vos couleurs
}
```

### Ajouter un projet
1. Créer un dossier dans `src/app/projet/[nom-projet]/`
2. Ajouter `page.tsx` avec le contenu
3. Placer les images dans `public/[nom-projet]/`
4. Mettre à jour la page `Creation` avec la nouvelle carte

## 📄 License

Projet personnel - Tous droits réservés © Ludivine Rameaux

## 👤 Contact

- **Portfolio** : [https://ludirportfolio.vercel.app/]
- **LinkedIn** : [https://www.linkedin.com/in/ludivine-rameaux/]
- **Instagram** : [https://www.instagram.com/ludi.visuals/]

---
