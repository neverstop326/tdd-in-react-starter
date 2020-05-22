import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JokeGenerator from "./jokeGenerator";

ReactDOM.render(
    <React.StrictMode>
    <JokeGenerator />
    </React.StrictMode>,
    document.getElementById('root')
);

// const App = () => (
//     <div style={styles}>
//         <JokeGenerator />
//     </div>
// );