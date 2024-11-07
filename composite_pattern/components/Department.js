class Department{
    constructor(name){
        this.name = name;
        this.subComponentes = [];
    }
    add(component){
        this.subComponentes.push(component);
    }

    remove(component){
        const index = this.subComponentes.indexOf(component);
        if(index !== 1){
            this.subComponentes.splice(index, 1);
        }
    }

    getSalary(){
        return this.subComponentes.reduce((total, component) => total + component.getSalary(), 0);
    }

    display(){
        console.log(`Department: ${this.name}`);
        this.subComponentes.forEach(component => component.display());
    }
}

module.exports = Department;