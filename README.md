# 🚀 TaskFlow - Task Management Application

A modern, responsive task management web application built with React and Tailwind CSS, featuring a beautiful dark/light theme toggle and intuitive user interface.

## 🌐 Live Demo

**Demo Link:** [https://wunda-assignment.vercel.app/features](https://wunda-assignment.vercel.app/features)

## 📁 Repository

**GitHub:** [https://github.com/AbhayKumar2611/WundaAssignment](https://github.com/AbhayKumar2611/WundaAssignment)

## ✨ Features

### 🎨 **Theme System**

- **Dark/Light Mode Toggle** - Seamless switching between themes
- **Context-based State Management** - React Context API for global theme state
- **Persistent Preferences** - Theme choice saved in localStorage
- **System Theme Detection** - Automatically detects user's system preference

### 🎯 **Core Functionality**

- **Real-time Collaboration** - Team communication and updates
- **Task Tracking** - Assign, monitor, and prioritize tasks
- **Team Analytics** - Performance insights and productivity metrics
- **Responsive Design** - Mobile-first approach with Tailwind CSS

### 🧩 **Component Architecture**

- **Modular Components** - Reusable UI components
- **Feature Cards** - Interactive feature showcases
- **Testimonial System** - User feedback and reviews
- **Navigation** - Smooth routing with React Router

### 🎨 **UI/UX Features**

- **Smooth Transitions** - CSS animations and hover effects
- **Modern Design** - Clean, professional interface
- **Accessibility** - ARIA labels and semantic HTML
- **Cross-browser Support** - Optimized for all modern browsers

## 🛠️ Tech Stack

### **Frontend Framework**

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing and navigation

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Custom CSS Variables** - Consistent design tokens

### **State Management**

- **React Context API** - Global state management
- **useState & useEffect** - Local component state
- **Local Storage** - Persistent user preferences

### **Development Tools**

- **ESLint** - Code quality and consistency
- **Git** - Version control
- **Vercel** - Deployment and hosting

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/AbhayKumar2611/WundaAssignment.git
   cd WundaAssignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### **Build for Production**

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
TaskFlow/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── common/       # Navigation, Footer
│   │   └── ui/           # FeatureCard, Button, etc.
│   ├── contexts/         # React Context providers
│   ├── pages/            # Page components
│   │   ├── static/       # About, Contact, Pricing, NotFound
│   │   └── ...           # Home, Features, Testimonials
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## 🎨 Theme System Architecture

### **ThemeContext.jsx**

- Manages global theme state (`isDark`)
- Provides `toggleTheme` function
- Persists theme preference in localStorage
- Detects system theme preference

### **Usage in Components**

```jsx
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext.jsx";

function MyComponent() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      Content with conditional styling
    </div>
  );
}
```

## 🌟 Key Components

### **Navbar**

- Responsive navigation with mobile menu
- Theme toggle button
- Smooth transitions and hover effects

### **FeatureCard**

- Interactive feature showcases
- Icon integration with Lucide React
- Hover animations and shadows

### **Button System**

- Multiple variants (primary, outline, ghost)
- Responsive sizing
- Theme-aware styling

## 📱 Responsive Design

- **Mobile-first approach** with Tailwind CSS
- **Breakpoint system**: sm, md, lg, xl
- **Flexible layouts** that adapt to all screen sizes
- **Touch-friendly** interactions for mobile devices

## 🚀 Deployment

The application is deployed on **Vercel** for optimal performance and global CDN distribution.

**Deployment URL:** [https://wunda-assignment.vercel.app](https://wunda-assignment.vercel.app)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhay Kumar**

- GitHub: [@AbhayKumar2611](https://github.com/AbhayKumar2611)
- Project: [WundaAssignment](https://github.com/AbhayKumar2611/WundaAssignment)

## 🙏 Acknowledgments

- **Tailwind CSS** for the amazing utility-first framework
- **Lucide React** for beautiful, customizable icons
- **React Team** for the incredible JavaScript library
- **Vercel** for seamless deployment and hosting

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo:** [https://wunda-assignment.vercel.app/features](https://wunda-assignment.vercel.app/features)
