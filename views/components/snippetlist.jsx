/*
 * - SnippetList
 *   - SnippetItem
 */

var React = require('react');

var SnippetList = React.createClass({
   render: function() {
      return (
         <ul>
            {
               this.props.snippets.map(function(snippet) {
                  return (
                     <li key={snippet.id}>
                        <SnippetItem id={snippet.id} title={snippet.title} />
                     </li>
                  );
               })
            }
         </ul>
      );
   }
});

var SnippetItem = React.createClass({
   render: function() {
      return (
         <a href={ "/" + this.props.id }>{ this.props.title }</a>
      );
   }
});

module.exports = SnippetList;

