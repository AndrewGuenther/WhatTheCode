require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*
 * - CodeBox
 *   - CodeLine
 *     - CodeElement
 *   - Explanation
 */

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

var CodeBox = React.createClass({displayName: "CodeBox",
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
         React.createElement("div", {className: "code-box-container"}, 
            React.createElement("div", {className: "code-box"}, 
               React.createElement(CodeLine, {
                  code: this.props.data.code, 
                  focusElement: this.state.focusKey, 
                  onCodeElementClick: this.handleCodeElementClick}
               ), 
               React.createElement(Explanation, {
                  explanations: this.props.data.explanation, 
                  focusElement: this.state.focusKey}
               )
            )
         )
      );
   }
});

var CodeLine = React.createClass({displayName: "CodeLine",
   render: function() {
      var code = this.props.code;
      return (
         React.createElement("div", {className: "code-line"}, 
            code.map(function(element, index) {
               return React.createElement(CodeElement, {
                         key: index, 
                         index: index, 
                         code: element, 
                         onCodeElementClick: this.props.onCodeElementClick}
                      )
            }, this)
         )
      );
   }
});

var CodeElement = React.createClass({displayName: "CodeElement",
   handleClick: function(e) {
      this.props.onCodeElementClick(this.props.index);
   },
   render: function() {
      return (
         React.createElement("span", {className: "code-element", onClick: this.handleClick}, this.props.code)
      );
   }
});

var Explanation = React.createClass({displayName: "Explanation",
   render: function() {
      var explanation = this.props.explanations[this.props.focusElement];
      return (
         React.createElement("div", {className: "code-explanation"}, 
            explanation
         )
      );
   }
});

module.exports = CodeBox;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
/*
 * - CodeBox
 *   - CodeLine
 *     - CodeElement
 *   - Explanation
 */

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null);

