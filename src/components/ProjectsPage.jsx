import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProjectsPage = (props) => {
    return (
        <>
            <ProjectBox>
                <ProjectImg bgImg={props.firstImg} />
                <ProjectInfo>
                    <div>
                        <h2>{props.name}</h2>
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
div{
    text-align: center;
    margin-top: 15%;
}
h2{
    margin: 25px 0px;
}
`

const ProjectBox = styled.div`
width: 400px;
height: 250px;
margin: auto;
margin-top: 50px;
cursor: pointer;
position: relative; 
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
border-radius: 10px;
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