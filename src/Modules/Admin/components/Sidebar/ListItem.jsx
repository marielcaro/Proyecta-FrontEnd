import classnames from "classnames";/* Se instalo una libreria llama classnames */
import style from "./sidebar.module.css";

export const ListItem = ({ item, selected, setSelected }) => {
  const { Icon, txt, path } = item;
  return (
    <li
      onClick= {() => setSelected(path)}
      className={classnames(style["list-item"], { [style.selected]: selected })}
    >
      <img src={Icon} alt="dashboard" className={classnames({[style.selectedicon]: selected})} /> {txt}
    </li>
  );
};

export default ListItem;
