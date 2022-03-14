const React = require('react');
const StockSocket = require("stocksocket");
var searched = ("");
var useConsole = true
const prompt = require("prompt-sync")({ sigint: true });

if(useConsole === true){
  const prompt = require("prompt-sync")({ sigint: true });
  const aktie = prompt("vilken aktie");
  console.log(`aktie = ${aktie}`);
  searched = aktie
}

StockSocket.addTicker(searched, stockPriceChanged);

function stockPriceChanged(data) {
  //Choose what to do with your data as it comes in.
  console.log('ID: ' + data.id + '\nPrice: ' + data.price);
};



