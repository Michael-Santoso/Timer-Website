import { useEffect, useState } from "react";

interface Props {
  immutableSeconds: number;
}

function ListFlag({ immutableSeconds }: Props) {
  const [flagarr, setFlagarr] = useState<number[]>([]);

  useEffect(() => {
    if (flagarr.length === 0) {
      setFlagarr([immutableSeconds]);
    } else {
      setFlagarr((prevFlagarr) => [...prevFlagarr, immutableSeconds]);
    }
  }, [immutableSeconds]);

  if (!immutableSeconds) {
    return null;
  }

  return (
    <>
      <ul className="list-group">
        {flagarr.map((item, num) => (
          <li className={"list-group-item"} key={item}>
            {"Flag " + (num + 1) + ": " + item.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListFlag;
