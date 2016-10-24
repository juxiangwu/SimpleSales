var dao = require('../dao');
var db = require('../models');

var productTypeDao = new dao.ProductTypeDao(db);
var randomstring = require('randomstring');
var async = require('async');

productTypeDao.save({
  userId:121,
  name:'C',
  isLeaf:true,
  parentId:-1
},function(result){
  console.log(result);
});

// productTypeDao.findSubTypes({userId:121,parentId:-1},function(results){
//   console.log(results);
// });

// productTypeDao.update({
//   name:'A01',
//   id:2,
//   userId:121
// },function(result){
//   console.log(result)
// });

// productTypeDao.remove({
//   userId:121,
//   id:1,
//   leaf:false
// },function(result){
//   console.log(result);
// });
