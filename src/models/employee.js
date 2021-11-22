import User from "./user.js"

export default class Employee extends User{
<<<<<<< HEAD
    constructor(id,firstName,lastName,city,age,salary){
        super(id,firstName,lastName,city,age)
        this.salary=salary
=======
    constructor(id, firstName, lastName, city,age, salary) {
        super(id, firstName, lastName, city,age)
        this.salary = salary
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }
}