
import React, { useState } from "react"
import styled from "styled-components"
import YoutubeEmbed from "./YoutubeEmbed"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "./Link2.png";

function Portfolio(){
    const [desc, setDesc] = useState(false)
    const [desc1, setDesc1] = useState(false)
    const [desc2, setDesc2] = useState(false)

    function handleDescription(){
        setDesc((desc) => !desc)
    }
    function handleDescription1(){
        setDesc1((desc1) => !desc1)
    }
    function handleDescription2(){
        setDesc2((desc2) => !desc2)
    }

    return(
        <>
        <Head>
            <PageTitle>
                Project Portfolio
            </PageTitle>

        </Head>
        <Container>
            <Card className="flex-item">
                <Title>InstAlert</Title>
                <Languages>React-Javascript-Ruby-Rails-Active Record-Bootsrap-Custom CSS</Languages>
            <YoutubeEmbed embedId="ai6FtS7nOKY" />
                <Description>
                    <DropdownButton onClick={handleDescription}>
                        What's this All About?
                    </DropdownButton>
                </Description>
                {desc ? <ShowDesc>A silent alarm app masquerading as your average social media. InstAlert allows people in uncomfortable situations to discreetly signal for help.</ShowDesc> : null}
            </Card>
            <Card className="flex-item">
                <Title>TipSee</Title>
                <Languages>React-Javascript-Ruby-Rails-Active Record-Bootsrap-Custom CSS</Languages>
            <YoutubeEmbed embedId="oMY4E4R7EXA" />
                <Description>
                    <DropdownButton onClick={handleDescription1}>
                        What's this All About?
                    </DropdownButton>
                </Description>
                {desc1 ? <ShowDesc>He who travels most, tips least - this is the idea behind TipSee. This app creates an event at a restaurant and determines each guest’s responsibility for part of a 20% tip based on the distance they travelled to that event.
</ShowDesc> : null}
            </Card>
            <Card className="flex-item">
                <Title>NextFlix</Title>
                <Languages>Javascript-Ruby-Rails-Active Record-Bootsrap-Custom CSS</Languages>

                <YoutubeEmbed embedId="Iegf08Mqg9Y" />
                <Description>
                    <DropdownButton onClick={handleDescription2}>
                        What's this All About?
                    </DropdownButton>
                </Description>
                {desc2 ? <ShowDesc>If you are looking for a new TV show or movie to enjoy, avoid hours of scrolling by using NextFlix - just input the last show or film you enjoyed, and NextFlix will tell you what else you might like! 
</ShowDesc> : null}
            </Card>

        </Container>
        <Container2>
        <Card>
            <ContactScript>
                Feel free to get in touch!
            </ContactScript>
            <Email href="mailto: alexhmarz@gmail.com">AlexHMarz@gmail.com</Email>
            <Contacts>
                    <MyContacts background="black" href="https://github.com/mahzmahzmahz" target="_blank">
                        <GitHubIcon style={{color: "black", fontSize: "3rem"}}/>
                    </MyContacts>
                    <MyContacts background="white" href="https://www.linkedin.com/in/alex-marz/" target="_blank">
                        <img src={LinkedInIcon} className= "rounded-circle" style={{background: "#007bff", fontSize: "3rem"}}/>
                    </MyContacts>
            </Contacts>
        </Card>
        </Container2>
       </>
    )

    }

export default Portfolio;

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 0%;
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

const Description = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

const DropdownButton = styled.button`
    width: 100%;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: all 0.2s;
    font-size: 1rem;
    
        
    :hover {
        transform: scale(1.2);
    }
`

const ShowDesc = styled.h4`
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h2`
    font-family: MS Courier New, monospace;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Languages = styled.h5`
    font-size: .9rem;
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
  }`

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

const Head = styled.div`
padding: 5%;
padding-bottom: 0%;
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

