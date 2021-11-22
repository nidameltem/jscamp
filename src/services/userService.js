import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

<<<<<<< HEAD
export default class UserService{

    constructor(loggerService){
        this.employees=[]
        this.customers=[]
        this.errors=[]
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.checkCustomerValidityForErrors(user)){
                        this.customers.push(user)

                    }
                   
                    break;
                case "employee":
                    if(!this.checkEmployeeValidityForErrors(user)){
                        this.employees.push(user)

                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type",user))
=======
export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
                    break;
            }
        }
    }

<<<<<<< HEAD
    checkCustomerValidityForErrors(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`,user))
            }
            
        }

        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`,user))
        }



        return hasErrors;
    
    }

    checkEmployeeValidityForErrors(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors=true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`,user))
            }
            
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            hasErrors=true
            this.errors.push(new DataError(`Validation Problem. ${user.age} is not a number`,user))
        }

        return hasErrors;
    }


    add(user){
        switch (user.type) {
            case "customer":

                if(!this.checkCustomerValidityForErrors(user)){
                    this.customers.push(user)

                }
                break;
            case "employee":
                if(!this.checkEmployeeValidityForErrors(user)){
                    this.employees.push(user)

                }
                break;
        
            default:
                this.errors.push(
                    new DataError("This user can not be added.Wrong user type",user))
=======
    //formik-yup
    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }

        return hasErrors
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(
                    new DataError(`Validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(
                    new DataError("This user can not be added. Wrong user type", user))
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
                break;
        }
        this.loggerService.log(user)
    }

<<<<<<< HEAD
    listCustomers(){
        return this.customers
    }

    getCustomerById(id){
        return this.customers.find(u=>u.id===id)
    
=======
    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u=>u.id ===id)
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
    }

    getCustomersSorted(){
        return this.customers.sort((customer1,customer2)=>{
            if(customer1.firstName>customer2.firstName){
                return 1;
            }else if(customer1.firstName===customer2.firstName){
                return 0;
            }else{
<<<<<<< HEAD
                return -1;
=======
                return -1
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
            }
        })
    }

<<<<<<< HEAD




=======
>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
}