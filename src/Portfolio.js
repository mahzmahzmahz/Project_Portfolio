
import React, { useState } from "react"
import styled from "styled-components"
import YoutubeEmbed from "./YoutubeEmbed"

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
        
        <Container>
            <Card className="flex-item">
                <Title>InstAlert</Title>
                <Languages>React Javascript Ruby Rails Active Record Bootsrap Custom CSS</Languages>
            <YoutubeEmbed embedId="rokGy0huYEA" />
                <Description>
                    <DropdownButton onClick={handleDescription}>
                        What's this All About?
                    </DropdownButton>
                </Description>
                {desc ? <ShowDesc>A silent alarm app masquerading as your average social media. InstAlert allows people in uncomfortable situations to discreetly signal for help.</ShowDesc> : null}
            </Card>
            <Card className="flex-item">
                <Title>TipSee</Title>
                <Languages>React Javascript Ruby Rails Active Record Bootsrap Custom CSS</Languages>
            <YoutubeEmbed embedId="rokGy0huYEA" />
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
                <Languages>Javascript Ruby Rails Active Record Bootsrap Custom CSS</Languages>

                <YoutubeEmbed embedId="rokGy0huYEA" />
                <Description>
                    <DropdownButton onClick={handleDescription2}>
                        What's this All About?
                    </DropdownButton>
                </Description>
                {desc2 ? <ShowDesc>If you are looking for a new TV show or movie to enjoy, avoid hours of scrolling by using NextFlix - just input the last show or film you enjoyed, and NextFlix will tell you what else you might like! 
</ShowDesc> : null}
            </Card>
        </Container>
       
    )

    }

export default Portfolio;

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
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