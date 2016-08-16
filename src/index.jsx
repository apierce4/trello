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
   getInitialState: function(){
       var cards = [];
       return{
         title: 'Title Goes Here',
         cards: cards,
         text: '',
         changed: false
       };
   },
   onAddInputChanged: function(e) {
        var userValue = e.target.value;
        console.log('Change Called =' + userValue);
        this.setState({
                changed: true,
                text: userValue
        });
    },
    onAddSubmit: function(e){
        e.preventDefault();
        console.log("onAddSubmit " + this.state.text);
         var newList = this.state.cards;
         newList.push(this.state.text);
            this.setState({
              cards: newList
            });
        this.state.text = "";

        //this.onAddInputChanged(console.log("hi"));
        //this.setState({text: e.target.value});
    },
   render: function() {
       return <List listState={this.state} onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} />;
   }
});

var List =  function(props){
        //console.log(props);
        //var cards = [];
        //for (var i=0; i<props.listState.cards.length; i++) {
         //   cards.push(<Card text={props.listState.text[i]} key={i} />);
        //}
        return (
            <div className="list-box">
                <h3>{props.listState.title}</h3>
                {props.listState.cards}
                <form onSubmit={props.onAddSubmit}>
                    <input type="text" name="newCard" onChange={props.onAddInputChanged} value={props.listState.text} />
                    {props.listState.changed ?  <input type="submit" value="add" /> : null}
                </form>
            </div>
        );
    };


var Card = function(props) {
    console.log(props);
    return (
        <div className="card-box">
            {props.listState.text}
        </div>
    );
};






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="New Board" />, document.getElementById('app'));
});