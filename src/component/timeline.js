import React from 'react'
import TimelineEvent from './timeline-event'

// const Timeline = ({ milestones = [] }) => {
//     return (
//         <div className='timeline-container'>
//             <div className='timeline-arrow'/>
//             <div className='container right'>
//                 <TimelineEvent
//                     date="2020-present"
//                     title="First freelance job"
//                     subtitle="Monavin - Budapest, HU"
//                     description="Custom webshop w/ Spring boot, Spring Security, MongoDB, React, Redux"
//                 />
//             </div>
//             <div className='container left'>
//                 <TimelineEvent
//                     date="2020-present"
//                     title="Backend developer"
//                     subtitle="Fieldcode - Budapest, HU (remote)"
//                     description="Microservice architecture w/ Spring boot, Apache Camel, Apache Kafka, MongoDB"
//                 />
//             </div>
//             <div className='container right'>
//                 <TimelineEvent
//                     date="2018-2019"
//                     title="Fullstack developer"
//                     subtitle="Hemmersbach - Budapest, HU (remote)"
//                     description="Java EE, Wildfly, React, Redux"
//                 />
//             </div>
//             <div className='container left'>
//                 <TimelineEvent
//                     date="2018"
//                     title="Software developer"
//                     subtitle="The Missing Particle - Budapest, HU"
//                     description="Spring boot, Java, patterns, finite state machines"
//                 />
//             </div>
//             <div className='container right'>
//                 <TimelineEvent
//                     date="2018"
//                     title="Thesis project"
//                     subtitle="ELTE - Budapest, HU"
//                     description="Web application w/ Spring boot, Spring Security, MySQL and Angular"
//                 />
//             </div>
//             <div className='container left'>
//                 <TimelineEvent
//                     date="2017-2018"
//                     title="Software developer"
//                     subtitle="Migeran Smart Software Solutions - Budapest, HU"
//                     description="Java, Javascript, React Native"
//                 />
//             </div>
//             <div className='container right'>
//                 <TimelineEvent
//                     date="2015-2018"
//                     title="Bachelor in Computer Science"
//                     subtitle="ELTE - Budapest, HU"
//                     description="Basic programming skills, algorithms, data structures, databases, maths"
//                 />
//             </div>
//         </div>
//     )
// }

const Timeline = ({ milestones = [] }) => {
    return (
        <div className='timeline-container'>
            <div className='timeline-arrow'/>
            <div className='container right'>
                <TimelineEvent
                    date="2020-present"
                    title="Backend developer"
                    subtitle="Fieldcode - Budapest, HU (remote)"
                />
            </div>
            <div className='container right'>
                <TimelineEvent
                    date="2018-2019"
                    title="Fullstack developer"
                    subtitle="Hemmersbach - Budapest, HU (remote)"
                />
            </div>
            <div className='container right'>
                <TimelineEvent
                    date="2018"
                    title="Software developer"
                    subtitle="The Missing Particle - Budapest, HU"
                />
            </div>
            <div className='container right'>
                <TimelineEvent
                    date="2017-2018"
                    title="Software developer"
                    subtitle="Migeran Smart Software Solutions - Budapest, HU"
                />
            </div>
            <div className='container right'>
                <TimelineEvent
                    date="2015-2018"
                    title="Bachelor in Computer Science"
                    subtitle="ELTE - Budapest, HU"
                />
            </div>
        </div>
    )
}

export default Timeline;
