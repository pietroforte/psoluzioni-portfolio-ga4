
# Terminal Command Cheat Sheet

This document helps you remember the key terminal commands for working with your Vercel + Git + Next.js project.

---

## 1. Start Local Development Server

```bash
npm run dev
```

- **Purpose**: Run your app locally at `http://localhost:3000`
- **When to Use**: After code changes to preview behavior locally

---

## 2. Stop Local Dev Server

```bash
Ctrl + C
```

- **Purpose**: Stop the local server running in the terminal
- **When to Use**: When switching tasks or running another command

---

## 3. Optional Local Build Check

```bash
npm run build
```

- **Purpose**: Test if the app builds successfully (e.g., for production)
- **When to Use**: Before deploying, to catch build errors early

---

## 4. Stage Changes for Commit

```bash
git add .
```

- **Purpose**: Stage all current changes for Git
- **When to Use**: After editing code and before committing

---

## 5. Commit Changes

```bash
git commit -m "Update index URL"
```

- **Purpose**: Record changes in Git with a message
- **When to Use**: After staging changes to describe what was done

---

## 6. Push to GitHub

```bash
git push origin main
```

- **Purpose**: Upload your commit to GitHub
- **When to Use**: To sync code with GitHub and trigger Vercel deploy (if linked)

---

## 7. Deploy Manually to Vercel

```bash
vercel --prod
```

- **Purpose**: Deploy latest local version to production
- **When to Use**: When not using GitHub integration or testing changes manually

---

## 8. Link Project to Vercel (First-Time Setup)

```bash
vercel
```

- **Purpose**: Start setup or link to existing Vercel project
- **When to Use**: One-time setup for deploying a new or renamed project
