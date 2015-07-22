import './less/style.less';

import React from 'react';
import App from './components/App';
import './thirdparty/UIkit/js/uikit.js';

main();

function main() {
    var app = document.createElement('div');
    document.body.appendChild(app);

    React.render(<App />, app);
}