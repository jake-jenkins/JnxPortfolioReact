import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const IndexPage = () => {
  return (

<Layout>

<Helmet>
    <title>Welcome - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>

<br/>
<div class="box shadow-xl rounded-b-xl rounded-t-md text-center text-white text-5xl py-36 px-5 bg-gradient-to-r from-purple-900 to-purple-500">
  <p>
    Lets Build Awesome Web Apps & Websites
  </p>
</div>
<br />
<div class="text-lg p-6">
<h1>Introducing Cutting-Edge Web Development</h1>
<p>Jake Jenkins is a Front End Web Developer with a passion for building the best, easiest to use web sites and applications.</p>
</div>
<p>&nbsp;</p>

<div class="grid grid-cols-1 md:grid-cols-2">
  <div class="text-lg p-6">
  <h2>Why work with me?</h2><br/>
    <div class="box-border h-4 w-4 bg-green-400 inline-block rounded-full"></div> I work in partnership and love working with users<br/>
    <div class="box-border h-4 w-4 bg-green-400 inline-block rounded-full"></div> I always go the extra mile<br/>
    <div class="box-border h-4 w-4 bg-green-400 inline-block rounded-full"></div> I make the complex, simple<br/>
    <div class="box-border h-4 w-4 bg-green-400 inline-block rounded-full"></div> I am experienced in design and build
  </div>
  <div class="text-lg p-6">
  <h2>What makes a great app or site?</h2><br/>
  <div class="box-border h-4 w-4 bg-blue-400 inline-block rounded-full"></div> Blazing Fast, latest technology<br/>
  <div class="box-border h-4 w-4 bg-blue-400 inline-block rounded-full"></div> Easy to Update<br/>
  <div class="box-border h-4 w-4 bg-blue-400 inline-block rounded-full"></div> Publishing Control<br/>
  <div class="box-border h-4 w-4 bg-blue-400 inline-block rounded-full"></div> Secure<br/>
<div class="box-border h-4 w-4 bg-blue-400 inline-block rounded-full"></div> Optimised for search engines

  </div>
  <div class="text-lg p-6">
    <h2>Core Technologies</h2><br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> REACT<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> node.js<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> HTML, CSS, SASS<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> Tailwind, Bootstrap and Bulma<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> .net Core Web Applications<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> Web Api<br/>
      <div class="box-border h-4 w-4 bg-purple-600 inline-block rounded-full"></div> MVC, Entity Framework<br/>

  </div>
  <div class="text-lg p-6">
    <h2>Availability</h2><br/>
    <div class="box-border h-4 w-4 bg-pink-500 inline-block rounded-full"></div> Looking for a new role<br/>
    <div class="box-border h-4 w-4 bg-pink-500 inline-block rounded-full"></div> Remote working or based in South Wales or Bristol<br/>
    <div class="box-border h-4 w-4 bg-pink-500 inline-block rounded-full"></div> 1 month notice period
  </div>

</div>

<p>&nbsp;</p>

</Layout>
  )
}

export default IndexPage