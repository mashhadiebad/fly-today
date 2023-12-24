"use client";
import { useEffect, useState } from "react";
import style from "./Dropdown.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

interface Props {
  content: { title: string; value: string }[];
  sendValue: Function;
  defaultValue: string;
}

const Dropdown = ({ content, sendValue, defaultValue }: Props) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [selectedTitle, setSelectedTitle] = useState<string>(content[0].title);

  const findTitle = (
    content: { title: string; value: string }[],
    value: string
  ) => {
    const result = content.find((item) => item.value === value);
    return result.title;
  };

  const handleCheckboxChange = (valueItem: string, titleItem: string): void => {
    setSelectedValue(valueItem);
    setSelectedTitle(titleItem);
  };

  useEffect(() => {
    sendValue(selectedValue);
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(defaultValue);
    const defaultTitle = findTitle(content, defaultValue);
    setSelectedTitle(defaultTitle);
  }, [defaultValue]);
  return (
    <div className={style.dropdown__container}>
      <div
        className={style.dropdown__header}
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <div className={style.dropdown__title}>{selectedTitle}</div>
        <IoIosArrowDown
          style={{
            transform: isDropdownVisible ? "rotate(180deg)" : "none",
            color: "#999999",
          }}
        />
      </div>
      {isDropdownVisible && (
        <div className={style.dropdown__content}>
          {content.map((item) => (
            <div
              key={item.value}
              className={style.dropdown__item}
              onClick={() => handleCheckboxChange(item.value, item.title)}
            >
              <input
                type="checkbox"
                checked={selectedValue === item.value}
                className="checkbox checkbox-primary"
              />
              <div className={style.dropdown__itemTitle}>{item.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
