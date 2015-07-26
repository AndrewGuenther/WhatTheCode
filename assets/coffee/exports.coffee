window.WTC = require('wtc')

window.onload = () ->
   React.render(React.createElement(WTC.component.CodeBox, APP_PROPS), document.getElementById("content"))
