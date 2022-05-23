import React from "react";
import PaymentCard from "../../../../components/paymentCard";
import SecureConnection from "../../../../components/secure_connection";

const UpiInputField = () => {
    return (
        <PaymentCard>
            <h4>In order to complete your transaction, we will transfer you over to Adyen’s secure servers.</h4>
            <SecureConnection />
        </PaymentCard>
    )
}

export default UpiInputField