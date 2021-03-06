import React from "react"
import styled from "styled-components"
import { keyframes } from 'styled-components'
import pic from "./Headshot.jpeg"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "./Link2.png";
import MediumIcon from "./Medium.jpg"
import IMDBIcon from "./IMDB2.png"


function About(){
    

    

    return(
        <Container>
            
            <Photo className="flex-item">
                <img src={pic} alt="Alex Marz"/>
                
            </Photo>
            <TextContainer>
                <Hey className="flex-item">
                    Hey! I'm Alex
                </Hey>
                <Bio className="flex-item">
                A recent graduate of The Flatiron School's intensive Software Engineering program. I have extensive experience working with Ruby, Rails, Active Record, SQL, JavaScript, React, and Redux as well as Semantic UI, Bootstrap and custom CSS. Additionally, I have worked with API integration over numerous builds of original web applications.
                </Bio>
                
                <Bio className="flex-item">
                I have worked as an Actor, Talent Manager, Assistant and Server/Bartender in the performing arts and hospitality industries in NYC. I hold a BA in American Studies from Connecticut College and a Master of Fine Arts (MFA) focused in Acting from Columbia University in the City of New York. 
                </Bio>
                
            </TextContainer>
          
            <Contacts className="flex-item">
                <MyContacts background="black" href="https://github.com/mahzmahzmahz" target="_blank">
                    <GitHubIcon style={{color: "black", fontSize: "3rem"}}/>
                </MyContacts>
                <MyContactsTwo background="white" href="https://www.linkedin.com/in/alex-marz/" target="_blank">
                    <img src={LinkedInIcon} alt="LinkedIn Icon" className= "rounded-circle" style={{background: "#007bff", fontSize: "3rem"}}/>
                </MyContactsTwo>
                <MyContacts background="black" href="https://alexhmarz.medium.com/" target="_blank">
                    <img className= "rounded-circle" alt="Medium Icon" src={MediumIcon} style={{fontSize: "7rem"}}/>
                </MyContacts>
                <MyContactsTwo background="black" href="https://www.imdb.com/name/nm9542537/?ref_=fn_al_nm_1" target="_blank">
                    <img className= "rounded-circle" src={IMDBIcon} alt="IMDB Icon" style={{fontSize: "3rem"}}/>
                </MyContactsTwo>

            </Contacts>
        <TextContainer>
          <Bio>
            This project was built with React and Styled Components
          </Bio>
          <RepoLink href="https://github.com/mahzmahzmahz/Project_Portfolio" target="_blank">
            Check it Out!
          </RepoLink>
        </TextContainer>
            
        </Container>
        
    )
}

export default About;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const rotateTwo = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   
    min-height: 50vh;

    .flex-item{
        margin 1rem;
    }
`
const Photo = styled.div`
    width: 90vw;
    height: 90vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: solid;
    shadow-offset: 10px, 5px;
    background-image: linear-gradient(green 10px, blue 30%, #1e90ff 50%);
    overflow: hidden;

    img{ 
        width: 100%
    }
    :hover{
        // animation: ${rotate} 90s linear infinite;
        //transform: scale(1.2)
    }
`



const Bio = styled.p`
    text-align: center;
    font-family: font-family: MS Courier New, monospace;
    font-size: 60%;

`

const TextContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  padding-top: 0;
  h1 {
    margin: 0;
  }
`

const Hey = styled.h3`
    text-align: center;
    font-family: font-family: MS Courier New, monospace;
`

const Contacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    margin: 0.35rem;
    }
  }

`

const MyContacts = styled.a`
  display: flex;
  position: relative;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  

  img {
      width 80%;
  }

  :hover{
      tansform: scale(1.2);
       animation: ${rotate} 10s linear infinite;
  }

`
const MyContactsTwo = styled.a`
  display: flex;
  position: relative;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  

  img {
      width 80%;
  }

  :hover{
      tansform: scale(1.2);
       animation: ${rotateTwo} 10s linear infinite;
  }

`

const RepoLink = styled.a`
  font-size: 1rem;
  display: flex;
  color: white;

  align-items: center;
  justify-content: center;
`

