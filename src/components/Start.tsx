interface Props {
  onClick: () => void;
}

const Start = ({ onClick }: Props) => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button className={"btn btn-primary"} onClick={onClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