exports.Head = React.createClass({displayName: "Head",
   render: function() {
      return (
         React.createElement("head", null, 
            React.createElement("title", null, "What The Code ", this.props.title), 
            React.createElement("link", {rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css"}), 
            React.createElement("link", {rel: "stylesheet", type: "text/css", href: "/css/base.css"})
         )
   )}
});

exports.Post = React.createClass({displayName: "Post",
   render: function() {
      return (
         React.createElement("div", null, 
            React.createElement("script", {src: "http://fb.me/react-0.13.3.js"}), 
            React.createElement("script", {src: "/js/components.js"}), 
            React.createElement("script", {src: "/js/exports.js"})
         )
   )}
});



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"wtc":[function(require,module,exports){
exports.layout = {
   DefaultLayout: require('./layouts/default.jsx')
}

exports.component = {
   CodeBox: require('./components/codebox.jsx')
}


},{"./components/codebox.jsx":1,"./layouts/default.jsx":2}]},{},["wtc"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hbmRyZXcvV29ya3NwYWNlL3d0Yy92aWV3cy9jb21wb25lbnRzL2NvZGVib3guanN4IiwiL2hvbWUvYW5kcmV3L1dvcmtzcGFjZS93dGMvdmlld3MvbGF5b3V0cy9kZWZhdWx0LmpzeCIsIi9ob21lL2FuZHJldy9Xb3Jrc3BhY2Uvd3RjL3ZpZXdzL2FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTdCLElBQUksNkJBQTZCLHVCQUFBO0dBQzlCLGVBQWUsRUFBRSxXQUFXO01BQ3pCLE9BQU87U0FDSixRQUFRLEVBQUUsQ0FBQztPQUNiLENBQUM7SUFDSjtHQUNELHNCQUFzQixFQUFFLFNBQVMsUUFBUSxFQUFFO01BQ3hDLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDWCxRQUFRLEVBQUUsUUFBUTtPQUNwQixDQUFDLENBQUM7SUFDTDtHQUNELE1BQU0sRUFBRSxXQUFXO01BQ2hCO1NBQ0csb0JBQUEsS0FBSSxFQUFBLENBQUEsQ0FBQyxTQUFBLEVBQVMsQ0FBQyxvQkFBcUIsQ0FBQSxFQUFBO1lBQ2pDLG9CQUFBLEtBQUksRUFBQSxDQUFBLENBQUMsU0FBQSxFQUFTLENBQUMsVUFBVyxDQUFBLEVBQUE7ZUFDdkIsb0JBQUMsUUFBUSxFQUFBLENBQUE7a0JBQ04sSUFBQSxFQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDO2tCQUMzQixZQUFBLEVBQVksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBQztrQkFDbEMsa0JBQUEsRUFBa0IsQ0FBRSxJQUFJLENBQUMsc0JBQXVCLENBQUE7ZUFDakQsQ0FBQSxFQUFBO2VBQ0Ys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QyxDQUFDLENBQUM7O0FBRUgsa0NBQWtDLG9CQUFBO0dBQy9CLE1BQU0sRUFBRSxXQUFXO01BQ2hCO1NBQ0csb0JBQUEsS0FBSSxFQUFBLElBQUMsRUFBQTtZQUNGLG9CQUFBLFFBQU8sRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUMsOEJBQStCLENBQVMsQ0FBQSxFQUFBO1lBQ3BELG9CQUFBLFFBQU8sRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUMsbUJBQW9CLENBQVMsQ0FBQSxFQUFBO1lBQ3pDLG9CQUFBLFFBQU8sRUFBQSxDQUFBLENBQUMsR0FBQSxFQUFHLENBQUMsZ0JBQWlCLENBQVMsQ0FBQTtTQUNuQyxDQUFBO0lBQ1gsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FDN0JILE9BQU8sQ0FBQyxNQUFNLEdBQUc7R0FDZCxhQUFhLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0FBQ2xELENBQUM7O0FBRUQsT0FBTyxDQUFDLFNBQVMsR0FBRztHQUNqQixPQUFPLEVBQUUsT0FBTyxDQUFDLDBCQUEwQixDQUFDO0NBQzlDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qXG4gKiAtIENvZGVCb3hcbiAqICAgLSBDb2RlTGluZVxuICogICAgIC0gQ29kZUVsZW1lbnRcbiAqICAgLSBFeHBsYW5hdGlvblxuICovXG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBDb2RlQm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICBmb2N1c0tleTogMFxuICAgICAgfTtcbiAgIH0sXG4gICBoYW5kbGVDb2RlRWxlbWVudENsaWNrOiBmdW5jdGlvbihmb2N1c0tleSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICBmb2N1c0tleTogZm9jdXNLZXlcbiAgICAgIH0pO1xuICAgfSxcbiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLWJveC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZS1ib3hcIj5cbiAgICAgICAgICAgICAgIDxDb2RlTGluZVxuICAgICAgICAgICAgICAgICAgY29kZT17dGhpcy5wcm9wcy5kYXRhLmNvZGV9XG4gICAgICAgICAgICAgICAgICBmb2N1c0VsZW1lbnQ9e3RoaXMuc3RhdGUuZm9jdXNLZXl9XG4gICAgICAgICAgICAgICAgICBvbkNvZGVFbGVtZW50Q2xpY2s9e3RoaXMuaGFuZGxlQ29kZUVsZW1lbnRDbGlja31cbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICA8RXhwbGFuYXRpb25cbiAgICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9ucz17dGhpcy5wcm9wcy5kYXRhLmV4cGxhbmF0aW9ufVxuICAgICAgICAgICAgICAgICAgZm9jdXNFbGVtZW50PXt0aGlzLnN0YXRlLmZvY3VzS2V5fVxuICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgfVxufSk7XG5cbnZhciBDb2RlTGluZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY29kZSA9IHRoaXMucHJvcHMuY29kZTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGUtbGluZVwiPlxuICAgICAgICAgICAge2NvZGUubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICByZXR1cm4gPENvZGVFbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29kZT17ZWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvZGVFbGVtZW50Q2xpY2s9e3RoaXMucHJvcHMub25Db2RlRWxlbWVudENsaWNrfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9LCB0aGlzKX1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgIH1cbn0pO1xuXG52YXIgQ29kZUVsZW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICBoYW5kbGVDbGljazogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvZGVFbGVtZW50Q2xpY2sodGhpcy5wcm9wcy5pbmRleCk7XG4gICB9LFxuICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2RlLWVsZW1lbnRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT57dGhpcy5wcm9wcy5jb2RlfTwvc3Bhbj5cbiAgICAgICk7XG4gICB9XG59KTtcblxudmFyIEV4cGxhbmF0aW9uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBleHBsYW5hdGlvbiA9IHRoaXMucHJvcHMuZXhwbGFuYXRpb25zW3RoaXMucHJvcHMuZm9jdXNFbGVtZW50XTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGUtZXhwbGFuYXRpb25cIj5cbiAgICAgICAgICAgIHtleHBsYW5hdGlvbn1cbiAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvZGVCb3g7XG4iLCIvKlxuICogLSBDb2RlQm94XG4gKiAgIC0gQ29kZUxpbmVcbiAqICAgICAtIENvZGVFbGVtZW50XG4gKiAgIC0gRXhwbGFuYXRpb25cbiAqL1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5leHBvcnRzLkhlYWQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPldoYXQgVGhlIENvZGUge3RoaXMucHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbm9ybWFsaXplLzMuMC4zL25vcm1hbGl6ZS5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2Nzcy9iYXNlLmNzc1wiIC8+XG4gICAgICAgICA8L2hlYWQ+XG4gICApfVxufSk7XG5cbmV4cG9ydHMuUG9zdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cDovL2ZiLm1lL3JlYWN0LTAuMTMuMy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvY29tcG9uZW50cy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvZXhwb3J0cy5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgPC9kaXY+XG4gICApfVxufSk7XG5cbiIsImV4cG9ydHMubGF5b3V0ID0ge1xuICAgRGVmYXVsdExheW91dDogcmVxdWlyZSgnLi9sYXlvdXRzL2RlZmF1bHQuanN4Jylcbn1cblxuZXhwb3J0cy5jb21wb25lbnQgPSB7XG4gICBDb2RlQm94OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvY29kZWJveC5qc3gnKVxufVxuIl19
