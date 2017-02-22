/**
 * Created by dvaradar on 2/22/2017.
 */
var marklogic = require('marklogic');
var strReverse = require('str-reverse');

var db = marklogic.createDatabaseClient({
  host:     'localhost',
  port:     '8000',
  user:     'admin',
  password: 'admin',
  authType: 'DIGEST'
});

db.createCollection(
  '/sample',
  {
    text:  'HelloWorld',
    textReversed:   strReverse('HelloWorld')
  }
  )
.result(function(response) {
    console.log(JSON.stringify(response,null,2));
  }, function (error) {
    console.log(JSON.stringify(error,null,2));
  });