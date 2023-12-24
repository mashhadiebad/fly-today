"use client";
import { useEffect, useState } from "react";
import style from "./According.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  title: string;
  content: { title: string; value: string }[];
  isRemoveSelected: boolean;
  sendValue: Function;
  defaultValue: string;
}

const According = ({
  title,
  content,
  isRemoveSelected,
  sendValue,
  defaultValue,
}: Props) => {
  const [isAccordingVisible, setIsAccordingVisible] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const handleCheckboxChange = (valueItem: string): void => {
    if (selectedValue === valueItem) {
      setSelectedValue("");
    } else {
      setSelectedValue(valueItem);
    }
  };
  useEffect(() => {
    if (isRemoveSelected) {
      setSelectedValue("");
    }
  }, [isRemoveSelected]);

  useEffect(() => {
    sendValue(selectedValue);
  }, [selectedValue]);
  return (
    <div className={style.according__container}>
      <div
        className={style.according__header}
        onClick={() => setIsAccordingVisible(!isAccordingVisible)}
      >
        <div className={style.according__title}>{title}</div>
        <IoIosArrowDown
          style={isAccordingVisible ? { transform: "rotate(180deg)" } : null}
        />
      </div>
      {isAccordingVisible && (
        <div className={style.according__content}>
          {content.map((item) => (
            <div
              key={item.value}
              className={style.according__item}
              onClick={() => handleCheckboxChange(item.value)}
            >
              <input
                type="checkbox"
                checked={selectedValue === item.value}
                className="checkbox checkbox-primary"
              />
              <div className={style.according__itemTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default According;
