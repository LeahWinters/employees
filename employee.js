class Employee {
  constructor(name) {
    this.name = name;
    this.personality = "helpful";
    this.monthsOfEmployment = 0;
    if (this.name.length < 6){
      this.onCall = true;
    } else {
      this.onCall = false;
    }
  }

  work() {
    this.monthsOfEmployment = this.monthsOfEmployment + 4;
    if (this.monthsOfEmployment < 6) {
      this.onboarding = true;
    } else {
      this.onboarding = false;
    }
  }

}



module.exports = Employee
