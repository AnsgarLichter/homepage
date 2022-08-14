# Homepage
This is the latest version of [ansgarlichter.online](https://ansgarlichter.online) hosted with [GitHub Pages](https://pages.github.com/) and [Cloudflare](https://www.cloudflare.com/).

## 🛠 Installation & Set Up

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```
   nvm install
   ```
2. Install dependencies

   ```
   npm install
   ```

3. Start the development server (hot-reload is supported)

   ```
   vue serve
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```
   vue build
   ```

2. Install a Node.js static file server
   
   ```
   npm install -g serve
   ```
  
3. Preview the site as it will appear once deployed

   ```
   serve -s dist
   ```

## 📜Committing Changes
This project uses [husky](https://typicode.github.io/husky/#/) and [commitlint](https://commitlint.js.org/#/) to validate commit messages.
At the moment the [conventional convetions of commitlint](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) are used. These conventions are based on [Conventional Commits](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional).

## 🎨 Color Reference

### Light Mode

| Color           | Hex                                                                |
| --------------- | ------------------------------------------------------------------ |
| Primary         | ![#f2f2f2](https://via.placeholder.com/15/f2f2f2/f2f2f2.png) `#f2f2f2` |
| Primary light   | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) `#ffffff` |
| Primary dark    | ![#b9baba](https://via.placeholder.com/15/b9baba/b9baba.pmg) `#b9baba` |
| Secondary       | ![#4d4d4d](https://via.placeholder.com/15/4d4d4d/4d4d4d.png) `#4d4d4d` |
| Secondary light | ![#17191a](https://via.placeholder.com/15/17191a/17191a.png) `#17191a` |
| Secondary dark  | ![#707a80](https://via.placeholder.com/15/707a80/707a80.png) `#707a80` |
| Accent          | ![#007fad](https://via.placeholder.com/15/007fad/007fad.png) `#007fad` |

### Dark Mode

| Color           | Hex                                                                |
| --------------- | ------------------------------------------------------------------ |
| Primary         | ![#000000](https://via.placeholder.com/15/000000/000000.png) `#000000` |
| Primary light   | ![#232324](https://via.placeholder.com/15/232324/232324.png) `#232324` |
| Primary dark    | ![#434445](https://via.placeholder.com/15/434445/434445.png) `#434445` |
| Secondary       | ![#c2c2c2](https://via.placeholder.com/15/c2c2c2/c2c2c2.png) `#c2c2c2` |
| Secondary light | ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) `#ffffff` |
| Secondary dark  | ![#b8c8d9](https://via.placeholder.com/15/b8c8d9/b8c8d9.png) `#b8c8d9` |
| Accent          | ![#007fad](https://via.placeholder.com/15/007fad/007fad.png) `#007fad` |


## 🔍 Configurations
### Vue configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Tailwind configuration
See [Configuration Reference](https://tailwindcss.com/docs/configuration).

### Commitlint configuration
See [Commitlint rules](https://commitlint.js.org/#/reference-rules).
