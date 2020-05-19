import React, {Component} from 'react';
import Button from './components/button'

class App extends Component {
    onClick(e: React.MouseEvent<HTMLDivElement>) {
        const div = e.currentTarget
        console.log(div.style.width);
    }
    render() {
        return (
            <div className="App">
                <Button size="big" onClick={this.onClick}>你好</Button>
            </div>
        );
    }
}

export default App;

