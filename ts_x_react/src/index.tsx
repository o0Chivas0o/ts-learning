import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button'

const fn: React.MouseEventHandler = function (e: React.MouseEvent) {
    console.log(e);
}

ReactDOM.render(
    <div>
        <Button size="small">
            <span>点我</span>
        </Button>
        <Button onClick={fn}>
            <span>Click Me</span>
        </Button>
        <Button size="big">
            <span>点我</span>
        </Button>
    </div>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
