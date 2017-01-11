import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCoSlWGkya6HRvVmvmXsQqHZYjIt2fNKXE';

// Create a new component. This component should produce some HTML.
const App = () => <div>Hi</div>;

// Take this component's generated HTML and put it on the page (DOM).
ReactDOM.render(<App/>, document.querySelector('.container'));
