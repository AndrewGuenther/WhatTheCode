/** @jsx React.DOM */
/*
 * - CodeBox
 *   - CodeLine
 *     - CodeElement
 *   - Explanation
 */

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
                  code={this.props.data.code}
                  focusElement={this.state.focusKey}
                  onCodeElementClick={this.handleCodeElementClick}
               />
               <Explanation
                  explanations={this.props.data.explanation}
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
      this.props.onCodeElementClick(this.props.key);
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

var CODE = {
   "code": ["wc", "-l"],
   "explanation": ["The word count tool", "the number of lines"]
}

React.renderComponent(<CodeBox data={CODE} />, document.getElementById('content'));
