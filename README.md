# Yakini

Site vitrine de Yakini — conseil, transformation digitale & IA aux Comores.

## Développement local

Prérequis : Node.js.

```sh
npm install
npm run dev
```

## Build de production

```sh
npm run build
```

Génère un Cloudflare Worker (`.output/`), déployé automatiquement via l'intégration
Git de Cloudflare Workers Builds à chaque push sur `main`.

## Structure

- `src/routes/` — pages (routing par fichier, TanStack Router)
- `src/components/` — composants et contenu du site (nav, footer, catalogue de solutions)
- `src/styles.css` — design tokens (couleurs, typographie) et styles globaux
