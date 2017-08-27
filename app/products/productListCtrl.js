var app;
(function (app) {
    var productList;
    (function (productList) {
        class ProductListCtrl {
            constructor(dataAccessService) {
                this.dataAccessService = dataAccessService;
                this.title = "Product List";
                this.showImage = true;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query((data) => {
                    this.products = data;
                });
                /* var newProduct= new app.domain.Product(
                     3,"Saw","TBX-002",
                     new Date(2002,3,1),
                     16.95,"15 inch steel blade hand saw",
                     "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
                     newProduct.price=newProduct.calculateDiscount(10);
                     this.products.push(newProduct);*/
            }
            toggleImage() {
                this.showImage = !this.showImage;
            }
        }
        ProductListCtrl.$inject = ["dataAccessService"];
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
