"use client";
import style from "./Sort.module.scss";
import { useState, useEffect } from "react";
import { CgSortAz } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { sortActions } from "@/store/store";
import { useAppSelector } from "@/store/store";
import Dropdown from "../Dropdown/Dropdown";

const Sort = () => {
  const dispatch = useDispatch();
  const sortTypeName: string = useAppSelector((state) => state.sort.sortType);
  const [isSortVisible, setIsSortVisible] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string>(sortTypeName);

  const desktopDropdownContent = [
    { title: "قیمت", value: "totalFare" },
    { title: "زمان پرواز", value: "journeyDuration" },
  ];

  const handleSelectChange = (value: string) => {
    setSortType(value);
  };
  const handleMobileSort = () => {
    setSortType(sortTypeName);
    setIsSortVisible(!isSortVisible);
  };

  useEffect(() => {
    dispatch(sortActions.setSortType(sortType));
  }, [sortType]);

  return (
    <div className="relative">
      <div
        className={style.mobileDesign__sortButton}
        onClick={handleMobileSort}
      >
        <CgSortAz style={{ marginLeft: "8px", fontSize: "20px" }} />
        <p>مرتب سازی</p>
      </div>
      {isSortVisible && (
        <div className={style.mobileDesign__sortBox}>
          <div className={style.mobileDesign__sortContent}>
            <div className="form-control cursor-pointer">
              <label
                className="label cursor-pointer justify-start"
                onClick={() => {
                  setSortType("totalFare");
                  setTimeout(() => {
                    setIsSortVisible(!isSortVisible);
                  }, 200);
                }}
              >
                <input
                  value="totalFare"
                  type="checkbox"
                  className="checkbox checkbox-primary w-4 h-4"
                  checked={sortType === "totalFare"}
                />
                <span
                  className={`label-text ${style.mobileDesign__sortContent} mr-2`}
                >
                  قیمت
                </span>
              </label>
            </div>
            <div className="form-control cursor-pointer">
              <label
                className="label cursor-pointer justify-start"
                onClick={() => {
                  setSortType("journeyDuration");
                  setTimeout(() => {
                    setIsSortVisible(!isSortVisible);
                  }, 200);
                }}
              >
                <input
                  value="journeyDuration"
                  type="checkbox"
                  className="checkbox checkbox-primary w-4 h-4"
                  checked={sortType === "journeyDuration"}
                />
                <span
                  className={`label-text ${style.mobileDesign__sortContent} mr-2`}
                >
                  زمان پرواز
                </span>
              </label>
            </div>
          </div>
        </div>
      )}
      <div className={style.desktopDesign__sortContainer}>
        <div className={style.desktopDesign__sortTitle}>مرتب سازی:</div>
        <Dropdown
          sendValue={handleSelectChange}
          content={desktopDropdownContent}
          defaultValue={sortTypeName}
        />
      </div>
    </div>
  );
};

export default Sort;
