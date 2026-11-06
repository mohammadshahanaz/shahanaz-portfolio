# Shahanaz Mohammad — Professional Portfolio

A responsive React + Vite portfolio designed to present a versatile Computer Science graduate for a range of suitable fresher opportunities.

## Positioning
The portfolio is intentionally not limited to Software Engineer roles. It communicates skills relevant to:
- Software development and programming
- Data and business analytics
- AI-enabled application and knowledge retrieval work
- ServiceNow and IT platform roles
- IT support, networking and technology-enabled operations

Apply to roles that genuinely match your skills and the requirements of each job description.

## Portfolio content
- 8 technical skill categories
- 2 standalone projects: YOLO-Based Diabetic Retinopathy Detection and Brazilian E-Commerce Business Analytics
- 2 internships: Infosys Springboard and Cisco
- 3 education qualifications
- 2 ServiceNow certifications

The Infosys RAG work and Cisco network design are shown only under Internship Experience, not repeated as standalone projects.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Before publishing
1. Replace `YOUR-GITHUB-USERNAME` in `src/main.jsx`.
2. Add actual repository URLs to the two project `repo` fields.
3. Verify your contact information and project metrics.
4. `public/resume.pdf` contains the resume file currently supplied. Replace it with your latest PDF if needed.

## Build
```bash
npm run build
```

## Publish to GitHub Pages
Create a public GitHub repository named `shahanaz-portfolio`, then:
```bash
git init
git add .
git commit -m "Update professional portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shahanaz-portfolio.git
git push -u origin main
```
In GitHub, open Settings → Pages and select GitHub Actions. The included workflow deploys on pushes to `main`.
