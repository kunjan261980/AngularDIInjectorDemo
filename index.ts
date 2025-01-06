class UserService{
    sayHi()
    {
        console.log("hi")
    }
}
class Component{
    constructor(public user:UserService){}
}

//Angular DI Mechanism
class Injector{
    private _container = new Map()

    constructor(private _provider: any[] = [])
    {
     this._provider.forEach(service=> this._container.set(service, new service()))
    }

    get(service: any)
    {
        const serviceInstance = this._container.get(service)
        if(!serviceInstance)
        {
           throw new Error("No Service Provider Found");
            
        }
        return serviceInstance;
    }
}

///Inside Application

const injector = new Injector([UserService])
const component = new Component(injector.get(UserService))
component.user.sayHi()
