document.addEventListener('DOMContentLoaded', (event) => {
    var ClassElement = document.getElementsByClassName("first")[0];
    var ClassElementFirstChild = ClassElement.children[0];
    var ClassElementThirdChild = ClassElementFirstChild.children[2];
    console.log(ClassElementThirdChild)

    var IdElement = document.getElementById("second");
    var IdElementParent = IdElement.parentElement;
    var IdElementForthCild = IdElementParent.children[3];
    console.log(IdElementForthCild)

    var AttributeElement = document.querySelector("[data-ex='third']");
    var AttributeElementGrandfather = AttributeElement.parentElement.parentElement;
    var AttributeElementLastChild = AttributeElementGrandfather.children[AttributeElementGrandfather.children.length-1];
    var AttributeElementFirstChild = AttributeElementLastChild.children[0];
    var AttributeElementMiddleChild = AttributeElementFirstChild.children[Math.floor(AttributeElementFirstChild.children.length/2)];
    console.log(AttributeElementMiddleChild)

    var DivElement = document.querySelector("[class='forth']");
    var DivElementParent = DivElement.parentElement;
    var DivElementFirstChild = DivElementParent.getElementsByTagName("article")[0];
    var DivElementSecondChild = DivElementFirstChild.getElementsByTagName("p")[1];
    console.log(DivElementSecondChild)
});
