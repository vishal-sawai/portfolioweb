import React from 'react'
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <>
            <Container>
                <Nav>
                    <NavLink to="#ParticleJs">Home</NavLink>
                    <NavLink to="#About">About</NavLink>
                    <NavLink to="#Projects">Projects</NavLink>
                    <NavLink to="#Technology">Technology</NavLink>
                    <NavLink to="#Contact">Contact</NavLink>
                </Nav>
            </Container>
        </>
    )
}

export default Navbar

const Container = styled.div`
position: fixed;
width: 100%;
display: flex;
justify-content: right;
background-color: #0e233574;
z-index: 50;
`

const Nav = styled.div`
padding:30px 25px;
`
const NavLink = styled(HashLink)`
color: white;
margin: 0px 15px;
text-decoration: none;
/* border: 1px solid; */
padding: 10px 20px;
border-radius: 0px;
text-transform: uppercase;
`
