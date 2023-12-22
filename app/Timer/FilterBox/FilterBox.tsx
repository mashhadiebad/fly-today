"use client";
import { FaFilter } from "react-icons/fa";
import style from "./FilterBox.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const FilterBox = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  return (
    <div>
      <div
        className={style.mobileDesign__filterButton}
        onClick={() => setIsFilterVisible(true)}
      >
        <FaFilter style={{ marginLeft: "8px" }} />
        <p>فیلتر کردن</p>
      </div>
      {isFilterVisible && (
        <div className={style.mobileDesign__filterBox}>
          <div className={style.mobileDesign__filterTitle}>
            <IoMdClose
              style={{ cursor: "pointer" }}
              onClick={() => setIsFilterVisible(false)}
            />
            <p>فیلترها</p>
          </div>
          <div className={style.mobileDesign__filterContent}>
            filter content
          </div>
        </div>
      )}
      <div className={style.desktopDesign__filterBox}></div>
    </div>
  );
};

export default FilterBox;
