export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (ammount: number): void => {
    this.balance = ammount
  }

  getBalance(): number {
	return (this.balance);
  }

  getName = (): string => {
    return this.name
  }

  deposit (ammount: number): void {
    if(this.validateStatus() && ammount > 0){
      this.balance += ammount
      console.log('Voce depositou R$', ammount, '; saldo atual: R$', this.balance)
    }
	else
		throw Error("Não é possível realizar o depósito")
  }

  withdraw(ammount: number): void {
	if (this.validateStatus()
		&& ammount > 0
		&& this.balance > ammount
	){
      this.balance -= ammount
      console.log('Voce sacou R$', ammount, '; saldo atual: R$', this.balance)
	}
	else
		throw Error("Não é possível realizar o saque")
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
