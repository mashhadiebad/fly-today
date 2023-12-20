import FilterBox from "./components/FilterBox/FilterBox";
import List from "./components/List/List";
import SearchSection from "./components/SearchSection/SearchSection";
import Sort from "./components/Sort/Sort";
import style from "./Home.module.scss";

export default function Home() {
  return (
    <div className={style.container}>
      <SearchSection />
      <div>
        <aside>
          <FilterBox />
        </aside>
        <main>
          <div>
            <Sort />
            <p>title</p>
          </div>
          <List />
        </main>
      </div>
    </div>
  );
}
