function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.showBasket = function()
{
        this.products.forEach(element => {
            console.log(element);
        });
        console.log(this.sum);
}

Basket.prototype.addProduct = function(name,price)
{
        this.products.push(name);
        this.sum += price
}

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();