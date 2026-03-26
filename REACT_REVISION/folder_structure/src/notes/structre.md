src/
│
├── app/                    # App-level setup
│   ├── router.jsx          # All routes (your current router goes here)
│   ├── store.js            # Redux/Zustand (if used)
│   └── providers.jsx       # Context providers
│
├── layouts/                # Layout components
│   └── MainLayout.jsx
│
├── routes/                 # Route guards
│   ├── PrivateRoutes.jsx
│   └── PublicRoutes.jsx
│
├── features/               # 🔥 MAIN FOLDER (feature-based)
│   │
│   ├── auth/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   ├── components/
│   │   ├── api.js
│   │   └── authSlice.js
│   │
│   ├── admin/
│   │   ├── pages/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── UserList.jsx
│   │   ├── components/
│   │   └── api.js
│   │
│   ├── user/
│   │   ├── pages/
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── UserSetting.jsx
│   │   ├── components/
│   │   └── api.js
│
├── pages/                  # Public pages (non-feature)
│   ├── Home.jsx
│   ├── About.jsx
│   └── Unauthorized.jsx
│
├── components/             # Reusable UI components
│   ├── Button/
│   ├── Card/
│   └── Loader/
│
├── hooks/                  # Custom hooks
│   ├── useAuth.js
│   └── useFetch.js
│
├── services/               # API config (axios instance)
│   └── apiClient.js
│
├── context/                # Context API
│   └── MainContext.jsx
│
├── utils/                  # Helpers
│   ├── constants.js
│   └── helpers.js
│
├── assets/                 # Images, icons
│
├── styles/                 # Global styles
│   └── global.css
│
├── App.jsx
└── main.jsx