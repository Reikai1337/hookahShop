import { Route } from "react-router";
import FilterTab from "../components/mainPage/filterTab/FilterTab";
import GoodsList from "../components/mainPage/goodsList/GoodsList";

const MainPage: React.FC = () => {
  return (
    <div>
      <FilterTab />
      <Route exact path="/:product" component={GoodsList} />
      <Route exact path="/hookah/karma" render={() => <Karma />} />
    </div>
  );
};
const Karma: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "40rem", backgroundColor: "red" }}>
      Karma
    </div>
  );
};

export default MainPage;
