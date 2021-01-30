import * as React from "react"
import Layout from "../components/layout"

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <br/>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-center">

<div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-red-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Patient Portal</h2>
    A beautiful UI facade to enable front-line health staff to access data from multiple specialist systems.
      </div>
  </div>


 <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-yellow-400 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Student Helpdesk</h2>
    Text
      </div>
  </div>

<div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-green-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Sexual Health App</h2>
    Text
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-blue-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>jnx Website</h2>
    Text
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-indigo-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Sharepoint Intranet</h2>
    Text
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-purple-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Java Desktop App</h2>
    Text
      </div>
  </div>
  </div>

  </Layout>
);


export default Portfolio
