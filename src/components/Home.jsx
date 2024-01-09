import React from 'react'
import styled from 'styled-components'
import About from './About'
import Project from './Project'
import { Link } from 'react-router-dom'
import Technology from './Technology'
import Contact from './Contact'
import Footer from './Footer'
import ParticleBg from './ParticleBg'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Home = () => {
    const [text] = useTypewriter({
        words: ['Full stack Web Developer', 'React Native Developer', 'Tech Enthusiast'],
        loop: {},
    })
    return (
        <Container>
            {/* Home Section */}
            <ParticleBg />
            <HomeContainer>
                <HeadingContainer>
                    <Heading>
                        <h1>Hello, I'm <span>Vishal Sawai</span></h1>
                        <p>I'm a <span>{text}</span><span><Cursor /></span></p>
                    </Heading>

                    <SocialMediaIcons>
                        <Link to={"https://www.linkedin.com/in/vishal-sawai-5462b9186/"} target="_blank">
                            <img src="/assets/linkedin.svg" alt="linkedin" />
                        </Link>
                        <Link to={"https://twitter.com/vishaldnynasha1"} target="_blank">
                            <img src="/assets/x.png" alt="x" />
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

        </Container >

    )
}

export default Home

const Container = styled.div`
      /* height:100vh; */
 `
const HomeContainer = styled.div`
 /* height:100vh; */
 width: 100%;
 position: absolute;
 top: 35%;
 display: flex;
 `
const HeadingContainer = styled.div`
margin: auto;
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
    text-transform: capitalize;
    h1{
        font-weight: 100;
        font-size:50px;
        span{
            font-weight: bold;
        }
    }
    p{
        margin-top: 15px;
        font-size: 25px;
        span:nth-child(1){
            color: yellow;
            font-weight: bold;
            padding-left: 5px;
            text-transform: uppercase;
        }
    }
`
const SocialMediaIcons = styled.div`
display: flex;
align-self: center;
margin-top: 15px;
img{
    width: 30px;
    height: 30px;
    margin: 5px 15px;
    cursor: pointer;
    background-color: #0E2335;
    border-radius: 5px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transition: 0.5s;
}
    :hover{
       opacity: 60%;
    }
`
