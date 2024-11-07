class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    getSalary(){
        return this.salary;
    }

    display(){
        console.log(`Employee: ${this.name}, salary: ${this.salary}`);
    }
}

module.exports = Employee;