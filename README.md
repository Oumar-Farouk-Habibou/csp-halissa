# CSP Halissa — Site vitrine (Vue 3 + Vite)

## Démarrer
```
npm install
npm run dev        # http://localhost:5173
npm run build      # génère dist/
```

## Structure
```
src/data/school.js      TOUT le contenu modifiable (fondatrice, contact, cycles, galerie, actualités…)
src/components/         un composant .vue par section
src/style.css           design (couleurs en haut : :root)
public/assets/img/      logo.png, fondatrice.jpg, photo-1.jpg … photo-7.jpg (voir LISEZ-MOI.txt)
```

## Déployer sur Vercel
- Via GitHub : « Add New Project » → Vercel détecte Vite automatiquement.
- Ou en ligne de commande : `npm i -g vercel` puis `vercel --prod`.
