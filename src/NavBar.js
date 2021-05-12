import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

function NavBar(){
   

    return(
        <Container>
            <LinkTables>
                <Link className="navLink" style={{ textDecoration: 'none'}} to="/"><strong>HOME</strong></Link>
                <Link className="navLink" style={{ textDecoration: 'none'}} to="/portfolio"><strong>PORTFOLIO</strong></Link>
                <Link className="navLink" style={{ textDecoration: 'none'}} to="/blogs"><strong>BLOGS</strong></Link>
                <Link className="navLink" style={{ textDecoration: 'none'}} to="/contact-info"><strong>CONTACT</strong></Link>
            </LinkTables>
        </Container>
    )

}

export default NavBar;

const LinkTables = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0.35rem;
    }
  }

`
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
    

    .flex-item{
        margin 1rem;
    }
`