import React, {useState} from 'react';

const BoxForm = (props) => {
    console.log(props);
    // FORM INPUT
    const [color, setColor] = useState("");

    // FORM ONSUBMIT FUNCTION TO ADD NEW BOXES
    const createBox = (e) => {
        e.preventDefault();

        // CALL ON 'ADDBOXES' FUNCTION (SEE APP.JS)
        props.addBoxes(color);
        
        // RESET INPUT FIELDS:
        setColor("");
    }

    return(
        <div>
            <hr/>
            <form onSubmit={ e => createBox(e)}>
                <div>
                    <label>Color: </label>
                    <input 
                        type="text" 
                        onChange={ (e) => setColor(e.target.value)} 
                        value={color} 
                    /> 
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default BoxForm;