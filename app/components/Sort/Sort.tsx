"use client";
import style from "./Sort.module.scss";
import { ChangeEvent, useState, useEffect } from "react";
import { CgSortAz } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { sortActions } from "@/store/store";
import { useAppSelector } from "@/store/store";

const Sort = () => {
  const dispatch = useDispatch();
  const sortTypeName = useAppSelector((state) => state.sort.sortType);
  const [isSortVisible, setIsSortVisible] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>(sortTypeName);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value);
  };

  useEffect(() => {
    dispatch(sortActions.setSortType(sortType));
  }, [sortType]);

  return (
    <div className="relative">
      <div
        className={style.mobileDesign__sortButton}
        onClick={() => setIsSortVisible(!isSortVisible)}
      >
        <CgSortAz style={{ marginLeft: "8px", fontSize: "20px" }} />
        <p>مرتب سازی</p>
      </div>
      <div
        className={style.mobileDesign__sortBox}
        style={isSortVisible ? { display: "block" } : { display: "none" }}
      >
        <div className={style.mobileDesign__sortContent}>
          <div
            className="form-control cursor-pointer"
            onClick={() => setSortType("totalFare")}
          >
            <label className="label cursor-pointer">
              <span className={`label-text ${style.mobileDesign__sortContent}`}>
                قیمت
              </span>
              <input
                value="totalFare"
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked={sortType === "totalFare"}
              />
            </label>
          </div>
          <div
            className="form-control cursor-pointer"
            onClick={() => setSortType("journeyDuration")}
          >
            <label className="label cursor-pointer">
              <span className="label-text text-right">زمان پرواز</span>
              <input
                value="journeyDuration"
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
                checked={sortType === "journeyDuration"}
              />
            </label>
          </div>
        </div>
      </div>
      <div className={style.desktopDesign__sortContainer}>
        <div className={style.desktopDesign__sortTitle}>مرتب سازی:</div>
        <select
          className={`select select-bordered w-full max-w-xs ${style.desktopDesign__sortDropdown}`}
          onChange={handleSelectChange}
        >
          <option value="totalFare">قیمت</option>
          <option value="journeyDuration">زمان پرواز</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
