import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const getPost = () => {
    return async (_dispatch) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      _dispatch({ type: "FETCH_DATA", payload: data });
    };
  };
  useEffect(() => {
    dispatch(getPost());
  }, []);
  const dispatch = useDispatch();
  const list = useSelector((state) => state);
  const [page, setPage] = useState(1);
  console.log(list, "list");
  return (
    <div className="App">
      <table border="1px">
        <th>Serial No.</th>
        <th>Title</th>
        <th>Details</th>
        <th>Action</th>
        {list.slice(page * 10 - 10, page * 10).map((element) => {
          return (
            <tr key={element.id}>
              <td style={{ backgroundColor: "black" }}>{element.id}</td>
              <td>{element.title.slice(0, 11)}</td>
              <td>{element.body.slice(0, 51)}</td>
              <td
                style={{ cursor: "pointer", backgroundColor: "black" }}
                title={element.title.slice(0, 11)}
              >
                {"👁️‍🗨️"}
              </td>
            </tr>
          );
        })}
      </table>

      {/* pagination */}
      <div>
        <span
          onClick={() => setPage(page === 1 ? 10 : page - 1)}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          {"⬅️"}
        </span>
        <span
          onClick={() => setPage(page === 10 ? 1 : page + 1)}
          style={{ fontSize: "2rem", cursor: "pointer" }}
        >
          {"➡️"}
        </span>
      </div>
      <p>&copy;Ashar_2023</p>
    </div>
  );
}
