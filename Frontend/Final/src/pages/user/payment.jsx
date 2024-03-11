import { useState } from "react";
import '../../assets/css/pay.css';
import PersistentDrawerLeft from "../../components/Drawer";

const Pay = () => {
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (amount > 10) {
            const options = {
                key: 'rzp_test_QgfxOPQMxK3qw1',
                key_secret: 'pLzPEAXckx3B5BPRtOvQX4Qa',
                amount: amount * 100,
                currency: "INR",
                name: 'PURPLE FOX',
                handler: (res) => {
                    alert(res.razorpay_payment_id)
                },
                prefill: {
                    name: 'Fox',
                    email: 'lascreamink@gmail.com',
                    contact: '9342806013'
                },
                notes: {
                    address: " office",
                },
                theme: {
                    color: '#f5f5f7'
                }
            };
            const pay = new window.Razorpay(options);
            pay.open();
        } else {
            alert("Invalid amount. Please enter an amount greater than 1000");
        }
    }

    return (
        <div className="payment-container">
            <PersistentDrawerLeft/>
            <h1 className="payment-header">Make your Payment</h1>
            <form onSubmit={handleSubmit}>
                <label className="amount-label">Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="amount-input"
                />
                <button type="submit" className="pay-button">
                    Pay Now
                </button>
            </form>
        </div>
    );
}

export default Pay;