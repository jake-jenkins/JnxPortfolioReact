import * as React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Blog = () => (
  <Layout>
    <Helmet>
    <title>Web Design Blog - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Web Design and Development Blog.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,blog,development,developer,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
<h1>Blog</h1>
<br/>
<div class="bg-green-200 rounded-lg p-6 text-center">
  <span class="text-8xl text-green-900 text-center">
  <i class="lni lni-brush"></i>
  </span>
  <h2>Sorry about this...</h2>
  <p>Coming Soon.</p>
  <p>The blog will be launched very soon.  The first priority for the new site is to deliver the portfolio items.
    </p>
    <br />
    <p>
  Thanks for your patience.</p>
</div>
  </Layout>
);


export default Blog
