import React, { useState, useEffect } from 'react';
import Tab from './tab';
import Stack from './stack';

const TabLayout = ({ }) => {
    const [active, setActive] = useState(0)
    return (
        <div className='tab-layout' data-scroll>
            <div className='tab-container'>
                {tabs.map((t, idx) => <Tab title={t.title} onClick={() => { setActive(idx); document.getElementsByClassName('tab-content')[0].classList.add('animate__animated', 'animate__fadeIn'); setTimeout(() => document.getElementsByClassName('tab-content')[0].classList.remove('animate__animated', 'animate__fadeIn'), 300) }} active={idx === active} />)}
            </div>
            <div className='tab-content'>
                <h2>{tabs[active].role}</h2>
                <h4>{tabs[active].title}</h4>
                <h3>{tabs[active].subtitle}</h3>
                <p className='tab-description'>{tabs[active].description}</p>
                <div className='stack-container'>
                    {tabs[active].stack.map(s => <Stack name={s} />)}
                </div>
            </div>
        </div>
    );
}

export default TabLayout;

const tabs = [
    {
        title: '2020 - present',
        subtitle: "The Missing Particle - Budapest, HU",
        role: 'Backend developer',
        description: "Fieldcode is a freshly started company out of the Hemmersbach department I was previously working in. In Fieldcode we're building field service applications. My responsibilities are implementing new microservices in the backend using various technologies but also maintaining the legacy monolit application server."
        , stack: ['Java', 'Spring Boot', 'Apache Camel', 'Apache Kafka', 'MongoDB']
    },
    {
        title: '2019 - 2020',
        subtitle: "The Missing Particle - Budapest, HU",
        role: 'Fullstack developer',
        description: "Through The Missing Particle I started working remotely for Hemmersbach. We've been building and maintaining the internal field service system. I was working in a full stack position that required taking care of the server and composing layouts on the frontend."
        , stack: ['Java', 'JavaEE', 'React', 'Redux', 'SQL']
    },
    {
        title: '2018 - 2019',
        subtitle: "The Missing Particle - Budapest, HU",
        role: 'Software developer',
        description: "The Missing Particle was the jumping pad so far in my career. Fresh out of collage I was developing a smart home system and also took part in an educational IT project."
        , stack: ['Java', 'Spring Boot', 'React', 'SQL']
    },
    {
        title: '2017 - 2018',
        subtitle: "Migeran - Budapest, HU",
        role: 'Software developer',
        description: "I got my first full-time job at Migeran, a small group of developers. I was working on a library that made it possible to create platform independent applications with Java. The solution was React/React Native implementation in Java"
        , stack: ['Java', 'React', 'React Native']
    },
    {
        title: '2015-2018',
        subtitle: "ELTE - Budapest, HU",
        role: 'Bachlor degree in Computer Science',
        description: "In of the biggest universities of Hungary, I studied wide range of IT subjects. Honorable mentions are Algorithms, Data structures, Logic, Java, Python, C++, Databases and lots of Math",
        stack: []
    }
]
