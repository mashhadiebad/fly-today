import FilterBox from "./components/FilterBox/FilterBox";
import List from "./components/List/List";
import ListTitle from "./components/ListTitle/ListTitle";
import SearchSection from "./components/SearchSection/SearchSection";
import Sort from "./components/Sort/Sort";
import style from "./HomePage.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <SearchSection />
      <div className={style.mobileDesign}>
        <div className={style.mobileDesign__filtersContainer}>
          <FilterBox />
          <Sort />
        </div>
        <ListTitle flightResultsCount={23} />
        <List />
      </div>
      <div className={style.desktopDesign}>
        <aside>
          <FilterBox />
        </aside>
        <main style={{ width: "894px" }}>
          <div className="flex w-100 items-end justify-between pb-4">
            <ListTitle flightResultsCount={23} />
            <Sort />
          </div>
          <List />
        </main>
      </div>
    </div>
  );
}
