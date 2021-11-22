import User from "./user.js"

export default class Customer extends User{
<<<<<<< HEAD
    constructor(id,firstName,lastName,city,age,creditCardNumber){
        super(id,firstName,lastName,city,age)
        this.creditCardNumber=creditCardNumber
=======
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName, lastName, city,age)
        this.creditCardNumber = creditCardNumber
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }
}