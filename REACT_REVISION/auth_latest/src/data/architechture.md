src/
│
├── assets/                # Images, icons, fonts
│     ├── images/
│     └── styles/
│
├── components/            # Reusable UI components
│     ├── common/          # Button, Input, Loader
│     └── layout/          # Navbar, Footer
│
├── features/              # Feature-based modules
│     └── auth/
│           ├── Login.jsx
│           ├── Register.jsx
│           ├── authService.js
│           └── authSlice.js   # (Redux optional)
│
├── pages/                 # Page-level components
│     ├── Home.jsx
│     ├── Dashboard.jsx
│     ├── News.jsx
│     └── NotFound.jsx
│
├── routes/                # Routing logic ⭐
│     ├── AppRoutes.jsx
│     ├── PrivateRoute.jsx
│     └── PublicRoute.jsx
│
├── services/              # API calls
│     ├── apiClient.js     # axios/fetch config
│     └── newsService.js
│
├── hooks/                 # Custom hooks
│     └── useAuth.js
│
├── context/               # Global state (Context API)
│     └── AuthContext.js
│
├── utils/                 # Helper functions
│     ├── auth.js
│     └── helpers.js
│
├── constants/             # Static values
│     └── apiUrls.js
│
├── layouts/               # Layout wrappers
│     └── MainLayout.jsx
│
├── config/                # App configuration
│     └── env.js
│
├── App.js                 # Root component
├── index.js               # Entry point
└── App.css                # Global styles