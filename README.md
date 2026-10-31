# SHREEPAD Portfolio

Responsive freelance developer portfolio built with React and Vite.

## Local development

```bash
npm install
npm run dev
```

Vite uses port **5175** with `strictPort` enabled. If that port is occupied, the server exits instead of silently choosing another port.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`. The included `vercel.json` configures Vercel to build the app and serve that directory.

## Contact form

The form validates required fields in the browser and opens a prefilled email draft addressed to `sharnarthim@gmail.com`. The site does not send or store form submissions. A backend or form service can be connected later if desired.

The professional portrait is served from `public/images/profile.jpg`, and the resume PDF is served from `public/resume.pdf`. Replace either file at the same path to update the public portfolio assets.
