import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";

const ProjectsPage = (props) => {
    return (
        <>
            <ProjectBox>
                <ProjectImg bgImg={props.firstImg} />
                <ProjectInfo>
                    <div>
                        <h2>{props.name}</h2>
                        {props.Type === "Mobile App" ? (
                            <TypeDomain>
                                <CiMobile3 style={{ fontSize: "35px", color: "#F4D03F" }} />
                                <h3>{props.Type}</h3>
                            </TypeDomain>
                        ) : (
                            <TypeDomain>
                                <TbWorldWww style={{ fontSize: "35px", color: "#F4D03F" }} />
                                <h3>{props.Type}</h3>
                            </TypeDomain>
                        )}
                        <ProjectInfoLink to={{ pathname: `/projectinfopage/${props.name}` }}>Learn More</ProjectInfoLink>
                    </div>
                </ProjectInfo>
            </ProjectBox>
        </>
    )
}

export default ProjectsPage

const ProjectInfo = styled.div`
width: 100%;
border-radius: 10px;
position: absolute;
left: 0;
right: 0;
bottom: 0;
overflow: hidden;
height: 0;
background-color: #FDFEFE;
color: #2C3E50;
transition: .5s ease;
margin: auto;
div:nth-child(1){
    text-align: center;
    margin-top: 15%;
    padding: 0px 5px;
}
h2{
    margin: 10px 0px;
}
`
const TypeDomain = styled.div`
display: flex;
margin: auto;
justify-content: center;
padding-bottom: 25px;
padding-top: 10px;
h3{
    color: skyblue;
    font-size: 20px;
    margin-top: 8px;
    margin-left: 5px;
}
`

const ProjectBox = styled.div`
width: 400px;
height: 250px;
margin: auto;
margin-top: 50px;
cursor: pointer;
position: relative; 
background: linear-gradient(to right, red, white);
padding: 3px;
border-radius: 10px;
&:hover ${ProjectInfo}{
        height: 100%;
    }
`
const ProjectImg = styled.div`
width: 100%;
height: 100%;
background-image: ${props => `url("/assets/project media/${props.bgImg}")`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 5px;
`
const ProjectInfoLink = styled(Link)`
  text-decoration: none;
  background-color: rgb(255, 39, 39);
  padding: 8px 25px;
  color: white;
  border-radius: 5px;
  transition: .5s ease;
  font-weight: 300;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  `