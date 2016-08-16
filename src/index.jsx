var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
    render: function() {
        var list = [];
        for (var i=0; i<3; i++) {
            list.push(<ListContainer key={i} title="Another Title" />);
        }
        return (
            <div className="board-box">
                <h1>{this.props.title}</h1>
                {list}
            </div>
        );
       /* return <ListContainer />;*/
    }
});

var ListContainer = React.createClass({
   getInitialState: function(props){
       var cards = [];
       return{
         cards: cards,
         text: this.props.text
       };
   },
   render: function() {
       return <List />;
   }
});

var List =  React.createClass({
    getInitialState: function(e) {
        return {
            changed: false,
            text: 'Enter New'
        };
    },
    onAddInputChanged: function(e) {
        if (this.state.changed == false) {
            this.setState({
                changed: true,
                text: e.target.value
            });
        }else{
            this.setState({
                changed: true,
                text: e.target.value
            });
        }
    },
    onAddSubmit: function(e){
        e.preventDefault();
        console.log("onAddSubmit " + this.props.text);
        this.onAddInputChanged(console.log("hi"));
        //this.setState({text: e.target.value});
    },
    render: function() {
        var card = [];
        for (var i=0; i<3; i++) {
            card.push(<Card text={this.state.text} key={i} />);
        }
        return (
            <div className="list-box">
                <h3>{this.props.title}</h3>
                {card}
                <form onSubmit={this.onAddSubmit}>
                    <input type="text" name="newCard" onChange={this.onAddInputChanged} value={this.state.text} />
                    {this.state.changed ?  <input type="submit" value="add" /> : null}
                </form>
            </div>
        );
    }
});

var Card = function(props) {
    return (
        <div className="card-box">
            {props.text}
        </div>
    );
};






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="New Board" />, document.getElementById('app'));
});