

import { createFileRoute, redirect, useRouteContext } from '@tanstack/react-router'
import Login from '../features/auth/pages/Login'
import React from 'react';

export const Route = createFileRoute('/login')({
  beforeLoad: ({ context }) => {
    console.log(context);
    if (context.user != null) {
      return redirect({ to: "/" })
    }

  },
  component: React.memo(Login),
})

