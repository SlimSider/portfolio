import React from 'react';

const Tab = ({title, onClick, active}) => {
    return (
        <div onClick={onClick} className={`tab ${active ? 'active' : 'inactive'}`}> 
            {title}
        </div>
    );
}

export default Tab;
