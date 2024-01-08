import React, { useState } from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import ProjectsPage from './ProjectsPage'
import ProjectApi from '../Api/ProjectApi'


const Project = () => {

    const [Project] = useState(ProjectApi);

    return (

        <Container>
            <Heading name="Projects" />
            <ProjectContainer>

                {Project.map((ProApi) => {
                    return (
                        <ProjectsPage
                            name={ProApi.ProjectName}
                            firstImg={ProApi.firstImg}
                        />
                    )
                })}
            </ProjectContainer>
        </Container>

    )
}

export default Project

const Container = styled.div`
padding: 100px 50px;
align-items: center;
justify-content: center;

`
const ProjectContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
padding: 0px 30px 50px 30px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
