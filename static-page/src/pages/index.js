import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from 'gatsby-image'



export default function Home({data}) {
  console.log(data)
  const projects = data.allMarkdownRemark.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <section>
    <Layout>
   <div>
    <h2>Design</h2>
    <h3>Develop & Deploy</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <div>
      {projects.map(project => (
        <div>
        <h2>{project.frontmatter.title}</h2>
        {/* <p>{project.frontmatter.body}</p> */}
        </div>
       )
      )}
      <div style={{display:"flex", justifyContent:"end", }}>
             {/* <img src="/banner.png"  style={{maxWidth:'100%',width:'46vw'}}/> */}
             <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <p>contact me at {contact}</p>
    </div>
    
  </div>
  </Layout>
  </section>
  )
}
// export page query
export const query = graphql`
query Projects1 {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
       
      }
      id
    }
  }
 contact: site {
    siteMetadata {
      contact
    }
  }
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}





`