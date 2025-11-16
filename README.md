# GitHub Finder

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react\&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-blue?logo=tailwind-css\&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-green?logo=vite\&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

GitHub Finder is a React web app that lets you search GitHub users and view their repositories. It uses the GitHub API to fetch user profiles and repositories and provides a responsive, modern interface with Tailwind CSS and DaisyUI.

---

### Screenshot
<img width="2559" height="1439" alt="image" src="https://github.com/user-attachments/assets/cb080262-72b0-43dd-bcc4-e871071bd8ec" />
<img width="2559" height="1439" alt="image" src="https://github.com/user-attachments/assets/51330330-7ec1-477a-a25a-07bfe8bf4e6c" />
<img width="2559" height="1439" alt="image" src="https://github.com/user-attachments/assets/4eb87721-0314-4ec8-8255-7791badf4072" />

### [Website Demo]([http://localhost:5173](https://github-finder-steel-one-71.vercel.app/)

---

## Features

* Search GitHub users by username
* View detailed user profiles: avatar, bio, followers, following
* Browse latest repositories of a user
* Responsive design for desktop and mobile
* Smooth navigation with React Router

---

## Technologies

* **React**
* **React Router DOM**
* **Tailwind CSS & DaisyUI**
* **Axios**
* **Vite**
* **ESLint**

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/github-finder.git
```

2. Navigate to the project folder:

```bash
cd github-finder
```

3. Install dependencies:

```bash
npm install
# or
yarn
```

---

## Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

Build for production:

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

---

## Project Structure

```
github-finder/
├── public/            # Static assets
├── src/
│   ├── components/    # React components
│   ├── context/       # Context for state management
│   ├── pages/         # Application pages
│   ├── App.jsx        # Main App component
│   └── main.jsx       # Entry point
├── package.json       # Project metadata and dependencies
└── tailwind.config.js # Tailwind CSS configuration
```

---

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build project for production   |
| `npm run preview` | Preview production build       |
| `npm run lint`    | Check code quality with ESLint |

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

* [GitHub API](https://docs.github.com/en/rest)
* [Tailwind CSS](https://tailwindcss.com/)
* [DaisyUI](https://daisyui.com/)
* [Vite](https://vitejs.dev/)
