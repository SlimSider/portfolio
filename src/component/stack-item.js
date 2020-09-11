import React from 'react';

const StackItem = ({img, idx}) => {
    return (
        <div className='stack-item'>
            <svg width="100%" height="100%" class="donut">
            <defs>
                <pattern id={`img${idx}`} patternUnits="userSpaceOnUse" x="0" y="0" width="150" height="150">
                  <image href={img} x="0" y="0" width="80" height="110" />
                </pattern>
              </defs>
              <circle fill={`url(#img${idx})`} cx="40" cy="50" r="80"></circle>
            </svg>
        </div>
    );
}

export default StackItem;
