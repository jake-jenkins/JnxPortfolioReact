import * as React from "react"
import Layout from "../components/layout"

const Blog = () => (
  <Layout>
<h1>Blog</h1>
<br/>
<div class="bg-green-200 rounded-lg p-6 flex">
  <div class="flex-initial text-8xl text-green-900">
  <i class="lni lni-brush align-text-bottom"></i>
  </div>
  <div class="flex-1 p-4">
  <h2>Sorry about this...</h2>
  <p>Coming Soon.</p>
  <p>The blog will be launched very soon.  The first priority for the new site is to deliver the portfolio items.
    </p>
    <br />
    <p>
  Thanks for your patience.</p>
  </div>
</div>
  </Layout>
);


export default Blog
