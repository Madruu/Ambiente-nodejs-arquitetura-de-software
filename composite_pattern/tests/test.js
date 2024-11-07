const Employee = require('../components/Employee');
const Department = require('../components/Department');
const Organization = require('../components/Organization');

// Criando os componentes para o teste
const emp1 = new Employee('Alice', 5000);
const emp2 = new Employee('Bob', 7000);
const emp3 = new Employee('Charlie', 6000);

const salesDept = new Department('Sales');
salesDept.add(emp1);
salesDept.add(emp2);

const techDept = new Department('Tech');
techDept.add(emp3);

const headOffice = new Department('Head Office');
headOffice.add(salesDept);
headOffice.add(techDept);

const organization = new Organization(headOffice);

// Testando a estrutura
console.log("Estrutura da Organização:");
organization.displayStructure();

// Testando o cálculo do salário total
console.log("Salário Total:", organization.getTotalSalary()); // Esperado: 18000
