var React = require('react')

var SnippetItemList = React.createClass({
   render: function() {
      var createItem = function(itemText, index) {
         return <li key={index}>{itemText.code}, {itemText.explanation}</li>;
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
   }
});

var CreateSnippet = React.createClass({
   getInitialState: function() {
      return {items: [], title: '', code: '', explanation: ''};
   },
   onTitleChange: function(e) {
      this.setState({title: e.target.value});
   },
   onCodeChange: function(e) {
      this.setState({code: e.target.value});
   },
   onExplanationChange: function(e) {
      this.setState({explanation: e.target.value});
   },
   handleSubmit: function(e) {
      e.preventDefault();
      var nextItems = this.state.items.concat([{
         code: this.state.code,
         explanation: this.state.explanation
      }]);
      this.setState({items: nextItems, code: '', explanation: ''});
   },
   submitSnippet: function(e) {
      var createReq = new XMLHttpRequest();
      createReq.open("POST", "/snippet", true);
      createReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      createReq.send(JSON.stringify({
         title: this.state.title,
         elements: this.state.items
      }));
   },
   render: function() {
      return (
         <div>
            <h3>Create a Snippet</h3>
            <div>Snippet title</div>
            <input onChange={this.onTitleChange} value={this.state.title} />
            <SnippetItemList items={this.state.items} />
            <form onSubmit={this.handleSubmit}>
               <input onChange={this.onCodeChange} value={this.state.code} />
               <input onChange={this.onExplanationChange} value={this.state.explanation} />
               <button>+</button>
            </form>
            <button onClick={this.submitSnippet}>Create Snippet</button>
         </div>
      );
   }
});

module.exports = CreateSnippet;
