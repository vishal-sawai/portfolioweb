import React from 'react'
// import Particles from "react-particles-js"
import ParticleConfig from './Config/ParticleConfig';
import { tsParticles } from "tsparticles-engine";


export default function ParticleBg() {

    return (
        <div id='Home'>
            <tsParticles params={ParticleConfig}></tsParticles>
        </div>
    );
}