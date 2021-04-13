
import React, { useState } from "react"
import styled from "styled-components"
import MediumIcon from "./Medium.jpg"
import Twilio from "./Twilio.png"


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
                <Title>Fake(r) It 'Til You Make It</Title>
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
       </>
    )

    }

export default Blogs;

const Head = styled.div`
padding: 10%;
padding-bottom: 4%;
`
const PageTitle = styled.h3`
font-size: 1em;
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

const Card = styled.article`
    position: relative;
    background: grey;
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



const Title = styled.h2`
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
