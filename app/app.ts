module app{
    var main=angular.module("productManagement",["ngRoute","common.services","productResourceMock"]);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider):void {
        $routeProvider
        .when("/productDetail/:productId",
        {
            templateUrl:"/app/products/productDetailView.html",
            controller:"ProductDetailCtrl as vm"
        })
        .when("/",
        {
            templateUrl:"/app/products/productListView.html",
            controller:"ProductListCtrl as vm"
        })
       
        .otherwise({
            redirectTo: "/productList"
        });


    }
}