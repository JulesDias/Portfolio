# Portfolio de Ludivine Rameaux

Portfolio professionnel présentant les projets de design et créations de Ludivine Rameaux (Strate École de Design).

## 📋 Description

Site web développé avec Next.js (App Router) qui présente des projets sous forme de pages dédiées, avec carrousels/scroll horizontaux, animations et une page “Créations” listant les projets.

## 🧭 Pages & routes

Routes présentes dans `src/app/` (la casse compte) :

- **`/`** : page d'accueil (hero + carousel Apple présentant 7 projets)
- **`/about`** : page profil (bio, formation, expériences, compétences) + vidéo `DroneViewStrate.mp4`
- **`/Creation`** : page listant les projets sous forme de rubans cliquables colorés
- **`/projet/Yepoda`** : typographie identitaire pour Yepoda
- **`/projet/GPT`** : fanzine "ChatGPT, ton meilleur ami ?"
- **`/projet/pompotes`** : extension de gamme packaging Pom'Potes
- **`/projet/signaletique`** : signalétique Résurgence (île Seguin)
- **`/projet/clipper`** : kit expérimental thé Clipper
- **`/projet/Ececook`** : kakémono + bannière LinkedIn pour association cuisine
- **`/projet/capsai`** : brandbook marque de sauce pimentée Capsaï

Une page 404 personnalisée est définie dans `src/app/not-found.tsx`.

## 🚀 Stack

Dépendances dans `package.json` :

- **Framework** : Next.js 15 + React 19 + TypeScript (strict)
- **Styling** : Tailwind CSS + `tailwind-merge` + `clsx` (via helper `cn()` dans `src/lib/utils.ts`)
- **Animations** : `motion` (v12) + `react-scroll-parallax`
- **Icônes** : `@tabler/icons-react`, `react-icons`


## 🎨 UI / Composants

- **Header.tsx** : header sticky qui se masque au scroll dès qu'un élément `#carousel-section` est présent sur la page
- **Footer.tsx** : pied de page avec liens réseaux sociaux
- **ClientParallaxWrapper.tsx** : wrapper client-side pour `<ParallaxProvider>` de `react-scroll-parallax`
- **ui/apple-cards-carousel.tsx** : carousel "Apple-style" utilisé sur la page d'accueil
- **ui/scrolling-carousel.tsx** : carousel auto-scroll infini (utilisé sur `/projet/signaletique`)
- **ui/bento-grid.tsx** : grille Bento (non utilisée actuellement sur `/Creation` qui affiche des rubans)

## 🎨 Couleurs & typographies

Palette Tailwind (voir `tailwind.config.ts`) :

- `greenCustom` `DarkGreenCustom` `OtherGreenCustom` `ClearBlueCustom` `PinkCustom`

Polices chargées via `@font-face` dans `src/styles/globals.css` depuis `public/fonts/` (Poppins, Montserrat, Kiera, Cinematografica, Yepoda, etc.).

## 📦 Installation

```bash
npm install
npm run dev
```

Le site est accessible sur http://localhost:3000

## 🛠️ Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## 📁 Structure (résumé)

```
portfolio/
  src/
    app/
      page.tsx about/ Creation/ projet/ not-found.tsx layout.tsx
    components/
      Header.tsx Footer.tsx ClientParallaxWrapper.tsx
      ui/apple-cards-carousel.tsx ui/bento-grid.tsx ui/scrolling-carousel.tsx
    styles/globals.css
    lib/utils.ts
  public/
    fonts/ (Poppins, Montserrat, Kiera, Cinematografica, Yepoda, etc.)
    Yepoda/ GPT/ EceCook/ Clippers/ Capsaï/ Workshop/ pompotes/ resurgence/
    DroneViewStrate.mp4 + images diverses
  tailwind.config.ts
  next.config.ts
  package.json
```

## 🖼️ Next/Image (domaines autorisés)

`next.config.ts` autorise notamment `images.unsplash.com` et `assets.aceternity.com`.

## 🔧 Ajouter / modifier un projet
## ⚠️ Points d'attention

1. **Import `framer-motion` vs dépendance `motion`** : tout le code fait `import { motion } from "framer-motion"` alors que `package.json` déclare `"motion": "^12.0.11"`. Cela fonctionnera si `motion` ré-exporte tout de `framer-motion` ou si un alias existe, sinon installer `framer-motion` explicitement.
2. **Slug incohérent dans `/Creation`** : le dernier projet (Capsaï) a `slug: "workshop"` alors que la route est `/projet/capsai`. Corriger le slug à `"capsai"` dans `src/app/Creation/page.tsx`.
3. **Dépendances inutilisées** : `@mantine/core`, `@mantine/hooks`, `react-toggle-dark-mode` sont présentes dans `package.json` mais jamais importées dans le code.
## ⚠️ Notes dev

- Le repo contient des dépendances non utilisées dans le code actuel (ex: Mantine, toggle dark mode).
- Plusieurs pages importent `framer-motion` alors que la dépendance déclarée est `motion`.
  Si tu as une erreur d'import, soit ajouter `framer-motion`, soit uniformiser les imports.

## 👤 Contact

- Portfolio : https://ludirportfolio.vercel.app/
- LinkedIn : https://www.linkedin.com/in/ludivine-rameaux/
- Instagram : https://www.instagram.com/ludi.visuals/

## 📄 License

Projet personnel — Tous droits réservés © Ludivine Rameaux
