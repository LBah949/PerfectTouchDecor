# Deploying Perfect Touch Decor to GitHub Pages

This guide explains how to deploy your static React application to GitHub Pages. Because this site uses no backend or database, it is perfectly suited for free hosting on GitHub Pages.

## Prerequisites
1. A GitHub account.
2. Git installed on your computer.
3. Node.js and npm installed.

## Step 1: Initialize Git and Push to GitHub
First, you need to push your code to a new GitHub repository.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```
*(Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub details).*

## Step 2: Update `vite.config.ts`
GitHub Pages hosts your site at `https://<username>.github.io/<repository-name>/`. 
Because of this, Vite needs to know the base URL of your project.

Open `vite.config.ts` and add the `base` property matching your repository name:

```typescript
export default defineConfig(({mode}) => {
  // ...
  return {
    base: '/YOUR_REPOSITORY_NAME/', // <-- ADD THIS LINE
    plugins: [react(), tailwindcss()],
    // ...
  }
});
```

## Step 3: Install the `gh-pages` package
We will use the `gh-pages` npm package to automate the deployment process.

Run this command in your terminal:
```bash
npm install gh-pages --save-dev
```

## Step 4: Add Deployment Scripts
Open your `package.json` file and add two new scripts inside the `"scripts"` block:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
* **`predeploy`**: Automatically builds your app into static files (in the `dist` folder) before deploying.
* **`deploy`**: Pushes the `dist` folder to a special `gh-pages` branch on your GitHub repository.

## Step 5: Deploy!
Run the following command to build and deploy your site:

```bash
npm run deploy
```

## Step 6: Configure GitHub Settings
1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under **Build and deployment**, ensure the **Source** is set to `Deploy from a branch`.
4. Under **Branch**, select the `gh-pages` branch and the `/ (root)` folder.
5. Click **Save**.

Your website will be live at `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/` within a few minutes!

---

### Important Note on Routing
This application has been configured to use `HashRouter` instead of `BrowserRouter` in `src/App.tsx`. 

GitHub Pages does not natively support Single Page Application (SPA) routing. If a user refreshed a page on `BrowserRouter` (e.g., `/shop`), GitHub Pages would look for a physical `shop.html` file and return a 404 error. `HashRouter` solves this by adding a `#` to the URL (e.g., `/#/shop`), ensuring all traffic routes through `index.html` seamlessly.
