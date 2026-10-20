import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { WizardAccount } from './class/Wizard'

console.log(">>> Test PeopleAccount")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(1000)
peopleAccount.withdraw(100)
console.log(peopleAccount)

console.log(">>> Test CompanyAccount")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)
companyAccount.withdraw(50)
console.log(companyAccount)
companyAccount.getLoan(50)
console.log(companyAccount)

console.log(">>> Test WizardAccount")
const wizardAccount: WizardAccount = new WizardAccount('Gandalf', 30)
wizardAccount.deposit(100)
console.log(wizardAccount)
wizardAccount.withdraw(50)
console.log(wizardAccount)