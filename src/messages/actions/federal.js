import federal from "../messageTexts/federal";
import { initialize, saveIppisNumber, checkUserLoanAmount, saveUserNetPay, saveLoanTenor, saveFullName } from "../../actions/federalAction";

export default [
    {
        action: "ippis_number",
        message: 'You selected the *Federal* option: \n\n Kindly input your IPPIS number:',
        feedback_type: 'input', // 'options',
        actionService: initialize,
        // feedback: [
        //     {
        //         input: "no",
        //         next_action: "no_ippis",
        //     },
        //     {
        //         input: "yes",
        //         next_action: "ippis",
        //     },
        // ],
        next_action: "net_pay" 
    },
    // {
    //     action: "ippis",
    //     message: "Kindly input your IPPIS number",
    //     feedback_type: 'input',
    //     actionService: 'saveUserIppis()',
    //     next_action: "net_pay" 
    // },
    // {
    //     action: "no_ippis",
    //     message: "Kindly avail us your name and email address. One of our customer service agents will get in touch with you shortly.",
    //     feedback_type: 'input',
    //     actionService: 'saveUserNameEmail()',
    //     next_action: "close_session"
    // },
    {
        action: "net_pay",
        message: "What is your average monthly net pay?",
        feedback_type: 'input',
        actionService: saveIppisNumber,
        previous_action: "ippis_number",
        next_action: "loan_amount"
    },
    {
        action: "loan_amount",
        message: "How much do you need as loan?",
        feedback_type: 'input',
        actionService: saveUserNetPay,
        previous_action: "net_pay",
        next_action: "loan_tenor"
    },
    {
        action: "loan_tenor",
        message: "Loan tenor (maximum tenor is 18 months)",
        feedback_type: 'input',
        actionService: checkUserLoanAmount,
        previous_action: "loan_amount",
        next_action: "full_name"
    },        
    {
        action: "full_name",
        message: "Kindly confirm your name and surname:",
        feedback_type: 'input',
        actionService: saveLoanTenor,
        previous_action: "loan_tenor",
        next_action: "close_session"
    },        
    {
        action: "close_session",
        actionService: saveFullName,
        previous_action: "full_name",
        message: "Thank you for reaching out. \n\nOne of our relationship officers will get in touch with you shortly. \n\nDo have a great day!",
    }
]