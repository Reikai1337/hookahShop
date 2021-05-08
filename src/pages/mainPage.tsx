import FilterTab from "../components/mainPage/filterTab/FilterTab"
import GoodsList from "../components/mainPage/goodsList/GoodsList"


const MainPage: React.FC = () => {
    return (
        <div>
            <FilterTab />
            <GoodsList />
        </div>
    )
}

export default MainPage