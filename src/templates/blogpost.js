import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout"

export const query = graphql`
query Blogs($id: String!) {
    blogs: strapiBlogs(id: { eq: $id }) {
      id
      Title
      Slug
      Content
      tags {
        Name
      }
  }
}  
  `;

const Blogs = ({ data }) => {
  const blogs = data.Blogs.id;

  return (
    <Layout>
      <h1>{Title}</h1>
<p>
    {Content}
</p>
    </Layout>
  );
};

export default Blogs;