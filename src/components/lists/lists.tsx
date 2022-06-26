import List from "./list";

const Lists = () => {
  const items: string[] = ["Tanvir", "Hossain"];
  const onClick = (text: string): void => alert(text);
  return (
    <div>
      <List items={items} onClick={onClick} />
    </div>
  );
};

export default Lists;
