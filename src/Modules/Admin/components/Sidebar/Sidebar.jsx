import style from "./sidebar.module.css";
import { items } from './items'

import { ListItem } from './ListItem'

export const Sidebar = () => {
  // Aqui nos vamos a traer la ruta actual en la que esta el usuario, si esta en www.pagina.com/reportes entonces mostramos REPORTES
  const selected = "/tablero";
  return (
    <div className={style.cajablanca}>
      <div className="col tipografia">
        <ul>
          {items.map((item, index) => (
            <ListItem
              item={item}
              key={index}
              selected={selected === item.path}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
