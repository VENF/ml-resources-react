import React from 'react';

const IconBase = (props) => {
    return (
        <svg width={props.width} height={props.heigth} viewBox={props.viewBox}>
            <g fill={props.color}>
                { props.children }
            </g>
        </svg>
    )
}

export default IconBase;
