
import db from '../db';

export const initializeRequest = (phone_no, oracle_number, session_hash) => {

    let query = "INSERT into `private_requests` (phone_no, oracle_number, session_hash) VALUES ('" + phone_no + "', '" + oracle_number + "', '"+session_hash+"')";

    db.query(query, (err, res) => {
        console.log({err, res})
        // if(err) res.status(500).send(err);

        // res.status(200);

        if(err) {
            console.log(err);
            return false;
        };

        return true;        
    })    
}

export const updateRecord = (phone_no, field, value, session_hash) => {

    let query = "UPDATE `private_requests` SET `"+ field +"` = '"+ value+"', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' AND session_hash = '" + session_hash + "'";

    db.query(query, (err, res) => {
        // console.log({err, res})
        if(err) {
            console.log(err);
            return false;
        };

        return true;
    })    
}

