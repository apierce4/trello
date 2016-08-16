var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
    getInitialState:function(){
        return{
            title: "Your First Board"
        };
        
    },
    onClick:function(){
        this.setState({
            
        });
    }
    ,
    render: function() {
        var list = [];
        for (var i=0; i<3; i++) {
            list.push(<List key={i} />);
        }
        return (
            <div className="board-box">
                <h1>{this.state.title}</h1>
                {list}
            </div>
        );
    }
});

var List =  React.createClass({
    getInitialState:function(){
        return{
            title: "Your First List"
        };
        
    },
    onClick:function(){
        this.setState({
            
        });
    },
    render: function() {
        var card = [];
        for (var i=0; i<3; i++) {
            card.push(<Card key={i} />);
        }
        return (
            <div className="list-box">
                <h3>{this.state.title}</h3>
                {card}
            </div>
        );
    }
});

var Card = function() {
    var listItem = "List Item 1";
    return (
        <div className="card-box">
            {listItem}
        </div>
    );
};






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});