var React = require('react');
var ReactDOM = require('react-dom');

var Board = React.createClass({
    render: function() {
        var list = [];
        for (var i=0; i<3; i++) {
            var listTitle = "List " + i;
            list.push(<ListContainer key={i} title={listTitle} />);
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
         title: this.props.title,
         cards: cards,
         text: 'Enter New',
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
    onFocus: function () {
        console.log('Focus');
        this.setState({
          text: ''
        });
        
    },
    onAddSubmit: function(e){
        e.preventDefault();
         //console.log("onAddSubmit " + this.state.text);
         var newList = this.state.cards;
         newList.push(this.state.text);
            this.setState({
              cards: newList
            });
        


    },
   render: function() {
       return <List listState={this.state} title={this.state.title} onFocus={this.onFocus} onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} cards={this.state.cards} text={this.state.text} />;
   }
});

var List =  function(props){
        //console.log(props);
        
        var cards = [];
        
        for (var i=0; i<props.listState.cards.length; i++) {
            cards.push(<Card text={props.listState.cards[i]} key={i} />);
        }
        

        return (
            <div className="list-box">
                <h3>{props.listState.title}</h3>
                {cards}
                <form onSubmit={props.onAddSubmit}>
                    <input type="text" name="newCard" 
                    onChange={props.onAddInputChanged} 
                    onFocus={props.onFocus} 
                    value={props.text} />
                    {props.listState.changed ?  <input type="submit" value="Add" /> : null}
                </form>
            </div>
        );
    };


var Card = function(props) {
    //console.log(props);
    return (
        <div className="card-box">
            {props.text}
        </div>
    );
};






document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board title="New Board" />, document.getElementById('app'));
});