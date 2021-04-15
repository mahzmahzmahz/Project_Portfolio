
import React from "react"
import styled from "styled-components"
import pixel from "./Piskel.png"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "./Link2.png";
import MediumIcon from "./Medium.jpg"
import IMDBIcon from "./IMDB2.png"
import alex from "./signature.png"


function Contacts(){

    return(
        <>
        <Container>
            
        <PixelContainer>
            <img className="character_spritesheet" src={pixel} alt="Pixel Alex"/>
        </PixelContainer>

            <TextContainer>
                <ThankYou>Thanks for stopping by!</ThankYou>
                <Text style={{paddingTop:"3px"}}>Please feel free to reach out via email. My inbox is always open!</Text>
                <Email href="mailto:alexhmarz@gmail.com">AlexHMarz@gmail.com</Email>
                <Text>I look forward to hearing from you!</Text>
                <Text>Best,</Text>
                <img style={{paddingTop: "1px"}}src={alex} alt="Signature"/>

                    
            </TextContainer>
            

        </Container>

        <ContactDiv>

            <MyContacts background="black" href="https://github.com/mahzmahzmahz" target="_blank">
                <GitHubIcon style={{color: "black", fontSize: "3rem"}}/>
            </MyContacts>
            <MyContacts background="white" href="https://www.linkedin.com/in/alex-marz/" target="_blank">
                <img src={LinkedInIcon} className= "rounded-circle" style={{background: "#007bff", fontSize: "3rem"}}/>
            </MyContacts>
            <MyContacts background="black" href="https://alexhmarz.medium.com/" target="_blank">
                    <img className= "rounded-circle" src={MediumIcon} style={{fontSize: "7rem"}}/>
            </MyContacts>
            <MyContacts background="black" href="https://www.imdb.com/name/nm9542537/?ref_=fn_al_nm_1" target="_blank">
                    <img className= "rounded-circle" src={IMDBIcon} style={{fontSize: "3rem"}}/>
            </MyContacts>

        </ContactDiv>
        </>
    )

}

export default Contacts;

const Container = styled.section`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;

`

const PixelContainer = styled.div`
    align-items: center;
    position: sticky;
    justify-content: center;
    padding-top: 0px;
    height: 576px;
    width: 576px;
    overflow: hidden

`

const ThankYou = styled.h3`
    padding-top: 40%;
    text-align: center;
    font-family: MS Courier New, monospace;
    color: #3cdae8;
    text-shadow: 1px 1px 1px black,
             3px 3px 1px black;
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

const MyContacts = styled.a`
    display: flex;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  

        img {
            width 80%;
        }
`

const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5%;
  a {
    margin: 0.35rem;
    }
  }

`

const Email = styled.a`
    font-size: 1.5rem;
    display: flex;
    color: black;
    font-family: MS Courier New, monospace;

    align-items: center;
    justify-content: center;
`

const Text = styled.h4`
    font-size: 1.3rem;
    text-align: center;
    font-family: MS Courier New, monospace;

`