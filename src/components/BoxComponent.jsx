import React, {useState} from 'react';
import BoxContainer from './BoxComponent.module.css'

const BoxComponent = (props) => {
    // FORM INPUT
    const [color, setColor] = useState("");

    // BOX CREATION
    const [box, setBox] = useState("");
    const boxList = [];
    

    // FORM ONSUBMIT FUNCTION TO ADD NEW BOXES
    const createBox = (e) => {
        e.preventDefault();

        // PUSH CREATED BOX INTO BOXLIST??
        // boxList.push(newBox)
        // const newBox = boxList[i];
        // RESET INPUT FIELDS:
        setColor("");
    }

    return(
        <div>
            <hr/>
            <form onSubmit={createBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={colorInput} value={color} /> <br/>
                </div>

                <div>
                    <input type="Submit" value="Add" />
                </div>
            </form>
            <hr/>
            <div>
                {boxList.map( () => <div id="box" ></div>)}
            </div>
        </div>
    )
}

export default BoxComponent;