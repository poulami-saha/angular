var app;
(function (app) {
    var common;
    (function (common) {
        class DataAccessService {
            constructor($resource) {
                this.$resource = $resource;
            }
            getProductResource() {
                return this.$resource("/api/products/:productId");
            }
        }
        DataAccessService.$inject = ["$resource"];
        common.DataAccessService = DataAccessService;
        angular.module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
