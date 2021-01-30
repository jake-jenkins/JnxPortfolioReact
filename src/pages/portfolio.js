import * as React from "react"
import Layout from "../components/layout"

const Portfolio = () => (
  <Layout>
    <h1>Portfolio</h1>
    <br/>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4 text-center">

<a href="/portfolio/patient-portal-cws">
<div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-red-600 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Patient Portal</h2>
    A beautiful UI facade to enable front-line health staff to access data from multiple specialist systems.
      </div>
  </div>
</a>

<a href="/portfolio/student-helpdesk">
 <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 bg-yellow-400 rounded-t-xl">
      </div>
      <div class="p-8">
        <h2>Student Helpdesk</h2>
    A customised, brand compliant front-end for a CRM syste used by 30,000 students and 3,000 staff.
      </div>
  </div>
  </a>

<div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 py-28 text-white text-3xl bg-green-600 rounded-t-xl">
      Coming Soon
      </div>
      <div class="p-8">
        <h2>Sexual Health App</h2>
    A complete web-based sexual health clinic application to manage STI screening, HIV care and contraception appointments, results and records.
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 py-28 text-white text-3xl bg-blue-600 rounded-t-xl">
      Coming Soon
      </div>
      <div class="p-8">
        <h2>jnx Website</h2>
    A REACT based gatsby Front End website to promote my work.  Driving by an API backend.
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 py-28 text-white text-3xl bg-indigo-600 rounded-t-xl">
      Coming Soon
      </div>
      <div class="p-8">
        <h2>Sharepoint Intranet</h2>
    A staff intranet using Modern Sharepoint Multisite supporting bilingual content.
      </div>
  </div>
  <div class="shadow-md rounded-b-xl">
    <div class="h-64 p-4 py-28 text-white text-3xl bg-purple-600 rounded-t-xl">
      Coming Soon
      </div>
      <div class="p-8">
        <h2>Java Desktop App</h2>
    A university courework project to demonstrate a Java client application for Project Management.
      </div>
  </div>
  </div>

  </Layout>
);


export default Portfolio
