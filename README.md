# Homepage

This is the repository of my personal portfolio homepage [ansgarlichter.online](https://ansgarlichter.online) hosted with [GitHub Pages](https://pages.github.com/) and [Cloudflare](https://www.cloudflare.com/).

## 📜 Dependency Overview

* [Vite](https://vitejs.dev/) as build tool
* [Vue.js](https://vuejs.org/) as framework for web development
* [Tailwind.css](https://tailwindcss.com/) to handle CSS easier
* [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure consistent commit messages

## 🛠 Installation & Set Up

1. Install and use the correct version of Node using [Node Version Manager](https://github.com/nvm-sh/nvm)

2. Install dependencies

   ```bash
   npm install
   ```

3. Start vite's development server (hot module reload is supported)

   ```bash
   npm run dev
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```bash
   npm run build
   ```

2. Run the preview of the production build

   ```bash
   npm run preview
   ```

## 📜 Committing Changes

This projects uses the [Conventional Commits](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) convetion to ensure the quality
of the commit messages.
The messages are checked while committing using [husky](https://typicode.github.io/husky/#/) and [commitlint](https://commitlint.js.org/#/).

## 🎨 Color Reference

### Light Mode

| Color           | Hex                                                                |
| --------------- | ------------------------------------------------------------------ |
| Primary         | ![#f2f2f2](https://via.placeholder.com/15/f2f2f2/000000?text=+) `#f2f2f2` |
| Primary light   | ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `#ffffff` |
| Primary dark    | ![#b9baba](https://via.placeholder.com/15/b9baba/000000?text=+) `#b9baba` |
| Secondary       | ![#4d4d4d](https://via.placeholder.com/15/4d4d4d/000000?text=+) `#4d4d4d` |
| Secondary light | ![#17191a](https://via.placeholder.com/15/17191a/000000?text=+) `#17191a` |
| Secondary dark  | ![#707a80](https://via.placeholder.com/15/707a80/000000?text=+) `#707a80` |
| Accent          | ![#007fad](https://via.placeholder.com/15/007fad/000000?text=+) `#007fad` |

### Dark Mode

| Color           | Hex                                                                |
| --------------- | ------------------------------------------------------------------ |
| Primary         | ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `#000000` |
| Primary light   | ![#232324](https://via.placeholder.com/15/232324/000000?text=+) `#232324` |
| Primary dark    | ![#434445](https://via.placeholder.com/15/434445/000000?text=+) `#434445` |
| Secondary       | ![#c2c2c2](https://via.placeholder.com/15/c2c2c2/000000?text=+) `#c2c2c2` |
| Secondary light | ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `#ffffff` |
| Secondary dark  | ![#b8c8d9](https://via.placeholder.com/15/b8c8d9/000000?text=+) `#b8c8d9` |
| Accent          | ![#007fad](https://via.placeholder.com/15/007fad/000000?text=+) `#007fad` |

## 🔍 Configurations

### Vite configuration

See [Configuration Reference](https://vitejs.dev/config/).

### Vue configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Tailwind configuration

See [Configuration Reference](https://tailwindcss.com/docs/configuration).

### Commitlint configuration

See [Commitlint rules](https://commitlint.js.org/#/reference-rules).
