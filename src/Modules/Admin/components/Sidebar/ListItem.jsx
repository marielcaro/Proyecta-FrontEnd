import classnames from "classnames";
import style from "./sidebar.module.css";

export const ListItem = ({ item, selected }) => {
  const { Icon, txt } = item;
  return (
    <li
      className={classnames(style["list-item"], { [style.selected]: selected })}
    >
      <img src={Icon} alt="dashboard" /> {txt}
    </li>
  );
};

export default ListItem;
