import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "/src/components/layout"

const StudentHelpdesk = () => (
  <Layout>
    <Helmet>
    <title>Student Helpdesk - Portfolio Showcase - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
  <div class="p-4 bg-gray-100 rounded-xl">
    <a href="/">Home</a> <i class="lni lni-chevron-right"></i> <a href="/portfolio">Portfolio</a> 
    <i class="lni lni-chevron-right"></i> 
    <b>Student Helpdesk</b>
  </div>

<div class="py-36 text-center text-6xl font-extrabold text-blue-700">
  Student Helpdesk
</div>
<div class="p-6">
<h1>Summary</h1>
<p>
The Student Helpdesk was a new system introduced in 2018 to a university with 30,000 students.  The aim was to provide support via an online helpdesk.</p>
<p>
The system was a .net web app built by a supplier.  But work was needed to customise the front-end and enhance the user experience.</p>

<p>
  HTML, CSS and Javascript was utilised to optimise the system for the university and students.</p>
</div>
<div class="p-8">
<video width="100%" loop muted autoplay preload="auto">
    <source src="https://cdn.jnx.app/azo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
  </Layout>
);


export default StudentHelpdesk