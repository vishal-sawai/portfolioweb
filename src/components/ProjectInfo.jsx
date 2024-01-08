import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { useParams } from 'react-router-dom';
import ProjectApi from '../Api/ProjectApi';

const ProjectInfo = () => {

    const { PName } = useParams();
    const project = ProjectApi.find(p => p.ProjectName === PName);

    return (
        <>
            <Container>
                <ImageSlider slides={project.slides} />
                <PInfo>
                    <PTitle>
                        <h1>{PName}</h1>
                    </PTitle>
                    <PDescription>
                        <p>
                            {project.ProjectDescription}
                        </p>
                    </PDescription>
                    <ProjectLink>
                        {project.githubUrl ? <ProjectGitHubLink to={project.githubUrl} target='blank'>View Source Code <FaGithub style={{ margin: "0px 0px -5px 6px", fontSize: "25px" }} />
                        </ProjectGitHubLink> : <OfflineLink> Source Code Is Private<RiGitRepositoryPrivateFill style={{ margin: "0px 0px -5px 6px", fontSize: "25px" }} /></OfflineLink>}

                        {project.liveUrl ? <ProjectLiveLink to={project.liveUrl} target='blank'>Live Preview<VscPreview style={{ margin: "0px 0px -8px 10px", fontSize: "25px" }} />
                        </ProjectLiveLink> : <OfflineLink>Live Preview Not Available</OfflineLink>}
                    </ProjectLink>
                </PInfo>
            </Container>
        </>
    )
}

export default ProjectInfo

const Container = styled.div`
   display: flex;
   margin: 50px;
   padding: 80px 70px;
   margin-top: 6%;
   background-color: #F4F6F7;
   border-radius: 10px;
   align-items: center;
`
const PInfo = styled.div`
padding: 30px 20px;
margin-left: 10px;
border-radius: 10px;
background-color: white;
color: black;
width: 40%;
`
const PTitle = styled.div`
h1{
   color: red;
   margin-bottom: 10px;
}

`
const PDescription = styled.div`
p{
    padding: 0px 15px;
}
`
const ProjectLink = styled.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 30px;
width: 300px;
text-align: center;
`

const ProjectGitHubLink = styled(Link)`
background-color: #F1C40F;
text-decoration: none;
padding: 15px 0px;
margin-top: 10px;
border-radius: 5px;
color: white;
font-weight: bold;
transition: 0.5s;
&:hover{
color: black;
}
`

const ProjectLiveLink = styled(Link)`
background-color: #D35400;
text-decoration: none;
padding: 15px 0px;
margin-top: 15px;
border-radius: 5px;
color: white;
font-weight: bold;
transition: 0.5s;
&:hover{
color: black;
}
`
const OfflineLink = styled.div`
background-color: skyblue;
text-decoration: none;
padding: 15px 0px;
margin-top: 15px;
border-radius: 5px;
color: white;
font-weight: bold;
`


