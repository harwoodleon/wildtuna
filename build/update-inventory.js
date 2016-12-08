/**
 * Script used update products from Shopify
 *
 * Input:   api credentials from Shopify private web app
 * Output:  JSON file of all products
 */


var https = require('https')
var fs = require('fs')

var api  = require('../.api-credentials.json')
// https://apikey:password@hostname/admin/resource.json
var req_url  = 'https://' + api.key + ':' + api.password + '@' + api.store + '.myshopify.com/admin/'


function getProducts(req_url){

  https.get(req_url + 'products.json?fields=id,images,title,product_type', function(res) {

    var data = [];

    res.on('data', function(chunk) {
      data.push(chunk)
    });
    res.on('end', function() {
      writeToFile(JSON.parse(data))
    });

  }).on('error', function(e) {
    console.log("Got error: " + e.message)
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

