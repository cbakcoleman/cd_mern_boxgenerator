import React from 'react'
import './styles.css';

const BoxView = (props) => {

    console.log(props.BoxList);

    return (
        <div>
            <hr/>
            <h4>Check out these boxes:</h4>
            
            {/* <ul>
                {props.boxList.map( (box, i) =>
                    <li key={i}>{box}</li>)}
            </ul> */}
            {/* BE SURE TO FOLLOW CAPITALIZATION FROM APP.JS OR IT DOESN'T WORK! */}
            {
                props.boxList.map((box, idx) => {
                    return <div id="box" style={{background: box}} key={idx}></div>
                })
            }
        </div>
    )
}

export default BoxView