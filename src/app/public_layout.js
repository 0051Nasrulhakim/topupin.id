// 'use client'
import { Inter } from "next/font/google";
import "../css/globals.css";
import "../css/custom/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import dynamic from 'next/dynamic'
// const Menu = dynamic(() => import('../component/menu'));
import Menu from '../component/menu';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TopUpin.ID",
  description: "Generated by create next app",
};

export default function PublicLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <div className="container-custom">

          <div className="navbar-custom">
            <div className="logo">
              <div className="navbar-brand-custom">
                TopUpin.ID
              </div>
            </div>
          </div>

          <Menu />

          <div className="container-wrapper">
            {children}
          </div>

          <div className="footer-custom">
            <div className="content">
              Ini Adalah Footer
            </div>
          </div>

        </div>
      </body>
    </html>
  );
}
