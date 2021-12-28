import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"



export default function Home({data}) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  return (
    <section>
    <Layout>
   <div>
    <h2>Design</h2>
    <h3>Develop & Deploy</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <div>
      {projects.map(project => (
        <h2>{project.frontmatter.title}</h2>)
      )}
    </div>
    
  </div>
  </Layout>
  </section>
  )
}
// export page query
export const query = graphql`
query Projects1{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
      id
    }
  }
}




`