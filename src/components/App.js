import React, {useState} from 'react';
//import Accordion from './Accordion';
import Dropdown from './Dropdown';
//import Search from './Search';

const items =[
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is one of the most popular framweork'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];
const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    },
    {
        label: 'The greenest green',
        value: 'green'
    }
];


    const App =  ()=>{

        const [selected, setSelected] = useState(options[0]);
        const [showDropdown, setShowDropdown] = useState(false);

        return (

        //<div className='ui segment'><Accordion items={items}/></div>
        //<div><Search /></div>
        <div className='ui container'>
            
            <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle.</button>
            {showDropdown ? 
                <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            /> : null}
        </div>
        
    )
    }

    export default App;


