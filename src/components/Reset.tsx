interface Props {
  onClick: () => void;
}

function Reset({ onClick }: Props) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button className={"btn btn-danger"} onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
