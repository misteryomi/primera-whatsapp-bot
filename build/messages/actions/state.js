"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stateAction = require("../../actions/stateAction");

var _default = [{
  action: "oracle_number",
  message: 'You selected the *State* option: \n\n Kindly input your Oracle number:',
  feedback_type: 'input',
  actionService: _stateAction.initialize,
  next_action: "net_pay"
}, {
  action: "net_pay",
  message: "What is your average monthly net pay?",
  feedback_type: 'input',
  actionService: _stateAction.saveOracleNumber,
  previous_action: "oracle_number",
  next_action: "loan_amount"
}, {
  action: "loan_amount",
  message: "How much do you need as loan?",
  feedback_type: 'input',
  actionService: _stateAction.saveUserNetPay,
  previous_action: "net_pay",
  next_action: "loan_tenor"
}, {
  action: "loan_tenor",
  message: "Loan tenor (maximum tenor is 18 months)",
  feedback_type: 'input',
  actionService: _stateAction.checkUserLoanAmount,
  previous_action: "loan_amount",
  next_action: "full_name"
}, {
  action: "full_name",
  message: "Kindly confirm your name and surname:",
  feedback_type: 'input',
  actionService: _stateAction.saveLoanTenor,
  previous_action: "loan_tenor",
  next_action: "close_session"
}, {
  action: "close_session",
  actionService: _stateAction.saveFullName,
  previous_action: "full_name",
  message: "Thank you for reaching out. \n\n One of our relationship officers will get in touch with you shortly. Do have a great day!"
}, {
  action: "close_session_success",
  message: "Thank you for reaching out. \n\nOne of our relationship officers will get in touch with you shortly. Kindly have the following available: \nPayslip \nProof of ID ( National ID card/Drivers License/International Passport) \nBVN details \nPassport photograph. \n\nThank You.\n\nDo have a great day!"
}];
exports.default = _default;
//# sourceMappingURL=state.js.map