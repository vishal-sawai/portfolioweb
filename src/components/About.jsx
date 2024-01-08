import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'

const About = () => {
    return (
        <>
            <Container>
                <Heading name="About" />
                <AboutContainer>
                    <AbImg>
                        <img src="/assets/profile.jpg" alt='profile' />
                    </AbImg>
                    <AbInfo>
                        <p>
                            <span style={{ color: 'yellow', fontWeight: "bolder" }}>Hey, I'm Vishal Sawai,</span> a tech enthusiast who loves building things on the internet.
                            I'm good at making websites look cool using React, HTML, CSS, Bootstrap, and Tailwind CSS.
                            For the behind-the-scenes stuff, I use PHP, Python, and SQL. I also play around with Java and JavaScript.
                            When it comes to mobile apps,
                            I dabble in React Native. I'm always learning new things, and I like to practice by working on projects.
                        </p>
                    </AbInfo>
                </AboutContainer>
            </Container>
        </>
    )
}

export default About

const Container = styled.div`
padding: 20px;
`
const AboutContainer = styled.div`
display: flex;
width: 80%;
margin: auto;
align-items: center;
margin-top:30px;
margin: auto;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
padding: 70px 50px;
border-radius: 10px;


`
const AbImg = styled.div`
padding: 10px 20px;
img{
    border-radius: 50%;
    height: 350px;
    /* border: 5px solid white; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}
`
const AbInfo = styled.div`
padding: 10px 20px;
    margin: auto;
p{
    font-size: 20px;
    word-spacing: 3px;
    text-transform: capitalize;
}
`

