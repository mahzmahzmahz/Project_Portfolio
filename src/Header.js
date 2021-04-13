import React from "react"
import styled from "styled-components"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function Header(){
   
    return(



        
   <Head>
    <Title>
      Alex Marz
    </Title>
    <SubTitle>
        Full Stack Software Engineer
    </SubTitle>
    </Head>
        
    )
}

export default Header;

const Head = styled.div`
padding-top: 3%;
padding-bottom: 4%;
`

const Title = styled.h1`
font-size: 3.5em;
text-align: center;
color: #3cdae8;

font-family: MS Courier New, monospace;
text-shadow: 1px 1px 1px black,
             3px 3px 1px black;
`;

const SubTitle = styled.h3`
font-size: 1em;
text-align: center;
color: #3cdae8;
font-family: MS Courier New, monospace;
text-shadow: 1px 1px 1px black,
             3px 3px 1px black;
`

