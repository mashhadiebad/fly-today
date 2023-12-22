import style from "./ListTitle.module.scss";

interface Props {
  flightResultsCount: number;
}

const ListTitle = ({ flightResultsCount = 27 }: Props) => {
  return (
    <div className={style.container}>
      <h2 className={style.container__title}>
        بلیط هوایپمای تهران به استانبول
      </h2>
      <div className={style.container__description}>
        <h3>{flightResultsCount} پرواز یافت شد. </h3>
        <h3>سه شنبه، 12 اردیبهشت 1400</h3>
      </div>
    </div>
  );
};

export default ListTitle;
