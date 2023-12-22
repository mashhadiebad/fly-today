"use client";
import { FaFilter } from "react-icons/fa";
import style from "./FilterBox.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import According from "../According/According";

const FilterBox = () => {
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isRemoveFilters, setIsRemoveFilters] = useState<boolean>(false);
  const flightsKindFilterContent = [
    { title: "پروازهای سیستمی", value: "isSystem" },
    { title: "پروازهای چارتری", value: "isCharter" },
  ];
  const airlineFilterContent = [
    { title: "ایران ایر", value: "IR" },
    { title: "ماهان ایر", value: "W5" },
    { title: "ترکیش", value: "TK" },
  ];
  const handleRemoveFilters = (): void => {
    setIsRemoveFilters(true);
    setTimeout(() => {
      setIsRemoveFilters(false);
    }, 0);
  };
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
            <p>فیلترها</p>
            <IoMdClose
              style={{ cursor: "pointer" }}
              onClick={() => setIsFilterVisible(false)}
            />
          </div>
          <div className={style.mobileDesign__filters}>
            <div className={style.desktopDesign__filterBoxHeader}>
              <div
                className={style.desktopDesign__filterBoxHeaderRemove}
                onClick={() => handleRemoveFilters()}
              >
                حذف فیلترها
              </div>
            </div>
            <According
              isRemoveSelected={isRemoveFilters}
              title="نوع پرواز"
              content={flightsKindFilterContent}
            />
            <According
              isRemoveSelected={isRemoveFilters}
              title="ایرلاین ها"
              content={airlineFilterContent}
            />
          </div>
        </div>
      )}
      <div className={style.desktopDesign__filterBox}>
        <div className={style.desktopDesign__filterBoxHeader}>
          <div className={style.desktopDesign__filterBoxHeaderTitle}>
            فیلترها
          </div>
          <div
            className={style.desktopDesign__filterBoxHeaderRemove}
            onClick={() => handleRemoveFilters()}
          >
            حذف فیلترها
          </div>
        </div>
        <According
          isRemoveSelected={isRemoveFilters}
          title="نوع پرواز"
          content={flightsKindFilterContent}
        />
        <According
          isRemoveSelected={isRemoveFilters}
          title="ایرلاین ها"
          content={airlineFilterContent}
        />
      </div>
    </div>
  );
};

export default FilterBox;
