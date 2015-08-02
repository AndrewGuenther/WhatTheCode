/*
 * - CodeBox
 *   - CodeLine
 *     - CodeElement
 *   - Explanation
 */

var React = require('react');

var CodeBox = React.createClass({
   getInitialState: function() {
      return {
         focusKey: 0
      };
   },
   handleCodeElementClick: function(focusKey) {
      this.setState({
         focusKey: focusKey
      });
   },
   render: function() {
      return (
         <div className="code-box-container">
            <div className="code-box">
               <CodeLine
                  elements={this.props.elements}
                  focusElement={this.state.focusKey}
                  onCodeElementClick={this.handleCodeElementClick}
               />
               <Explanation
                  elements={this.props.elements}
                  focusElement={this.state.focusKey}
               />
            </div>
         </div>
      );
   }
});

var CodeLine = React.createClass({
   render: function() {
      var elements = this.props.elements;
      return (
         <div className="code-line">
            {elements.map(function(element, index) {
               return <CodeElement
                         key={index}
                         index={index}
                         code={element.code}
                         onCodeElementClick={this.props.onCodeElementClick}
                      />
            }, this)}
         </div>
      );
   }
});

var CodeElement = React.createClass({
   handleClick: function(e) {
      this.props.onCodeElementClick(this.props.index);
   },
   render: function() {
      return (
         <span className="code-element" onClick={this.handleClick}>{this.props.code}</span>
      );
   }
});

var Explanation = React.createClass({
   render: function() {
      var explanation = this.props.elements[this.props.focusElement].explanation;
      return (
         <div className="code-explanation">
            {explanation}
         </div>
      );
   }
});

module.exports = CodeBox;
