import {
  Card,
  CardContent,
  Fab,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import AddIcon from "@material-ui/icons/Add";
import { theme } from "../../../../theme/theme";
import hookah from "./../../../../assets/images/testHookah.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: theme.spacing(3),
  },
  goodsMedia: {
    height: "320px",
    width: "305px",
  },
  goodsTitle: {
    fontWeight: "bolder",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hookahVariability: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  goodsVariability: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
  },
});

const GoodsTile: React.FC = () => {
  const classes = useStyles();
  const [category, setCategory] = useState("hookah");

  return (
    <div className={classes.root}>
      <Grid item>
        <Card>
          <NavLink to='hookah/karma'>
            <img src={hookah} className={classes.goodsMedia} alt="goods" />
          </NavLink>
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              align="center"
              className={classes.goodsTitle}
            >
              Karma Hookah
            </Typography>
            <div className={classes.goodsVariability}>
              {category === "hookah" ? (
                <div className={classes.hookahVariability}>
                  <ToggleButtonGroup size="medium">
                    <ToggleButton value="WithoutFlask">Без колбы</ToggleButton>
                    <ToggleButton value="withFlask">С колбой</ToggleButton>
                  </ToggleButtonGroup>
                  <ToggleButtonGroup size="medium">
                    <ToggleButton value="WithoutFlask">Шланг</ToggleButton>
                    <ToggleButton value="withFlask">Мундштуки</ToggleButton>
                    <ToggleButton value="withFlask">Чаша</ToggleButton>
                  </ToggleButtonGroup>
                </div>
              ) : (
                <ToggleButtonGroup size="medium">
                  <ToggleButton value="10">10</ToggleButton>
                  <ToggleButton value="20">20</ToggleButton>
                  <ToggleButton value="30">30</ToggleButton>
                </ToggleButtonGroup>
              )}
            </div>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4">от 120$</Typography>
              </Grid>
              <Grid item>
                <Fab color="primary" variant="extended">
                  <AddIcon />
                  Добавить
                </Fab>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default GoodsTile;
