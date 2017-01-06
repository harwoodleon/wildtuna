/**
 * Script used update products from Shopify
 *
 * Input:   api credentials from Shopify private web app
 * Output:  JSON file of all products
 */


var https = require('https')
var fs = require('fs')

var api  = require('../.api-credentials.json')
var req_url  = 'https://' + api.key + ':' + api.password + '@' + api.store + '.myshopify.com/admin/'


function getProducts(req_url){

  https.get(req_url + 'products.json?fields=id,images,title,product_type', function(res) {

    var data = [];

    res.on('data', function(chunk) {
      console.log('Recieved products')
      data.push(chunk)
    });
    res.on('end', function() {
      console.log('Writing file...')
      writeToFile(JSON.parse(data))
      console.log('\x1b[32mFinished with no errors\x1b[0m')
    });

  }).on('error', function(e) {
    console.log('\x1b[31mError: ' + e.message + '\x1b[0m')
  })

}

function writeToFile(string){

  fs.writeFile('products.json', JSON.stringify(string, null, 4 ), function(err) {
    if(err) {
      return console.log(err);
    }
  })
}

getProducts(req_url);

