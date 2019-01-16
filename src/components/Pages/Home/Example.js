import React from 'react';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,
                      date: new Date()};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div className="example-reactive-nerd">
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                <br/>
                <h1>the time is {this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}


//Below will cause error

// ReactDOM.render(
//     <Example />,
//     document.getElementById('root')
// );