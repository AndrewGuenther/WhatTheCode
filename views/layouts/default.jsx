/*
 * - CodeBox
 *   - CodeLine
 *     - CodeElement
 *   - Explanation
 */

var React = require('react');

exports.Head = React.createClass({
   render: function() {
      return (
         <head>
            <title>What The Code{this.props.title && " - " + this.props.title}</title>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
            <link rel="stylesheet" type="text/css" href="/css/base.css" />
         </head>
   )}
});

exports.Post = React.createClass({
   render: function() {
      return (
         <div>
            <script src="http://fb.me/react-0.13.3.js"></script>
            <script src="/js/components.js"></script>
            <script dangerouslySetInnerHTML={{__html:
               "window.WTC = require('wtc');" +
               "window.onload = function() {" +
                  "React.render(React.createElement(WTC.views."+this.props.view+", APP_PROPS)," +
                     "document.getElementById('content'));" +
               "};"
            }}/>
         </div>
   )}
});

