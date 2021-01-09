function createAccount(pin, amount = 0) {
  return {
    checkBalance: function (pinEntry) {
      if (pinEntry != pin) {
        return "Invalid PIN.";
      } else {
        return `$${amount}`;
      }
    },
    deposit: function (pinEntry, depositAmount) {
      if (pinEntry != pin) {
        return "Invalid PIN.";
      } else {
        amount = Number(amount) + Number(depositAmount);
        return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`;
      }
    },
    withdraw: function (pinEntry, withdrawalAmount) {
      if (pinEntry != pin) {
        return "Invalid PIN.";
      } else if (withdrawalAmount <= amount) {
        amount = Number(amount) - Number(withdrawalAmount);
        return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
      } else {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
    },
    changePin: function (pinEntry, newPin) {
      if (pinEntry != pin) {
        return "Invalid PIN.";
      } else {
        pin = newPin;
        return "PIN successfully changed!";
      }
    },
  };
}

module.exports = { createAccount };
