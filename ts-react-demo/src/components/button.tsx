import React from 'react';
import './button.css'

interface IProps {
    size: string
    onClick?: React.MouseEventHandler
}

interface IState {
    n: number
}

class Button extends React.Component<IProps, IState> {
    static displayName = 'lzyButton'
    static defaultProps = {
        size: 'normal'
    }

    constructor(Props: IProps) {
        super(Props);
        this.state = {
            n: 1
        }
    }
    onClick = () => {
        this.setState({
            n: this.state.n + 1
        })
    }
    render() {
        return (
            <div className="button">
                <span onClick={this.onClick}>
                    {this.props.children}
                    {this.state.n}
                </span>
            </div>
        )
    }
}

export default Button
