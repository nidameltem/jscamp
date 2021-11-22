export class BaseLogger{
    log(data){
<<<<<<< HEAD
        console.log("Default Logger : " + data)
    }
}
=======
        console.log("Default logger : " + data)
    }
}

>>>>>>> a43e44921b7b8fd604082da01c1ad0c62c22c911
export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}

