import './App.css';
import {useState} from 'react';

import BoxForm from './components/BoxForm';
import BoxView from './components/BoxView';

function App() {
  // CREATE EMPTY LIST OF COLORS
  const [boxList, setBoxList] = useState([])
  
  // TO CREATE NEW BOXLIST TO ADD NEWBOX & UPDATE WHAT IS IN STATE
  const addBoxes = (newBox) => {
    // COPIES BOXLIST IN STATE
    const newBoxList = [...boxList];
    // ADDS NEW BOX TO COPY 
    newBoxList.push(newBox);
    // UPDATE BOXLIST IN STATE WITH ADDITION
    setBoxList(newBoxList);
    // COMBINES ABOVE THREE LINES??
    // setBoxList([...boxList, newBox])
  }

  return (
    <div className="App">
      <div>
        <h4>Add a box color!</h4>
      </div>
      <BoxForm addBoxes={addBoxes}/>
      <BoxView boxList={boxList}/>
      
    </div>
  );
}

export default App;
