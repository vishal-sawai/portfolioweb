import React from 'react'
import Particles from "react-particles-js"
import ParticleConfig from './Config/ParticleConfig';

export default function ParticleBg() {

    return (
        <div id='ParticleJs'>
            <Particles params={ParticleConfig}></Particles>
        </div>
    );
}