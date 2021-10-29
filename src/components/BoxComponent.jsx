import React, {useState} from 'react';
import BoxContainer from './BoxComponent.module.css'

const BoxComponent = (props) => {
    // FOR FORM INPUT
    const [color, setColor] = useState("");

    const createBox = (e) => {
        e.preventDefault();

    }

    return(
        <div>
            <hr/>
            <form onSubmit={createBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={ (e) => setColor(e.target.value)} value={color} /> <br/>
                </div>

                <div>
                    <input type="Submit" value="Add" />
                </div>
            </form>
            <hr/>
            <div class={{BoxContainer}} style={{backgroundcolor: setColor}}>

            </div>
        </div>
    )
}

export default BoxComponent;