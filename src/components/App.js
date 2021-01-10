import React from 'react';
//import Accordion from './Accordion';
import Search from './Search';

/*
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
]
*/

const App = ()=>{
    return (
        //<div className='ui segment'><Accordion items={items}/></div>
        <div><Search /></div>
    )
}

export default App;