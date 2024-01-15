import React from 'react'
import ParticleConfig from './Config/ParticleConfig';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


export default function ParticleBg() {

    const particlesInit = (engine) => {
        loadFull(engine);
    };

    return (
        <div id='Home'>
            <Particles init={particlesInit} params={ParticleConfig}></Particles>
        </div>
    );
}