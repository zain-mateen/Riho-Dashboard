import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SidebarManu from './components/SidebarManu/SidebarManu';

function App () {
    return (
        <BrowserRouter>
            <SidebarManu />
        </BrowserRouter>
    );
}

export default App;
