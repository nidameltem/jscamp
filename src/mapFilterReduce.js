let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
<<<<<<< HEAD

cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>")
})

console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice*product.quantity,0)
=======
cart.map(product=>{
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

//23.00 Dersteyiz
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
console.log(total)


let quantityOver2 = cart.filter(product=>product.quantity>2)
<<<<<<< HEAD
console.log(quantityOver2)

=======

console.log(quantityOver2)
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}
<<<<<<< HEAD
addToCart(cart)
console.log(cart)

let sayi=10

function sayiTopla(number) {
    number +=1
=======



addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
}
sayiTopla(sayi)
console.log(sayi)

<<<<<<< HEAD


=======
//23.00 Dersteyiz
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
