import * as React from "react"
import Layout from "/src/components/layout"
import { Helmet } from "react-helmet"


const PatientPortal = () => (
  <Layout>
    <Helmet>
    <title>Patient Portal - Portfolio Showcase - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>

  <div class="p-4 bg-gray-100 rounded-xl">
    <a href="/">Home</a> <i class="lni lni-chevron-right"></i> <a href="/portfolio">Portfolio</a> 
    <i class="lni lni-chevron-right"></i> 
    <b>Patient Portal</b>
  </div>

<div class="py-36 text-center text-6xl font-extrabold text-blue-700">
  Patient Portal
</div>

<div class="p-6">
<h1>Summary</h1>
<p>
Doctors and nurses working on the front line in busy NHS organisations need access to lots of data which is held on multiple dedicated systems.  The Patient Portal provides a modern web app experience bringing all of this information together in a single, easy to use application.</p>
<p>
The application allows staff to search for a patient and view demographics, notes, xrays and results from multiple source systems.
</p>

<br/>
</div>

<div class="grid grid-cols-1 md:grid-cols-2">

<div class="p-6">
  <h2>Technology</h2>
  <p>A .net Core Web Application which utilises existing back-end apis for patient information.</p>
</div>

<div class="box-content p-36 bg-gray-300 text-center">
image
</div>

<div class="box-content p-2 text-center">
<video loop muted autoplay preload="auto">
    <source src="https://cdn.jnx.app/timeline.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div class="p-6">
  <h1>Bespoke View Components</h1>
  <br/>
  <h2>Timeline</h2>
  <p>A bespoke timeline was built as a .net Core View Component to show a date order view of pathology results.</p>
  <p>The View component takes in the patient identifier and consumes an api to display all blood results in date order.</p>
  <br/>

    <h2>Big List</h2>
  <p>Big list was inspired to help staff easily switch and filter long lists of caseloads and wards. Big List was utilised in a number of places within the app.</p>
  <br/>

    <h2>Patient Banner</h2>
  <p>Patient Banner brings all the information to your finger tips.  A Simple, elegant banner across the screen with the essential information about a patient.  Click the banner to see more detailed information.</p>
</div>

</div>
<br/>

  </Layout>
);


export default PatientPortal