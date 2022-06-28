import List from "./list";

const Lists = () => {
  const data = ["Rakib", "Tanvir", "UK proloy", "Abu jakariya"];
  const onClick = (text: string): void => alert(text);
  return (
    <div>
      <List items={data} onClick={onClick} />
    </div>
  );
};

export default Lists;
