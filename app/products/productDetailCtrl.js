var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        class ProductDetailCtrl {
            constructor($routeParams, dataAccessService) {
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, (data) => {
                    this.product = data;
                });
            }
        }
        ProductDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
        angular
            .module("productManagement")
            .controller("ProductDetailCtrl", ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
