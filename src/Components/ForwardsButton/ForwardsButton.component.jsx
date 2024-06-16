import "./ForwardsButton.styles.css";

const ForwardsButton = ({ id, setId }) => {
  const increaseIdValue = () => {
    if (id + 1 > 1025) {
      setId(1);
    } else {
      setId((id) => id + 1);
    }
  };

  return (
    <button className="forwards" onClick={increaseIdValue}>
      Forwards
    </button>
  );
};

export default ForwardsButton;

//Limite to pokemon id: 1 - 1025
