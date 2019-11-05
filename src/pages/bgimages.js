import React from "react"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import { Row, Col, Container, ListGroup } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from 'gatsby-background-image'
import "./BgImages.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MultipleGridImages from 'react-multiple-image-grid'

const BgPage = ({data}) => {
  const backgroundFluidImageStack = [
    data.bg.childImageSharp.fluid,
    `linear-gradient(0deg, rgba(0, 0, 0, 0.616), rgba(0, 0, 0, 0.2))`
  ].reverse();
  var images = [
    'https://res.cloudinary.com/aiiistrapi/image/upload/v1571929336/asd6ws7ekgvig7247ynb.jpg',
    'https://res.cloudinary.com/aiiistrapi/image/upload/v1568777292/taxkb2nlomja7sbvo7i1.jpg',
    'https://res.cloudinary.com/aiiistrapi/image/upload/v1568615321/nwyoeaigxpmulp7tni1v.jpg',
    'https://res.cloudinary.com/aiiistrapi/image/upload/v1568615128/lnhurnes8su2wzfsto1u.jpg',
    'https://res.cloudinary.com/aiiistrapi/image/upload/v1568612229/ebwtatmstclng833gu6v.jpg'
    ];
  var images2 = [
    'https://110696-strapi.s3-us-west-2.amazonaws.com/009a4ee3ce6541f0ac83a6d8a16e9e44.jpg',
    'https://110696-strapi.s3-us-west-2.amazonaws.com/076a506b48ec4f71b73c1c9d5c4bb320.png',
   
    ];
  return (
  <Layout pageInfo={{ pageName: "bgimage" }}>
    <SEO title="Bg Images" />
    <Container fluid >
    <BackgroundImage Tag="div" className="row px-0 fakebanner" fluid={backgroundFluidImageStack} backgroundColor={`#ff4040`}>
    
    <Col className="p-5 text-center">
    <h1 className="white-txt">Hello background-image</h1>
    <AniLink paintDrip hex="#888" to="/">Go back to the homepage</AniLink>
    </Col>
    </BackgroundImage>
    </Container>
    <Container>
      <Row>
        <Col>
        <MultipleGridImages images={images}/>
        <MultipleGridImages images={images2}/>
        </Col>
      </Row>
    </Container>
  </Layout>
  );
}

export default BgPage

export const query = graphql`
query {
  bg: file(relativePath: {eq:"bg.jpg"}) {
    childImageSharp{
      fluid(quality:90,maxWidth:2560){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

