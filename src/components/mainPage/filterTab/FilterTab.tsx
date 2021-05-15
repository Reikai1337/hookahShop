import {
  Button,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { theme } from "../../../theme/theme";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
  },
  buttonGroup: {
    "& Button": {
      background: "#f5f5f5",
      color: "#2C2C2C",
      textTransform: "none",
      borderRadius: "25px",
      fontSize: "1rem",
      marginRight: theme.spacing(2),
      padding: "10px 30px",
    },
    flexGrow: 1,
  },
});

const FilterTab: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.buttonGroup}>
        <NavLink to="/all">
          <Button size="large">Все</Button>
        </NavLink>
        <NavLink to="/hookah">
          <Button size="large">Кальяны</Button>
        </NavLink>
        <NavLink to="/tobacco">
          <Button size="large">Табак</Button>
        </NavLink>
        <NavLink to="/coals">
          <Button size="large">Угли</Button>
        </NavLink>
        <NavLink to="/bowls">
          <Button size="large">Чаши</Button>
        </NavLink>
        <NavLink to="/accessories">
          <Button size="large">Аксессуары</Button>
        </NavLink>
      </div>
      <div>
        <InputLabel htmlFor="categorySelect">Сортировать по</InputLabel>
        <Select id="categorySelect" defaultValue="popularity">
          <MenuItem value="popularity">популярности</MenuItem>
          <MenuItem value="price">цене</MenuItem>
          <MenuItem value="alphabet">алфавиту</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default FilterTab;
