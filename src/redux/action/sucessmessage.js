import { useHistory } from "react-router-dom";
// ...

const Checkout = () => {
  const history = useHistory();
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);

  // ...

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Comprar</h1>
        <hr />
        {state.length ? <ShowCheckout setShowSuccessMessage={setShowSuccessMessage} /> : <EmptyCart />}
      </div>
      <Footer />
      {showSuccessMessage && <SuccessMessage onClose={() => setShowSuccessMessage(false)} />}
    </>
  );
};

const SuccessMessage = ({ onClose }) => {
    return (
      <div className="container my-3 py-3">
        <div className="alert alert-success" role="alert">
          Compra realizada com sucesso!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
    );
  };

  const ShowCheckout = ({ setShowSuccessMessage }) => {
    // ...
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      setShowSuccessMessage(true);
    };
  
    return (
      // ...
  
        <form className="needs-validation" novalidate onSubmit={handleSubmit}>
          // ...
  
          <button className="w-100 btn btn-primary " type="submit">
            Continue
          </button>
        </form>
  
      // ...
    );
  };