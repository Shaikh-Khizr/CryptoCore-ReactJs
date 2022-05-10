// React 18 (https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis)

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import 'antd/dist/antd'

import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);