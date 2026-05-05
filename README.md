# Deepika Portfolio

A personal portfolio website built with Next.js 16, React 19, and Tailwind CSS 4. It showcases professional experience, technical skills, projects, education, certificates, and a contact form.

---

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Node.js
- React Icons
- Nodemailer (contact form backend)

---

## Features

- Fully responsive layout for mobile and desktop
- Clean, modern portfolio design
- Hero section with introduction
- About section with summary and skills
- Project showcase with images and details
- Education and certificates sections
- Contact form with API route
- Component-based architecture for easy updates

---

## Project Structure

```text
my-portfolio/
├── app/
│   ├── api/contact/route.js   # Contact form API route
│   ├── components/           # Reusable UI components
│   │   ├── About.js
│   │   ├── Certificates.js
│   │   ├── Contacts.js
│   │   ├── Education.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   └── Projects.js
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Home page
├── public/                   # Static assets and project images
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS config
├── tailwind.config.mjs       # Tailwind config
└── README.md                 # Project documentation
```

---

## Setup Instructions

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run locally

1. Clone the repository

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. Open in browser

```text
http://localhost:3000
```

---

## Deployment

This project is intended to be deployed on Vercel only.

### Deploy to Vercel

1. Push the repository to GitHub
2. Visit https://vercel.com and sign in
3. Import the GitHub repository
4. Use the default build settings
5. Deploy the app


---

## Sections

- Home
- About
- Projects
- Education
- Certificates
- Contact

---

## Contact

Update the contact details in the app and `README.md` as needed.

---

## Notes

- The contact form sends data through the `app/api/contact/route.js` route.
- Static project images are stored in `public/projects/`.
- The project is built with the latest Next.js app router conventions.
