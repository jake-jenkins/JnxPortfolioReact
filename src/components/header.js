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
    <a href="/"><button class="py-2 px-4 font-semibold text-white bg-blue-800 hover:bg-blue-600">Home</button></a>
    <a href="/about"><button class="py-2 px-4 font-semibold text-white bg-blue-800 hover:bg-blue-600">About</button></a>
    <a href="/portfolio"><button class="py-2 px-4 font-semibold text-white bg-blue-800 hover:bg-blue-600">Portfolio</button></a>
    </div>
  <div class="p-4 flex-none text-right">
    <a href="/contact"><button class="py-2 px-4 font-semibold text-black bg-yellow-400	 hover:bg-yellow-300">
  Contact Me
</button></a>
    </div>
</div>
    </div>
</header>

);
export default Header
