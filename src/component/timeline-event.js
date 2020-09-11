import React from 'react'

export default function TimelineEvent({ title, subtitle, description, date }) {
    return (
        <div className='content'>
            <h5>{date}</h5>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
        </div>
    )
}
