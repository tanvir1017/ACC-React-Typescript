import { listType } from "../type/Types";

const List = ({ items, onClick }: listType) => {
  return (
    <div>
      {items.map((item, index) => (
        <li
          style={{ listStyle: "none" }}
          key={index}
          onClick={() => onClick(item)}
        >
          {index} {item}
        </li>
      ))}
    </div>
  );
};

export default List;
