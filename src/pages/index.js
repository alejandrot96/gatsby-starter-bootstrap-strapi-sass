import React from "react"

import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center my-5">
      <Row>
        <Col>
        <span className="h2 body-font danger-text">legacy home page</span>
          <p>
            This is someone else's Gatsby Starter that I frequently use to get jump started
            on quick website builds. It includes the following packages:
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        <Col md="6">
          <ListGroup>
            <ListGroup.Item
              action
              href="https://getbootstrap.com"
              target="_blank"
            >
              Bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-bootstrap.github.io/"
              target="_blank"
            >
              react-bootstrap
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://react-icons.netlify.com"
              target="_blank"
            >
              react-icons
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-plugin-sass/"
              target="_blank"
            >
              gatsby-plugin-sass
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://github.com/strapi/gatsby-source-strapi"
              target="_blank"
            >
              gatsby-source-strapi (optional)
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://www.gatsbyjs.org/packages/gatsby-background-image/"
              target="_blank"
            >
              gatsby-background-image
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://github.com/rexxars/react-markdown"
              target="_blank"
            >
              react-markdown (to render strapi richtext)
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://transitionlink.tylerbarnes.ca/docs/anilink/"
              target="_blank"
            >
              AniLink (easy transition between pages)
            </ListGroup.Item>
            <ListGroup.Item
              action
              href="https://github.com/soumyadeephalder/react-multiple-image-grid"
              target="_blank"
            >
              react-multiple-image-grid
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This starter also includes a navbar that sticks to the top of the
            screen when the user scrolls past it, and a footer that stays at the
            bottom of the screen.
          </p>
          <p>
            For more documentation on these packages and how they work, please
            refer to the pages linked in the list above.
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
