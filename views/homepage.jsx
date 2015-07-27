var React = require('react')

var SnippetList = require('./components/snippetlist.jsx')

module.exports = React.createClass({
   render: function() {
      return (
         <div>
            <h1>What the Code</h1>
            <div>
               <h2>Recent Snippets</h2>
               <SnippetList snippets={this.props.recent} />
            </div>
            <div>
               <h2>Popular Snippets</h2>
               <SnippetList snippets={this.props.popular} />
            </div>
         </div>
      );
   }
});
