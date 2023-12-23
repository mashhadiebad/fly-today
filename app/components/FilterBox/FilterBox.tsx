"use client";
import { FaFilter } from "react-icons/fa";
import style from "./FilterBox.module.scss";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import According from "../According/According";
import { useDispatch } from "react-redux";
import { filterActions } from "@/store/store";
import { useAppSelector } from "@/store/store";

const FilterBox = () => {
  const dispatch = useDispatch();
  const airlineFilter = useAppSelector((state) => state.filter.airline);
  const flightsKindFilter = useAppSelector((state) => state.filter.flightsKind);
  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [isRemoveFilters, setIsRemoveFilters] = useState<boolean>(false);
  const [airlineFilterValue, setAirlineFilterValue] =
    useState<string>(airlineFilter);
  const [flightsKindFilterValue, setFlightsKindFilterValue] =
    useState<string>(flightsKindFilter);

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

  const receiveFlightsKindFilterValue = (value: string): void => {
    setFlightsKindFilterValue(value);
  };

  const receiveAirlineFilterValue = (value: string): void => {
    setAirlineFilterValue(value);
  };

  useEffect(() => {
    dispatch(filterActions.setAirlineFilter(airlineFilterValue));
  }, [airlineFilterValue]);

  useEffect(() => {
    dispatch(filterActions.setFlightsKindFilter(flightsKindFilterValue));
  }, [flightsKindFilterValue]);

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
              sendValue={receiveFlightsKindFilterValue}
              isRemoveSelected={isRemoveFilters}
              title="نوع پرواز"
              content={flightsKindFilterContent}
              defaultValue={flightsKindFilter}
            />
            <According
              sendValue={receiveAirlineFilterValue}
              isRemoveSelected={isRemoveFilters}
              title="ایرلاین ها"
              content={airlineFilterContent}
              defaultValue={airlineFilter}
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
          sendValue={receiveFlightsKindFilterValue}
          isRemoveSelected={isRemoveFilters}
          title="نوع پرواز"
          content={flightsKindFilterContent}
          defaultValue={flightsKindFilter}
        />
        <According
          sendValue={receiveAirlineFilterValue}
          isRemoveSelected={isRemoveFilters}
          title="ایرلاین ها"
          content={airlineFilterContent}
          defaultValue={airlineFilter}
        />
      </div>
    </div>
  );
};

export default FilterBox;
