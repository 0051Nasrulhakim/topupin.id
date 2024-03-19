'use client'
import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Menu() {

  const path = usePathname();

  if (path === '/' || path.startsWith('/categori/') && path.split('/').length === 3) {
    return (
      <div>
        <div className="carousell-custom">
          Ini Adalah Gambar Carousell
        </div>

        <div className="menu">
          <div className="list-menu active">
            <Link href="/" className="no-decoration">
              Dashboard
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/pulsa" className="no-decoration">
              Pulsa
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/paketData" className="no-decoration">
              Paket Data
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/game" className="no-decoration">
              Game
            </Link>
          </div>
        </div>
      </div>
    )
  } else {
    // Jika path bukan '/', return div kosong
    return (
      <div className="menu">
          <div className="list-menu active">
            <Link href="/" className="no-decoration">
              Dashboard
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/pulsa" className="no-decoration">
              Pulsa
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/paketData" className="no-decoration">
              Paket Data
            </Link>
          </div>
          <div className="list-menu">
            <Link href="/categori/game" className="no-decoration">
              Game
            </Link>
          </div>
        </div>
    );
  }
}
