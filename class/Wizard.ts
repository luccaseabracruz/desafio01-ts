import { DioAccount } from "./DioAccount";

export class	WizardAccount extends DioAccount{

	constructor(name: string, accountNumber: number)
	{
		super(name, accountNumber)
	}

	deposit = (ammount: number): void => {
		let newAmmount: number = ammount + 10;
		if (this.validateStatus() && newAmmount > 0)
		{
			this.setBalance(this.getBalance() + newAmmount)
			console.log('Voce depositou R$', newAmmount, '; saldo atual: R$', this.getBalance())
		}
	}
}