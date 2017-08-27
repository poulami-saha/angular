module app.productList{
interface IProductListModule{
    title: string,
    showImage: boolean,
    products:app.domain.IProduct[];
    toggleImage():void;
}

class ProductListCtrl implements IProductListModule{
    title: string;
    showImage: boolean;
    products:app.domain.IProduct[];
    toggleImage(): void
    {
        this.showImage = !this.showImage;
    }
    static $inject=["dataAccessService"];
    constructor(private dataAccessService: app.common.DataAccessService){
        
        this.title="Product List";
        this.showImage=true;
        this.products = []

        var productResource=dataAccessService.getProductResource();
        productResource.query((data: app.domain.IProduct[])=> {
            this.products=data;
        });
                   

   /* var newProduct= new app.domain.Product(
        3,"Saw","TBX-002",
        new Date(2002,3,1),
        16.95,"15 inch steel blade hand saw",
        "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
        newProduct.price=newProduct.calculateDiscount(10);
        this.products.push(newProduct);*/
    }
}

angular
.module("productManagement")
.controller("ProductListCtrl",ProductListCtrl);
}