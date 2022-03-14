const React = require('react');
const StockSocket = require("stocksocket");
var searched = ('TSLA');

StockSocket.addTicker(searched, stockPriceChanged);

function stockPriceChanged(data) {
  //Choose what to do with your data as it comes in.
  console.log('ID: ' + data.id + '\nPrice: ' + data.price);
};



