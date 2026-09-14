# 🚀 3D Developer Portfolio

A modern, interactive **3D developer portfolio** built with React, Three.js, React Three Fiber, and Tailwind CSS.

The portfolio combines responsive UI with interactive 3D models, animations, project showcases, and a functional contact form to create an engaging experience for recruiters, clients, and other developers.


---

## ✨ Features

* 🎨 Modern and responsive portfolio design
* 🌐 Interactive 3D scenes powered by Three.js
* 🖥️ 3D computer model with video texture
* 👨‍💻 Animated 3D developer avatar
* 🎓 Interactive education section with animated 3D character
* 🌍 Interactive 3D globe
* 📂 Dynamic project showcase
* 🔗 Live project links
* 📧 Functional contact form using EmailJS
* 🔔 Toast notifications for contact form feedback
* 📱 Fully responsive across desktop, tablet, and mobile
* 🧭 Scroll-aware navigation with active section highlighting
* ✨ GSAP-powered animations and transitions
* 🎥 Video textures rendered directly on 3D models
* 🖱️ Interactive Three.js controls
* ⚡ Vite-powered development and production builds

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **JavaScript / JSX**
* **Tailwind CSS v4**
* **Vite**

### 3D & Animation

* **Three.js**
* **React Three Fiber**
* **React Three Drei**
* **GSAP**
* **@gsap/react**
* **Maath**
* **React Globe GL**

### UI & Utilities

* **React Icons**
* **React Responsive**
* **React Toastify**
* **Leva**

### Communication

* **EmailJS**

---

## 📦 Main Dependencies

| Technology        | Purpose                                  |
| ----------------- | ---------------------------------------- |
| React             | UI development                           |
| Vite              | Development server and build tooling     |
| Tailwind CSS      | Styling and responsive design            |
| Three.js          | 3D rendering                             |
| React Three Fiber | React renderer for Three.js              |
| React Three Drei  | Reusable Three.js helpers and components |
| GSAP              | UI and 3D animations                     |
| React Globe GL    | Interactive 3D globe                     |
| EmailJS           | Contact form email delivery              |
| React Toastify    | User notifications                       |
| React Responsive  | Responsive behavior                      |
| Leva              | Development controls for 3D scenes       |

---


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ashutosh2712/threeJs-work-portfolio.git
```

### 2. Navigate into the project

```bash
cd threejs_portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local URL shown by Vite, usually:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Linting

Run ESLint with:

```bash
npm run lint
```

---

## 📧 Contact Form

The contact section uses **EmailJS** to send messages directly from the portfolio.

The form collects:

* Full Name
* Email
* Message

After submission, users receive visual feedback through React Toastify.

### EmailJS Configuration

If you fork this project, create your own EmailJS service and template and replace the credentials in the contact component.

For production applications, avoid exposing sensitive credentials directly in source code. Prefer environment variables where appropriate.

Example:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then access them using:

```js
import.meta.env.VITE_EMAILJS_SERVICE_ID
```

---

## 🎨 Tailwind CSS

This project uses **Tailwind CSS v4** with the Vite plugin.

Tailwind is configured through CSS using `@import` and `@theme` rather than the traditional `tailwind.config.js` approach.

Example:

```css
@import "tailwindcss";

@theme {
  --font-heading: "Space Grotesk", sans-serif;
  --font-outfit: "Outfit", sans-serif;

  --color-black-200: #0e0e10;
  --color-black-300: #1c1c21;
}
```

---

## 🌐 3D Components

The portfolio makes extensive use of React Three Fiber and Drei.

Some of the interactive 3D experiences include:

### 🖥️ 3D Computer

A 3D computer model is rendered using React Three Fiber, with a video texture displayed directly on the monitor.

```jsx
<mesh>
  <meshBasicMaterial map={videoTexture} />
</mesh>
```

### 👨‍💻 3D Avatar

The portfolio includes an animated 3D character using GLTF/FBX models and animation clips.

Different animations can be triggered based on user interaction.

### 🎓 Education Character

The education section uses a separate animated 3D character with different animations corresponding to education entries.

### 🌍 Interactive Globe

The portfolio also includes an interactive globe powered by `react-globe.gl`, including animated arcs and geographic visualization.

---

## 📱 Responsive Design

The portfolio is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

Responsive behavior is implemented using Tailwind CSS utilities and `react-responsive`.

Different 3D model sizes, positions, and layouts are also adjusted based on viewport size.

---

## 🧭 Navigation

The navbar supports:

* Desktop navigation
* Mobile navigation menu
* Smooth scrolling
* Active section highlighting
* Responsive layout

Navigation links use section anchors such as:

```text
#home
#about
#work
#contact
```

The active navigation item is updated based on the section currently visible in the viewport.

---

## 🎞️ Animations

Animations are implemented using a combination of:

* GSAP
* React Three Fiber
* Three.js
* CSS animations

Examples include:

* 3D model animations
* Scroll-based animations
* Hover interactions
* Animated navigation
* Project transitions
* Loading animations

---

## ⚡ Performance Considerations

Because the project uses several 3D assets, performance is an important consideration.

Some techniques used include:

* GLTF preloading
* Suspense-based loading
* Responsive model scaling
* Disabled unnecessary camera controls
* Optimized video textures
* Lazy loading of heavy 3D resources where appropriate

For production deployment, further optimization can include:

* Compressing GLTF/GLB models
* Optimizing textures
* Compressing video assets
* Using appropriate image formats
* Reducing unnecessary polygon counts
* Lazy loading complex 3D scenes

---

## 🧩 Environment

Recommended:

```text
Node.js 18+
npm 9+
```

The project uses:

```text
React 19
Three.js
Tailwind CSS 4
Vite
```

---

## 🚀 Deployment

This project can be deployed to platforms that support Vite/React applications, such as:

* Vercel
* Netlify
* GitHub Pages
* Cloudflare Pages

Build the project using:

```bash
npm run build
```

The production files will be generated in:

```text
dist/
```

---

## 🔮 Future Improvements

Potential future enhancements include:

* [ ] Add more interactive 3D scenes
* [ ] Improve 3D asset optimization
* [ ] Add additional avatar animations
* [ ] Add project filtering/categories
* [ ] Add dark/light theme support
* [ ] Add more micro-interactions
* [ ] Improve accessibility
* [ ] Add SEO metadata
* [ ] Add analytics
* [ ] Add more detailed project case studies

---

## 👨‍💻 Author

### Ashutosh Roy

Full Stack Developer focused on building modern web applications, interactive experiences, and scalable software solutions.

### Tech Interests

* React
* Next.js
* Node.js
* Three.js
* PostgreSQL
* Docker
* REST APIs
* Modern JavaScript
* AI-powered applications

---

## ⭐ Support

If you find this project interesting or useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is intended primarily as a personal portfolio project.

If you plan to reuse significant portions of the code or assets, please check the respective licenses of the third-party libraries, models, fonts, textu
