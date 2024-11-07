class Organization{
    constructor(rootComponent){
        this.rootComponent = rootComponent;
    }

    getTotalSalary(){
        return this.rootComponent.getSalary();
    }

    displayStructure(){
        this.rootComponent.display();
    }
}

module.exports = Organization;