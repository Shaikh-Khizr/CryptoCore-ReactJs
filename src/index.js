// import React from 'react';
// import ReactDOM from 'react-dom';

import App from './App';
import 'antd/dist/antd'

// ReactDOM.render(<App />, document.getElementById('root'));

// React 18 (https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <App />
    </Router>
);