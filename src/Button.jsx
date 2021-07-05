const Button = (props) => {
  console.log(props.sayan);
  return (
    <button style={{ height: props.width, width: props.height }}>
      {props.text}
    </button>
  );
};

export default Button;
