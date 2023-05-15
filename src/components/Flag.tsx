//Try using useContext to fetch the time data
interface Props {
  onClick: () => void;
}

function Flag({ onClick }: Props) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button className={"btn btn-warning"} onClick={onClick}>
        Flag
      </button>
    </div>
  );
}

export default Flag;
