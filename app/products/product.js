var app;
(function (app) {
    var domain;
    (function (domain) {
        class Product {
            constructor(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            calculateDiscount(percent) {
                return this.price = (this.price * percent / 100);
            }
        }
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
