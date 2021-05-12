
import React from "react"
import styled from "styled-components"
import MediumIcon from "./Medium.jpg"
import Twilio from "./Twilio.png"
import LinkedInIcon from "./Link2.png";


function Blogs(){
   

    return(
        <>
        <Head>
            <PageTitle>
                Blog Posts
            </PageTitle>
           
        </Head>
        <Container>
            <Card className="flex-item">
                <ReadIt href="https://alexhmarz.medium.com/nft-wtf-cf279bf2311f" target="_blank">
                    <img style={{paddingLeft: "4px"}} src={MediumIcon} alt="Link to full article"/>
                </ReadIt>
                <Title>NFT, WTF?</Title>
                    <ImgContainer>
                        <ThisImage src="https://miro.medium.com/max/1400/0*rAvHWgOZcWTeC1D3" alt="BEEPLE NFT">
                             
                        </ThisImage>
                    </ImgContainer>
            </Card>
            <Card className="flex-item">
                <ReadIt href="https://alexhmarz.medium.com/texting-with-twilio-sms-c011d10ff6f7" target="_blank">
                    <img style={{paddingLeft: "4px"}} src={MediumIcon} alt="Link to full article"/>
                </ReadIt>
                <Title>Texting With Twilio</Title>
                <ImgContainer>
                        <ThisImage src={Twilio} alt="Faker Code">
                             
                        </ThisImage>
                    </ImgContainer>
                
            </Card>
            <Card className="flex-item">
                <ReadIt href="https://alexhmarz.medium.com/fake-r-it-til-you-make-it-14da1402a6ae" target="_blank">
                    <img style={{paddingLeft: "4px"}} src={MediumIcon} alt="Link to full article"/>
                </ReadIt>
                <Title style={{fontSize: "1.8rem"}}>Fake(r) It 'Til You Make It</Title>
                    <ImgContainer>
                        <ThisImage src="https://miro.medium.com/max/1400/1*JAd3FQci_AyQhPxEVFHk9A.png" alt="Faker Code">
                             
                        </ThisImage>
                    </ImgContainer>
                
            </Card>
            <Card className="flex-item">
                <ReadIt href="https://medium.com/nerd-for-tech/that-time-a-guy-broke-the-internet-23c00903ad6f" target="_blank">
                    <img style={{paddingLeft: "4px"}} src={MediumIcon} alt="Link to full article"/>
                </ReadIt>
                <Title>A Guy Broke The Internet</Title>
                <SubTitle>*Published By Nerd For Tech*</SubTitle>
                    <ImgContainer>
                        <ThisImage src="https://miro.medium.com/max/820/0*6m9MC7iUAbFWv8zr" alt="Faker Code">
                             
                        </ThisImage>
                    </ImgContainer> 
            </Card>

            <Card className="flex-item">
                <ReadIt href="https://alexhmarz.medium.com/an-actor-codes-b4b767c9696a" target="_blank">
                    <img style={{paddingLeft: "4px"}} src={MediumIcon} alt="Link to full article"/>
                </ReadIt>
                <Title>An Actor Codes</Title>
                    <ImgContainer>
                        <ThisImage src="https://miro.medium.com/max/1400/1*4KtgW6ETijLKGf4juJmYBQ.png" alt="Faker Code">
                             
                        </ThisImage>
                    </ImgContainer>
            </Card>

        </Container>
        <Container2>
        <ContactCard>
            <ContactScript>
                Feel free to get in touch!
            </ContactScript>
            <Email href="mailto: alexhmarz@gmail.com">AlexHMarz@gmail.com</Email>
            <Contacts>
                    <MyContacts background="black" href="https://alexhmarz.medium.com/" target="_blank">
                        <img className= "rounded-circle" src={MediumIcon} alt="Medium Icon" style={{fontSize: "7rem"}}/>
                    </MyContacts>
                    <MyContacts background="white" href="https://www.linkedin.com/in/alex-marz/" target="_blank">
                        <img src={LinkedInIcon} className= "rounded-circle" alt="LinkedIn Icon" style={{background: "#007bff", fontSize: "3rem"}}/>
                    </MyContacts>
            </Contacts>
        </ContactCard>
        </Container2>
       </>
    )

    }

export default Blogs;

const Head = styled.div`
padding-top: 4%;
padding-bottom: 2%;
justify-content: center;
`
const PageTitle = styled.h3`
font-size: 1.5em;
text-align: center;
color: #3cdae8;
font-family: MS Courier New, monospace;
text-shadow: 1px 1px 1px black,
             3px 3px 1px black;
`
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 70vh;

    .flex-item{
        margin 1rem;
    }
`

const Container2 = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5%;
    .flex-item{
        margin 1rem;
    }
`


const Card = styled.article`
    position: relative;
    //background: #F1C97A;
    background-image: radial-gradient(
        circle at top left,
        #083526, 
        #2ca07b 50%
        );
    width: 100%;
    max-width: 500px;
    padding: 0.5rem;
    overflow: hidden;
    height: 250px;
    border: black solid 5px;
    box-shadow: 5px 5px 12px 2px black;
    :hover{
        box-shadow: 5px 5px 12px 2px #3cdae8;
        transition: opacity 0.1s ease-in-out
    }
    img {
        max-height: 200px;
    }
`

const ContactCard = styled.article`
    position: relative;
    background-image: radial-gradient(
        circle at top left,
        #083526, 
        #2ca07b 50%
        );
    width: 100%;
    max-width: 500px;
    padding: 0.5rem;
    overflow: hidden;
    border: black solid 4px;
    box-shadow: 5px 5px 12px 2px black;

    :hover{
        box-shadow: 5px 5px 12px 2px #3cdae8;
        transition: opacity 0.1s ease-in-out
    }

    `

const Title = styled.h2`
    font-family: MS Courier New, monospace;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const ThisImage = styled.img`
  width: 100%;
`

const ReadIt = styled.a`
    display: flex;
    position: absolute;
    text-decoration: none;
    top: 0;
    right: 0;
    
    width: 40px;
    height: 35px;
    border-radius: 0 0 0 40px;
    
    background: black;
    padding-left: 4px;
    transition: all .4s;
    cursor: pointer;
    overflow: hidden;

    :hover{
        transform: scale(1.2)
    }
`

const SubTitle = styled.p`
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Email = styled.a`
    font-size: 1.5rem;
    display: flex;
    color: black;

    align-items: center;
    justify-content: center;
`

const ContactScript = styled.h5`
    font-size: .9rem;
    display: flex;

    align-items: center;
    justify-content: center;

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


