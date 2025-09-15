# Ashok Pemeram - Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React.js, TypeScript, and Tailwind CSS, featuring smooth animations and a beautiful dark theme design.

![Portfolio Preview](src/assets/hero-bg.jpg)

## 🚀 Live Demo

Visit the live portfolio: [Portfolio Website](https://ashokpemeram.dev)

## ✨ Features

### 🎨 Design & UI
- **Modern Dark Theme**: Elegant dark design with beautiful gradients and glowing effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Custom Design System**: Consistent colors, typography, and spacing throughout
- **Interactive Elements**: Hover effects, loading states, and micro-interactions

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Me**: Personal story, profile photo, and technical skills overview
3. **Projects**: Filterable project showcase with live demos and GitHub links
4. **Experience**: Professional timeline with detailed role descriptions
5. **Education**: Academic background and achievements
6. **Skills**: Interactive skill bars showing proficiency levels
7. **Testimonials**: Client and colleague feedback (optional)
8. **Contact**: Working contact form with validation and social links

### 🛠 Technical Features
- **React.js 18**: Latest React with hooks and functional components
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Professional animations and transitions
- **Modular Architecture**: Reusable components and clean file structure
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimization
- **Responsive Images**: Optimized images with proper alt attributes

## 🏗 Project Structure

```
src/
├── assets/                 # Images and static files
│   ├── hero-bg.jpg
│   ├── profile-photo.jpg
│   └── projects-showcase.jpg
├── components/
│   ├── Layout/             # Layout components
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── Sections/           # Main page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── data/
│   └── portfolioData.ts    # All portfolio content and data
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
├── pages/
│   ├── Index.tsx           # Main portfolio page
│   └── NotFound.tsx        # 404 error page
├── index.css               # Global styles and design system
└── main.tsx               # App entry point
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashok-pemeram/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` directory.

## 🎯 Customization Guide

### 1. Personal Information

Update your personal details in `src/data/portfolioData.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... other details
};
```

### 2. Projects

Add or modify projects in the same data file:

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    category: "Full-Stack", // or "Frontend", "Mobile"
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/repo",
    liveDemo: "https://project-demo.com",
    // ... other details
  }
];
```

### 3. Design System

Customize colors and styles in `src/index.css`:

```css
:root {
  --primary: 217 91% 60%;        /* Main brand color */
  --secondary: 263 70% 50%;      /* Secondary color */
  --accent: 188 100% 60%;        /* Accent color */
  /* ... other color variables */
}
```

### 4. Skills and Experience

Update your skills, experience, and education in `src/data/portfolioData.ts`.

### 5. Images

Replace the images in `src/assets/` with your own:
- `profile-photo.jpg`: Your professional headshot
- `hero-bg.jpg`: Hero section background (optional)
- Project images can be added and referenced in the projects data

## 🔧 Technologies Used

### Core Technologies
- **React.js**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI & Animations
- **Framer Motion**: Animation library
- **Radix UI**: Headless UI components
- **Lucide React**: Beautiful icons
- **shadcn/ui**: Pre-built component library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Class Variance Authority**: Component variants
- **clsx & tailwind-merge**: Conditional styling

## 📈 Performance Optimization

- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Proper image formats and lazy loading
- **Bundle Analysis**: Optimized bundle size
- **SEO**: Semantic HTML and meta tags
- **Accessibility**: WCAG compliant design

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio template. Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Ashok Pemeram**
- Email: ashokpemeram@gmail.com
- LinkedIn: [Ashok Pemeram](https://linkedin.com/in/ashok-pemeram)
- GitHub: [ashok-pemeram](https://github.com/ashok-pemeram)
- Portfolio: [ashokpemeram.dev](https://ashokpemeram.dev)

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
