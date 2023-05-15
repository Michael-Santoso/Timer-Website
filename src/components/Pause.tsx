interface Props {
  onClick: () => void;
}

const Pause = ({ onClick }: Props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button className={"btn btn-primary"} onClick={onClick}>
        Pause
      </button>
    </div>
  );
};

export default Pause;
