import Menu from "./Menu";

const Template = ({ children }) => {
  return (
    <div className="flex m-1 divide-x divide-purple-500">
      <Menu />
      <div className="px-3 overflow-x-auto flex-1">{children}</div>
    </div>
  );
};

export default Template;
