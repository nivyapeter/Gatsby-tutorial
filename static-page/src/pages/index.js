import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"



export default function Home({data}) {
  console.log(data)
  const {title,description}= data.site.siteMetadata
  return (
    <section>
    <Layout>
   <div>
    <h2>Design</h2>
    <h3>Develop & Deploy</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>{title} - {description}</p>
  </div>
  </Layout>
  </section>
  )
}

export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      copyright
      description
      title
    }
  }
}


`