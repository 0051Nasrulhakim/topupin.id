"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

// import dynamic from 'next/dynamic'
import AdminLayout from './admin_layout';
import PublicLayout from './public_layout';

export default function RootLayout({ children }) {

  const path = usePathname();

  if (path.startsWith('/admin')) {
    return (
        <AdminLayout>
          { children }
        </AdminLayout>
    )
  } else {
    return (
        <PublicLayout>
          { children }
        </PublicLayout>
    )
  }
}
