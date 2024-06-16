import "./BackwardsButton.styles.css";

const BackwardsButton = ({ id, setId }) => {
  const decreaseValue = () => {
    if (id - 1 === 0) {
      setId(1025);
    } else {
      setId((id) => id - 1);
    }
  };

  return (
    <button className="backwards" onClick={decreaseValue}>
      Backwards
    </button>
  );
};

export default BackwardsButton;

//Limite to pokemon id: 1 - 1025
