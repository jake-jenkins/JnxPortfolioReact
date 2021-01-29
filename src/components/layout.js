import React from "react"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
    return (
      <div>
          <Header />
  <main class="container mx-auto px-4 py-5">
        {children}
        </main>
 <Footer/>
      </div>
    )
  }