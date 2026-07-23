# 📚 LearnSphere – Responsive Learning Platform

LearnSphere is a modern, responsive learning platform built using **React**, **Vite**, and **Tailwind CSS v4**. The project focuses on creating a clean, reusable, and responsive user interface while following modern frontend development practices.

The application allows users to explore available courses, search and filter courses, monitor their learning progress, receive notifications, and view detailed course information through an interactive modal.

---

# ✨ Features

### 🏠 Responsive Navigation
- Sticky navigation bar
- Mobile hamburger menu
- Active navigation links
- Search icon
- User profile icon
- Notification center

### 📖 Hero Section
- Welcome banner
- Responsive layout
- Call-to-action section

### 📊 Learning Statistics
- Total Courses
- Completed Courses
- Courses In Progress
- Certificates Earned

### 🔍 Course Search & Filtering
- Search courses by title
- Category-based filtering
- Case-insensitive search
- Empty state when no courses match

### 📚 Course Cards
- Responsive course grid
- Course thumbnail
- Category badge
- Status badge
- Progress bar
- View Details button

### 🔔 Notification Center
- Notification bell
- Dynamic unread badge
- Notification dropdown
- Read / unread notification styling
- Outside click to close
- Interactive hover states
- Keyboard accessibility

### 📄 Course Details Modal
- Responsive modal layout
- Course image
- Instructor information
- Rating
- Duration
- Course level
- Student enrollment
- Course description
- Category & status badges
- Progress bar
- Start Learning button
- Close using:
  - Close button
  - Overlay click
  - Escape key
- Internal scrolling for long content
- Accessible dialog

---

# 🛠 Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- Tailwind CSS v4
- React Icons
- Google Fonts
  - Poppins
  - Inter

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone <repository-url>
```

## Navigate to Project

```bash
cd LearnSphere
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

Open the URL displayed in the terminal (usually):

```
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🎨 Tailwind CSS v4 Setup

Tailwind CSS v4 is configured using the CSS-first approach.

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### Vite Plugin

Added Tailwind plugin inside:

```
vite.config.js
```

### Global CSS

Imported Tailwind inside:

```
src/index.css
```

```css
@import "tailwindcss";
```

### Theme Configuration

Custom design tokens are created using the `@theme` block.

Includes:

- Primary Color
- Secondary Color
- Light Variants
- Dark Variants
- Heading Font
- Body Font

---

# 📁 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── StatsCard.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── CourseGrid.jsx
│   ├── CourseCard.jsx
│   ├── CourseDetailsModal.jsx
│   ├── NotificationButton.jsx
│   ├── NotificationPanel.jsx
│   ├── NotificationItem.jsx
│   └── Footer.jsx
│
├── data/
│   ├── courses.js
│   └── notifications.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚛ React Concepts Used

This project demonstrates several important React concepts:

- Functional Components
- Component Reusability
- Props
- State Management using `useState`
- Side Effects using `useEffect`
- DOM References using `useRef`
- Conditional Rendering
- Event Handling
- Rendering Lists using `map()`
- Filtering Data
- Component Composition
- Lifting State Up

---

# 🎯 Tailwind CSS Concepts Used

- Mobile-first design
- Responsive breakpoints
- Flexbox
- CSS Grid
- Gap utilities
- Padding & Margin utilities
- Typography utilities
- Border utilities
- Rounded corners
- Shadows
- Hover effects
- Focus states
- Active states
- Transition utilities
- Overflow utilities
- Position utilities
- Z-index
- Custom Theme
- Utility-first styling

---

# ♿ Accessibility Features

The project follows basic accessibility best practices.

Implemented features include:

- Accessible buttons
- `aria-label`
- `role="dialog"`
- `aria-modal="true"`
- `sr-only` labels
- Keyboard support
- Escape key to close modal
- Visible focus rings
- Semantic HTML

---

# 📱 Responsive Design

The application is tested across multiple screen sizes.

| Device | Width |
|---------|------|
| Mobile | 375px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1440px |

Responsive techniques include:

- Mobile-first development
- Flexible layouts
- Responsive grids
- Responsive typography
- Responsive spacing
- Responsive modal
- Responsive navigation

---

# 🧠 UI/UX Improvements Implemented

- Sticky navigation bar
- Dynamic notification badge
- Interactive notification dropdown
- Read / unread notification styles
- Professional course details modal
- Smooth UI transitions
- Progress indicators
- Consistent spacing
- Reusable components
- Responsive layouts

---

# 📚 Sample Course Information

Each course includes:

- Title
- Description
- Image
- Category
- Instructor
- Rating
- Duration
- Level
- Students Enrolled
- Progress
- Status

---

# 📌 Future Improvements

Possible future enhancements include:

- Backend integration
- User authentication
- Course enrollment
- Bookmark/Favorites
- Progress persistence
- API integration
- Dark mode
- User profile page
- Certificate generation
- Real-time notifications

---

# 👩‍💻 Developer Notes

This project was built as part of a frontend learning journey focused on:

- React fundamentals
- Tailwind CSS
- Responsive Web Design
- Component-based architecture
- UI consistency
- Accessibility
- Modern frontend development practices

The codebase emphasizes readability, reusability, and maintainability while following common frontend development conventions.

---

# 🙌 Acknowledgements

- React
- Vite
- Tailwind CSS
- React Icons
- Google Fonts

---

## 📄 License

This project is created for learning and educational purposes.