var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function () {
        return React.createElement('div', {
                onClick: this.increment
            },
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));


var Counter2 = React.createClass({
    getInitialState: function () {
        return {
            counter: 100
        };
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {
                onClick: this.decrement
            },
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter2);
ReactDOM.render(element, document.getElementById('app2'));


var Counter3 = React.createClass({
    getInitialState: function () {
        return {
            counter: 21
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 5
        });
    },

    render: function () {
        return React.createElement('div', {
                onClick: this.increment
            },
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter3);
ReactDOM.render(element, document.getElementById('app3'));

var Counter4 = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 5
        });
    },

    render: function () {
        return React.createElement('div', {
                onClick: this.decrement
            },
            React.createElement('span', {}, 'Licznik ' + this.state.counter)
        );
    }
});

var element = React.createElement(Counter4);
ReactDOM.render(element, document.getElementById('app4'));
