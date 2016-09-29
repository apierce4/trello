var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./board');



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