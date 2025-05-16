
# 🔧 GitHub Versioning + CI/CD Quick Guide

## 📁 Repository Structure

| Branch        | Purpose                                      |
|---------------|----------------------------------------------|
| `main`        | Production-ready code                        |
| `dev`         | Integration branch for tested development    |
| `feature/*`   | New features or experimental changes         |
| `hotfix/*`    | Urgent bug fixes to be applied to `main`     |

---

## 🏷️ Versioning Releases

### Create a Tag
```bash
git checkout main
git merge dev
git tag v1.0.0
git push origin main --tags
```

### List Tags
```bash
git tag
```

### Delete a Tag (Local and Remote)
```bash
git tag -d v1.0.0
git push --delete origin v1.0.0
```

---

## 🔄 Continuous Integration / Continuous Deployment (CI/CD)

| Stage | Description                                | Tools                        |
|-------|--------------------------------------------|------------------------------|
| CI    | Automatically builds & tests code on push  | GitHub Actions, Vercel      |
| CD    | Automatically deploys built code to web    | Vercel, Netlify, GitHub Pages |

### Vercel Example:
- Push to `main` → Deploy to production.
- Push to `dev` or `feature/*` → Deploy to preview URL.

---

## 🛡️ Security & Best Practices

### Use `.gitignore`
```plaintext
node_modules/
.env
.env.local
.vercel
*.log
```

### Never Commit Secrets
- Use environment variables locally.
- Use GitHub Secrets (Settings → Secrets → Actions).
- Use Vercel Environment Variables for deployments.

### Tools for Security
- [GitGuardian](https://www.gitguardian.com/)
- GitHub Secret Scanning (automatic in private repos)
- Enable 2FA on your GitHub account

---

## 📦 Release Organization
- Use GitHub's **Releases** tab to manage versions.
- Write changelogs to communicate updates.
- Download specific versions via GitHub tags.

---

## ✅ Summary Workflow

1. Create `feature/*` branch
2. Merge into `dev` after testing
3. Merge `dev` into `main` for release
4. Tag with version and push
5. CI/CD tools deploy automatically
6. Secrets handled via environment variables

---

For more: [GitHub Docs](https://docs.github.com/en) | [Vercel Docs](https://vercel.com/docs)
