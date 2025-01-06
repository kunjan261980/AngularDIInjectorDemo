"use strict";
class UserService {
    sayHi() {
        console.log("hi");
    }
}
class Component {
    constructor(user) {
        this.user = user;
    }
}
//Angular DI Mechanism
class Injector {
    constructor(_provider = []) {
        this._provider = _provider;
        this._container = new Map();
        this._provider.forEach(service => this._container.set(service, new service()));
    }
    get(service) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw new Error("No Service Provider Found");
        }
        return serviceInstance;
    }
}
///Inside Application
const injector = new Injector([UserService]);
const component = new Component(injector.get(UserService));
component.user.sayHi();
