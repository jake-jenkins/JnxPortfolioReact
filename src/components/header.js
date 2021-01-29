import React from "react"

const Header = ({ siteTitle }) => (

<header class="bg-blue-700			text-white">
  <div class="container mx-auto">
    <div class="flex items-center">
  <div class="flex-none">
    <a href="/">
    <img class="logo" src="https://cdn.spdy.live/uploads/jnx2_d83e25e919.svg"></img>
    </a>
  </div>
  <div class="flex-1 text-center space-x-2">
    <a href="/" class="py-2 px-2 font-semibold text-white bg-blue-800 hover:bg-blue-600 rounded-lg">Home</a>
    <a href="/about" class="py-2 px-2 font-semibold text-white bg-blue-800 hover:bg-blue-600 rounded-lg">About</a>
    <a href="/portfolio" class="py-2 px-2 font-semibold text-white bg-blue-800 hover:bg-blue-600 rounded-lg">Portfolio</a>
    </div>
  <div class="p-4 flex-none text-right">
    <a href="/contact" class="py-2 px-2 font-semibold text-black bg-yellow-400	 hover:bg-yellow-300 rounded-lg">
  Contact
</a>
    </div>
</div>
    </div>
</header>

);
export default Header
