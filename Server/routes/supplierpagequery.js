'use strict';

var SupplierPageQuery = function(service){
  var _service = service;

  this.getRoute = function(){
    var route = {
      path:'/supplierpagequery',
      method:'GET',
      handler:function(request,reply){
        _service.handleQueryWithPage(request,function(result){
          reply(result);
        });
      }
    }
    return route;
  }
};

module.exports = SupplierPageQuery;
