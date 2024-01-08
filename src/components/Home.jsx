import React from 'react'
import styled from 'styled-components'
import About from './About'
import Project from './Project'
import { Link } from 'react-router-dom'
import Technology from './Technology'
import Contact from './Contact'
import Footer from './Footer'
import ParticleBg from './ParticleBg'

const Home = () => {
    return (
        <Container>
            {/* Home Section */}
            <ParticleBg />
            <HomeContainer>
                <HeadingContainer>
                    <Heading>
                        <h1>Hello, I'm <span style={{ color: '#DFFF00' }}>Vishal Sawai</span></h1>
                        <p style={{ paddingTop: "10px " }}>I'm a <span style={{ backgroundColor: 'red', padding: '0px 10px', borderRadius: '2px' }}>full stack web developer</span></p>
                    </Heading>
                    <SocialMediaIcons>
                        <Link to={"https://www.linkedin.com/in/vishal-sawai-5462b9186/"} target="_blank">
                            <img src="/assets/linkedin.svg" alt="linkedin" />
                        </Link>
                        <Link to={"https://twitter.com/vishaldnynasha1"} target="_blank">
                            <img style={{ backgroundColor: 'black' }} src="/assets/x.png" alt="x" />
                        </Link>
                        <Link to={"https://github.com/Vishal-Sawai"} target="_blank">
                            <img src="/assets/github.svg" alt="github" />
                        </Link>
                    </SocialMediaIcons>
                </HeadingContainer>
            </HomeContainer>

            {/* About Section */}
            <About />

            {/* Project Section */}
            <Project />

            {/* Technology */}
            <Technology />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />

        </Container>

    )
}

export default Home

const Container = styled.div`
      /* height:100vh; */
 `
const HomeContainer = styled.div`
 height:100vh;
 z-index: 50;
 
 `
const HeadingContainer = styled.div`
display: flex;
flex-direction: column;
 `
const Heading = styled.div`
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: normal;
    width: fit-content;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    color: #fafafa;
    font-weight: 600;
    margin-top: 18%;
    font-size: 30px;
    text-transform: capitalize;
`
const SocialMediaIcons = styled.div`
display: flex;
align-self: center;
margin-top: 40px;
img{
    width: 40px;
    height: 40px;
    margin: 5px 15px;
    cursor: pointer;
    background-color: white;
    border-radius: 10%;
    padding: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transition: 0.5s;
}
    :hover{
       opacity: 60%;
    }
`
