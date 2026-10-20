import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (ammount: number): void => {
	if (this.validateStatus() && ammount > 0){
		this.setBalance(this.getBalance() + ammount)
		console.log('Voce pegou um empréstimo de R$', ammount, "; saldo atual: ", this.getBalance())
	}
  }
}
