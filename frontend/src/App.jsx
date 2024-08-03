import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import ProtectedRoute from './components/admin/ProtectedRoute';

const PostJob = lazy(() => import('./components/admin/PostJob'));
const Applicants = lazy(() => import('./components/admin/Applicants'));
const Companies = lazy(() => import('./components/admin/Companies'));
const CompanyCreate = lazy(() => import('./components/admin/CompanyCreate'));
const CompanySetup = lazy(() => import('./components/admin/CompanySetup'));
const AdminJob = lazy(() => import('./components/admin/AdminJob'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: '/reset-password/:token',
    element: <ResetPassword />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Companies />
        </Suspense>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <CompanyCreate />
        </Suspense>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <CompanySetup />
        </Suspense>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <AdminJob />
        </Suspense>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <PostJob />
        </Suspense>
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <Applicants />
        </Suspense>
      </ProtectedRoute>
    )
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
