import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = ()=>{

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        
            if(term && !results.length){
                search();
            } else {
                const timeID = setTimeout( ()=>{
                    if (term) {
                        search();
                    }
                }, 1000);

                return ()=> {
                    clearTimeout(timeID);
                };
            }
    }, [term]);

    const renderedList = results.map((result)=>{
        if(term){
            return (
                <div key={result.pageid}className='item'>
                    <div className='right floated content'>
                        <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'
                        target='_blank'
                        rel='noreferrer'
                        >
                            Go!
                        </a>
                    </div>
                    <div className='content'>
                        <br />
                        <div className='header'>
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
                    <br />
                </div>
            )
        }
        return '';
        
    })


    return (
        <div className='ui container'>
            <div className= 'ui form'>
                <div className='field'>
                    <label>Search term...</label>
                    <input value={term} className='input' onChange={e=> setTerm(e.target.value)} />
                </div>
            </div>
            <div className='ui celled list'>
                {renderedList}
            </div>
        </div>
    )
}

export default Search;