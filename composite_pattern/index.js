const Employee = require('./components/Employee')
const Department = require('./components/Department')
const Organization = require('./components/Organization')


//Creating employees
const employeeNo1 = new Employee('Vitor', 500)
const employeeNo2 = new Employee('João', 1000)
const employeeNo3 = new Employee('Pedro', 3000)
const employeeNo4 = new Employee('Maria', 2000)

//Creating departments
const departmentNo1 = new Department('Financas')
departmentNo1.add(employeeNo1)
departmentNo1.add(employeeNo2)

const departmentNo2 = new Department('RH')
departmentNo2.add(employeeNo3)
departmentNo2.add(employeeNo4)

const headQuarters = new Department('Head Quarters')
headQuarters.add(departmentNo1)
headQuarters.add(departmentNo2)

const organization = new Organization(headQuarters)

organization.displayStructure();

console.log('Salário total da organização:', organization.getTotalSalary());