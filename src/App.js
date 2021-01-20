import './App.css';
import Tweet from './Tweet.js'
import React, { useState} from 'react';

function App() {
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(()=>{setSubmitting(false);},3000)
        alert('You have submitted the form.')
    }

    return ( <
        div className = "wrapper" >
        <h1 > How about them apples </h1> 
        {submitting && <div> Submitting Form ...</div>}
        <form onSubmit={handleSubmit}>
        <fieldset>
        <label>
        <p>Name</p>
        <input name="name"></input>
        </label>
        </fieldset>
        <button type="submit">Submit</button>
        </form>

        </div>
    );
}

export default App;