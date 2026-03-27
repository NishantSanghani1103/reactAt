src/
│
├── app/                          # App setup (core)
│   ├── AppProviders.jsx          # QueryClientProvider + optional Redux
│   ├── router.js                 # TanStack router instance
│   └── routeTree.gen.js          # auto-generated (do not edit)
│
├── routes/                       # 🔥 Routing layer ONLY
│
│   ├── __root.jsx                # Root layout (Header/Footer/Outlet)
│   ├── index.jsx                 # Home (/)
│   ├── about.jsx                 # /about
│   ├── contact.jsx               # /contact
│   ├── unauthorized.jsx          # /unauthorized
│
│   ├── auth/
│   │   └── login.jsx             # /auth/login
│
│   ├── admin/
│   │   ├── index.jsx             # /admin
│   │   └── dashboard.jsx         # /admin/dashboard
│
│   ├── user/
│   │   ├── index.jsx             # /user
│   │   └── dashboard.jsx         # /user/dashboard
│
├── features/                     # 🔥 Business logic (MAIN FOLDER)
│
│   ├── auth/
│   │   ├── pages/
│   │   │   └── Login.jsx
│   │   ├── api/
│   │   │   └── authApi.js
│   │   ├── hooks/
│   │   │   └── useLogin.js
│   │   └── authSlice.js          # optional (for auth state)
│
│   ├── admin/
│   │   ├── pages/
│   │   │   └── AdminDashboard.jsx
│   │   ├── components/
│   │   │   ├── DashboardCard.jsx
│   │   │   └── UserTable.jsx
│   │   ├── api/
│   │   │   └── adminApi.js
│   │   └── hooks/
│   │       ├── useUsers.js
│   │       └── useDeleteUser.js
│
│   ├── user/
│   │   ├── pages/
│   │   │   └── UserDashboard.jsx
│   │   ├── components/
│   │   │   └── ProfileCard.jsx
│   │   ├── api/
│   │   │   └── userApi.js
│   │   └── hooks/
│   │       └── useProfile.js
│
├── services/                     # Global services
│   ├── apiClient.js              # axios instance
│   └── queryClient.js            # TanStack Query setup
│
├── context/                      # Context API (UI only)
│   └── ThemeContext.jsx
│
├── components/                   # Shared reusable UI
│   ├── Button/
│   ├── Card/
│   └── Loader/
│
├── hooks/                        # Global hooks
│   └── useAuth.js
│
├── utils/                        # Helpers
│   └── helpers.js
│
├── styles/                       # Global styles
│   └── index.css
│
├── main.jsx
└── App.jsx