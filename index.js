
var React = require('react');


# install react cli
npm install -g create-react-app

# create app
create-react-app my-react-app-name

# go to project folder
cd my-react-app-name

# install dependencies
npm install

# start live server
npm start

const StockSocket = require("stocksocket");

StockSocket.addTicker("TSLA", stockPriceChanged);

function stockPriceChanged(data) {
  //Choose what to do with your data as it comes in.
  console.log(data);
}

