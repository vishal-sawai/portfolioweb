import React from 'react';
import Heading from './Heading';
import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <Container id='Contact'>
                <Heading name="Contact" />
                <ContactContainer>
                    <CForm>
                        <FormLabel>Name</FormLabel>
                        <FormInput type="text"></FormInput>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email"></FormInput>
                        <FormLabel>Phone</FormLabel>
                        <FormInput type="tel"></FormInput>
                        <FormLabel>Message</FormLabel>
                        <FormTextArea></FormTextArea>
                        <FormButton type="submit">Submit</FormButton>
                    </CForm>
                </ContactContainer>
            </Container>
        </>
    )
}

export default Contact

const Container = styled.div`
padding: 50px 50px 0px 50px;
@media (max-width: 1000px) {
   padding: 20px 20px 20px 20px;
}
`
const ContactContainer = styled.div`
display: flex;
margin: auto;
padding: 20px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media (max-width: 1000px) {
  padding: 10px;
}
`
const CForm = styled.form`
margin:auto;
display: flex;
flex-direction: column;
padding: 40px;
width: 50%;
@media (max-width: 1000px) {
   padding: 30px 10px;
   width: 100%;
}
`
const FormLabel = styled.label`
font-size: 20px;
margin-bottom: 3px;
margin-left:3px;
@media (max-width: 1000px) {
  font-size: 15px;
}
`
const FormInput = styled.input`
background-color: #0E2335;
color: white;
outline: none;
border: none;
margin-bottom: 15px;
width: 100%;
height: 45px;
border-radius: 3px;
padding:0px 10px;
@media (max-width: 1000px) {
   width: 95%;
}
`
const FormTextArea = styled.textarea`
background-color: #0E2335;
color: white;
outline: none;
border: none;
margin-bottom: 15px;
width: 100%;
height: 80px;
border-radius: 3px;
padding:10px;
resize: none;
@media (max-width: 1000px) {
   width: 95%;
}
`
const FormButton = styled.button`
background-color: #FF0000;
color: white;
outline: none;
border: none;
width: 103%;
height: 50px;
border-radius: 3px;
padding:5px;
cursor: pointer;
font-size: 20px;
text-transform: uppercase;
letter-spacing: 5px;
font-weight: bolder;
transition: 0.5s;
@media (max-width: 1000px) {
   font-size: 15px;
   font-weight: bold;
   letter-spacing: 3px;
   margin: 8px 0px;
}
&:hover{
    background-color: #F73206 ;
}
`

