"use client"

import { useState } from "react";
import { Inter } from "next/font/google";
import { BiMenuAltLeft } from "react-icons/bi";
import "./styles/styles.css";

import Nav from "../components/nav";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <html>
      <body>
        <div id="app" data-v-app="" className={isMenuOpen ? "open" : ""}>
          <div className="app-menu-burger" onClick={toggleMenu}>
            <button className="link">
              <BiMenuAltLeft
                aria-hidden="true"
                width="2em"
                height="2em"
                fill="currentColor"
                style={{
                  minWidth: 100 + "%",
                  miHeight: 100 + "%",
                  width: 32 + "px",
                  height: 32 + "px",
                }}
              />
            </button>
          </div>
          <Nav />
          <main data-v-da06829f="" className="pages">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
