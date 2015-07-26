(function() {
  window.WTC = require('wtc');

  window.onload = function() {
    return React.render(React.createElement(WTC.component.CodeBox, APP_PROPS), document.getElementById("content"));
  };

}).call(this);
