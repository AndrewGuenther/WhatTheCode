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
                  code={this.props.code}
                  focusElement={this.state.focusKey}
                  onCodeElementClick={this.handleCodeElementClick}
               />
               <Explanation
                  explanations={this.props.explanation}
                  focusElement={this.state.focusKey}
               />
            </div>
         </div>
      );
   }
});

var CodeLine = React.createClass({
   render: function() {
      var code = this.props.code;
      return (
         <div className="code-line">
            {code.map(function(element, index) {
               return <CodeElement
                         key={index}
                         index={index}
                         code={element}
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
      var explanation = this.props.explanations[this.props.focusElement];
      return (
         <div className="code-explanation">
            {explanation}
         </div>
      );
   }
});

module.exports = CodeBox;
