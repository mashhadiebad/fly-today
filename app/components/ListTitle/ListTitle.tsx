"use client";
import style from "./ListTitle.module.scss";
import { useAppSelector } from "@/store/store";

const ListTitle = () => {
  const listLength = useAppSelector((state) => state.filter.listLength);

  return (
    <div className={style.container}>
      <h2 className={style.container__title}>
        بلیط هوایپمای تهران به استانبول
      </h2>
      <div className={style.container__description}>
        <h3>{listLength} پرواز یافت شد. </h3>
        <h3>سه شنبه، 12 اردیبهشت 1400</h3>
      </div>
    </div>
  );
};

export default ListTitle;
