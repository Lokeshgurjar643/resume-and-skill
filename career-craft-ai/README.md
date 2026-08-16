# CareerCraft AI — LinkedIn Profile Optimizer & Career Assistant

> **A 100% LinkedIn TOS-Compliant AI Career Assistant and Profile Optimizer designed for students, tech interns, and job seekers.**

Built with a clean **Google Minimalist & Material Design** aesthetic, this tool analyzes resumes and LinkedIn profiles, diagnoses skill gaps against real industry demands, rewrites headlines and About summaries, transforms weak bullet points into high-impact Google XYZ / STAR metrics, and launches safe outbound LinkedIn job searches.

---

## 🌟 Key Features

1. **Dual Ingestion & Client-Side PDF Extraction**:
   - Native drag-and-drop resume upload (PDF/TXT) with private client-side text parsing via `pdf.js`.
   - Direct LinkedIn profile field inputs.
   - 4 Pre-configured student demo personas (*CS Student, Junior SWE, Data Analyst, Cloud DevOps*).

2. **LinkedIn Profile Optimizer & Health Score (0–100)**:
   - Comprehensive profile score gauge with sub-breakdown for **Headline Impact**, **About Section Hook**, **Skill Density**, and **STAR Project Impact**.
   - **Headline Optimizer**: 3 high-converting variants (*Recruiter Search Magnet, Quantified Impact, Specialist*) with character limits (220 max) and direct 1-click links to LinkedIn's intro editor.
   - **About Section Storycrafter**: 4-part structured narrative with instant copy-to-clipboard.
   - **STAR / Google XYZ Project Bullet Transformer**: Converts generic task descriptions into metric-driven statements (`Accomplished [X], as measured by [Y], by doing [Z]`).
   - **Top 5 Skills to Add**: Specific high-yield skill tags to boost ranking in LinkedIn Recruiter search filters.

3. **Skill-Gap Analysis & 14-Day Accelerated Roadmap**:
   - Identifies matched skills vs missing critical industry skills (*e.g., Spring Boot, REST APIs, Docker*) with recruiter impact explanations.
   - Day-by-day 2-week learning sprint with curated links to free official documentation and tutorials.

4. **Safe Outbound Job Recommendation Launcher**:
   - Matches candidate profile with 6 curated job roles.
   - Generates structured Boolean search URLs (e.g. `("Software Engineer Intern" OR "Backend Intern") AND "Java" AND "Spring"`) with experience level filters (`Internship`, `Entry-level`), plus links to Google Jobs and Indeed.

5. **Live "Before vs After" LinkedIn Mockup**:
   - Authentic light-themed preview of how the user's profile card appears to recruiters, with a 1-click toggle between Original and AI-Optimized versions.

6. **Export & Print**:
   - Export full printable PDF report and 1-click Markdown copy.

---

## 🛡️ Architecture & Compliance Note

This application strictly adheres to official platform best practices:
- **No Unauthorized Scraping**: Eliminates account bans and CAPTCHA locks.
- **Zero Credential Collection**: Never asks for user passwords or authentication tokens.
- **Client-Side Privacy**: Resumes are parsed locally in the browser and never sent to third-party storage.
- **Deep-Link Architecture**: Operates as an intelligent inbound analyzer & outbound launcher with direct official deep-links to LinkedIn's editing pages (`https://www.linkedin.com/in/me/edit/...`).

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, Safari).
- (Optional) Python or Node.js for local static serving.

### Running Locally

Clone the repository and open `index.html` directly in your browser, or run a local web server:

```bash
# Using Python
python -m http.server 5173

# Or using Node.js / npx
npx serve .
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your browser.

---

## 📁 Project Structure

```
career-craft-ai/
├── index.html       # Semantic HTML5 structure with Google Minimalist layout
├── styles.css       # Google Material 3 design system with CSS custom properties
├── app.js           # Client-side PDF parser, career knowledge graph & scoring engine
└── README.md        # Project documentation
```

---

## 📄 License
MIT License
