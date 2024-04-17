export class Employee {
    constructor(name, salary, code, gender) {
      this.name = name;
      this.salary = salary;
      this.code = code ?? Employee.generateCode();
      this.gender = gender ?? "-";
    }

    static generateCode() {
      return 'EMP' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    }
  }
