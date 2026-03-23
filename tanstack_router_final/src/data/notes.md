npm install @tanstack/react-router @tanstack/react-router-devtools
npm install -D @tanstack/router-plugin
import { tanstackRouter } from '@tanstack/router-plugin/vite';
   tanstackRouter({
      target: 'react',
      autoCodeSplitting: true, // optional — enables route code splitting
    }),