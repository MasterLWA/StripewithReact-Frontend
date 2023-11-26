import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  const handlePayment = async (totalamount, token) => {
    try {
      await Axios.post("", {
        amount: totalamount,
        token: token
      });

      // Handle success, e.g., show a success message
      console.log('Payment successful');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Payment failed', error);
    }
  };

  const tokenHandler = (token) => {
    handlePayment(100, token);
  };

  return (
    <div className="App">
      <StripeCheckout
        stripeKey="pk_test_51Nx3yOA8gNe3rMMI96d40bqs9bBWx286ZonaRe7uZnPmuvyRuM5I3oxS8b7zQfBgQRdjjP0M7MIUi5doM3K6IQrP00vtMnem4u"
        token={tokenHandler}
      />
    </div>
  );
}

export default App;

