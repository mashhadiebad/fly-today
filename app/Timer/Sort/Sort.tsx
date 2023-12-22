"use client";
import style from "./Sort.module.scss";
import { useState } from "react";
import { CgSortAz } from "react-icons/cg";

const Sort = () => {
  const [isSortVisible, setIsSortVisible] = useState<boolean>(false);

  return (
    <div className="relative">
      <div
        className={style.mobileDesign__sortButton}
        onClick={() => setIsSortVisible(!isSortVisible)}
      >
        <CgSortAz style={{ marginLeft: "8px", fontSize: "20px" }} />
        <p>مرتب سازی</p>
      </div>
      {isSortVisible && (
        <div className={style.mobileDesign__sortBox}>
          <div className={style.mobileDesign__sortContent}>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span
                  className={`label-text ${style.mobileDesign__sortContent}`}
                >
                  قیمت
                </span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text text-right">زمان پرواز</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked
                />
              </label>
            </div>
          </div>
        </div>
      )}
      <div className={style.desktopDesign__sortContainer}>
        <div className={style.desktopDesign__sortTitle}>مرتب سازی:</div>
        <select
          className={`select select-bordered w-full max-w-xs ${style.desktopDesign__sortDropdown}`}
        >
          <option>قیمت</option>
          <option>زمان پرواز</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
