import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

const CustomNavbar = ({ pageInfo }) => {
  const data = useStaticQuery(graphql`
  query navbarlogo {
    
    logo: file(relativePath: {eq:"gatsby-icon.png"}) {
      childImageSharp {
        fixed(height:50){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar">
        {/* <Container> */}
        <AniLink cover direction="bottom" bg="#888"  to="/" className="link-no-style mx-2">
        <Img fixed={data.logo.childImageSharp.fixed} />
        </AniLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-2" activeKey={pageInfo && pageInfo.pageName}>
            <AniLink fade to="/markdown" className="link-no-style">
              <Nav.Link as="span" eventKey="markdown">
                Markdown
              </Nav.Link>
            </AniLink>
          </Nav>
          <Nav className="m-2" activeKey={pageInfo && pageInfo.pageName}>
            <AniLink fade to="/bgimages" className="link-no-style">
              <Nav.Link as="span" eventKey="BgImages">
                BgImages
              </Nav.Link>
            </AniLink>
          </Nav>
          <Nav className="ml-auto">
            <Form inline onSubmit={e => e.preventDefault()}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Fake Search"
                  className="mr-2"
                />
              </Form.Group>
              <Button>Fake Button</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
