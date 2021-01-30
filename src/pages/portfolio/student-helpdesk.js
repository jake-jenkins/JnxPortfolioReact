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
<p>Text</p>
</div>
  </Layout>
);


export default StudentHelpdesk