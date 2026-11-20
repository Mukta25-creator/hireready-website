# HireReady website

A plain HTML/CSS/JS site. No build step, no installs. Works free on Netlify, Vercel or GitHub Pages.

## 1. Edit the details
Open `js/config.js` and replace the sample values: email, WhatsApp number, form links, payment links, fees, mentor, syllabus. Also edit the text in `about.html`.
Add roadmaps and questions in `js/resources-data.js`.

## 2. Run locally in VS Code
Install the "Live Server" extension, right-click `index.html`, then "Open with Live Server".

## 3. Push to GitHub
```
git init
git add .
git commit -m "HireReady website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hireready.git
git push -u origin main
```

## 4. Host free
- **GitHub Pages:** repo Settings > Pages > Deploy from branch `main` / root.
- **Netlify:** "Add new site" > "Import from GitHub", leave build command empty.
Then set `siteUrl` in `config.js` to your live address and push again.

## 5. Before sharing with TPOs
- Replace every `#` link in `config.js` (Google Form, payment links).
- Do not mention IBM or any partner brand unless you hold written permission.
- Fees, mentor and syllabus here are samples. Put only true details.
