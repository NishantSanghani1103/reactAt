FINALPROJECT/
│
├── node_modules/              # Installed dependencies
├── public/                   # Static public assets
│
├── src/                      # Main source code
│
│   ├── app/                  # App-level configuration
│   │   ├── AppProvider.jsx   # Context providers / global wrappers
│   │   ├── Router.jsx        # Main routing configuration
│   │   └── store.js          # Global state (Redux/Zustand/etc.)
│
│   ├── assets/               # Images, icons, fonts, etc.
│
│   ├── features/             # Feature-based modules
│   │
│   │   ├── admin/            # Admin-related functionality
│   │   │   ├── components/   # Reusable admin components
│   │   │   └── pages/        # Admin pages (Dashboard, Manage Products)
│   │
│   │   ├── auth/             # Authentication module
│   │   │   ├── components/   # Login/Register UI parts
│   │   │   └── pages/        # Login, Signup pages
│   │
│   │   ├── user/             # User-related features
│   │       ├── components/   # User UI components
│   │       └── pages/        # Profile, Orders, etc.
│
│   ├── hooks/                # Custom React hooks
│
│   ├── layouts/              # Layout components
│   │   ├── Header.jsx        # Navbar/Header
│   │   ├── Footer.jsx        # Footer
│   │   └── MainLayout.jsx    # Wrapper layout (Header + Footer + Outlet)
│
│   ├── pages/                # General pages
│   │   ├── Home.jsx
│   │   └── Product.jsx
│
│   ├── routes/               # Route protection & configs
│   │   ├── PrivateRoutes.jsx # Protected routes (auth required)
│   │   └── PublicRoutes.jsx  # Public routes
│
│   ├── styles/               # Global styles
│   │   ├── index.css
│   │   └── App.css
│
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point (React DOM render)
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js