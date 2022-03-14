
var React = require('react');

$ You can now view my-react-app-name in the browser.

$ Local:            http://localhost:3000/
$ On Your Network:  http://192.168.0.105:3000/

$ Note that the development build is not optimized.
$ To create a production build, use npm build.



const StockSocket = require("stocksocket");

StockSocket.addTicker("TSLA", stockPriceChanged);

function stockPriceChanged(data) {
  //Choose what to do with your data as it comes in.
  console.log(data);
}

