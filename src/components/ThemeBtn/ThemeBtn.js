import React from 'react'
import './ThemeBtn.scss';

function ThemeBtn(props) {
    return (
        <button className={props.ButtonClass}>
            <span>{props.ButtonText}</span>
        </button>
    )
}

export default ThemeBtn