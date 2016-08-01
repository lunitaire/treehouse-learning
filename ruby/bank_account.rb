# Treehouse Bank Account Project
class BankAccount
  def initialize(name)
    @name = name
    @transactions = []
  end
end


bank_account = BankAccount.new("Jason")
put bank_account.inspect
