"use client";
import Image from "next/image";
import style from "./ListItem.module.scss";
import variables from "../../styles/variables.module.scss";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { GrDocumentVerified } from "react-icons/gr";

const Listitem = () => {
  const [isFlightDetailsVisible, setIsFlightDetailsVisible] =
    useState<boolean>(false);
  return (
    <div className="">
      <div className={style.mobileDesign__container}>
        <div className={style.mobileDesign__airline}>
          <Image
            src="/images/logo.png"
            alt="airlineLogo"
            height={40}
            width={40}
          />
          <h2 className={style.mobileDesign__AirlineName}>ماهان</h2>
        </div>
        <div className={style.mobileDesign__timeContainer}>
          <div className={style.mobileDesign__time}>17:30</div>
          <div className={style.mobileDesign__durationContainer}>
            <div className={style.mobileDesign__duration}>3ساعت و 45 دقیقه</div>
            <div className={style.mobileDesign__durationUnderline}>
              <div
                className={style.mobileDesign__durationCircle}
                style={{ borderColor: variables.blue }}
              ></div>
              <div className={style.mobileDesign__durationLine}></div>
              <div
                className={style.mobileDesign__durationCircle}
                style={{ borderColor: variables.pumpkinOrange }}
              ></div>
            </div>
          </div>
          <div className={style.mobileDesign__time}>12:30</div>
        </div>
        <div className={style.mobileDesign__citiesContainer}>
          <div className={style.mobileDesign__cityContainer}>
            <div className={style.mobileDesign__cityName}>تهران</div>
            <div className={style.mobileDesign__cityCode}>(isr)</div>
          </div>
          <div className={style.mobileDesign__cityContainer}>
            <div className={style.mobileDesign__cityName}>تهران</div>
            <div className={style.mobileDesign__cityCode}>(isr)</div>
          </div>
        </div>
        <div className={style.mobileDesign__flightSummery}>
          <div className={style.mobileDesign__flightSummeryItem}>چارتر</div>
          <div className="flex items-center">
            <div className={style.mobileDesign__flightSummeryItem}>اکونومی</div>
            <span className="px-2 pb-1">.</span>
            <div className={style.mobileDesign__flightSummeryItem}>
              10 صندلی خالی
            </div>
            <span className="px-2 pb-1">.</span>
            <div className={style.mobileDesign__flightSummeryItem}>
              شماره پرواز : 2345
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className={style.mobileDesign__priceText}>یک نفر</div>
            <div className="flex items-center pt-1">
              <div className={style.mobileDesign__price}>1,370,000</div>
              <div className={style.mobileDesign__priceText}>تومان</div>
            </div>
          </div>
          <div
            className={style.mobileDesign__selectAndDetails}
            onClick={() => setIsFlightDetailsVisible(true)}
          >
            جزئیات و انتخاب
          </div>
        </div>
        {isFlightDetailsVisible && (
          <div className={style.mobileDesign__flightDetailModal}>
            <div className={style.mobileDesign__flightDetailModalHeader}>
              <div>جزئیات پرواز</div>
              <IoMdClose
                style={{ color: "#bfbfbf", cursor: "pointer" }}
                onClick={() => setIsFlightDetailsVisible(false)}
              />
            </div>
            <div className={style.mobileDesign__flightDetailModalMain}>
              <div
                className={
                  style.mobileDesign__flightDetailModalMainTagContainer
                }
              >
                <div
                  className={`${style.mobileDesign__flightDetailModalMainTag} ${style.activeTag}`}
                >
                  <PiAirplaneTakeoffLight />
                  <div className="pr-2">جزئیات پرواز</div>
                </div>
                <div className={style.mobileDesign__flightDetailModalMainTag}>
                  <GrDocumentVerified />
                  <div className="pr-2">قوانین و شرایط</div>
                </div>
              </div>
              <div className={style.mobileDesign__flightDetailModalInformation}>
                <div
                  className={
                    style.mobileDesign__flightDetailModalInformationTitle
                  }
                >
                  پرواز رفت تهران - استانبول
                </div>
                <div className="flex mb-6">
                  <div
                    className={
                      style.mobileDesign__flightDetailModalInformationAirline
                    }
                  >
                    <Image
                      src="/images/logo.png"
                      alt="airline Logo"
                      height={40}
                      width={40}
                    />
                    <p className="py-2">ماهان</p>
                  </div>
                  <div
                    className={
                      style.mobileDesign__flightDetailModalInformationPath
                    }
                  >
                    <div
                      className={
                        style.mobileDesign__flightDetailModalInformationCircle
                      }
                    ></div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalInformationDote
                      }
                    ></div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalInformationCircle
                      }
                    ></div>
                  </div>
                  <div>
                    <div
                      className={style.mobileDesign__flightDetailModalBoarding}
                    >
                      <div className="flex mb-2">
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingTime
                          }
                        >
                          12:45
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingCity
                          }
                        >
                          تهران
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingCityCode
                          }
                        >
                          (THR)
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingDate
                          }
                        >
                          12 اردیبهشت 1399
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingDateEn
                          }
                        >
                          (07 Apr)
                        </div>
                      </div>
                      <div
                        className={
                          style.mobileDesign__flightDetailModalBoardingAirport
                        }
                      >
                        Imam Khomeini Intl
                      </div>
                    </div>
                    <div className="my-8">
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          مدت پرواز
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          نوع هواپیما
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          کلاس پرواز
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          نوع پرواز
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          بار مجاز
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex mb-2">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          کلاس نرخی
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                      <div className="flex">
                        <div className={style.mobileDesign__flightDetailsTitle}>
                          استرداد
                        </div>
                        <div
                          className={style.mobileDesign__flightDetailsValue}
                        ></div>
                      </div>
                    </div>
                    <div
                      className={style.mobileDesign__flightDetailModalBoarding}
                    >
                      <div className="flex mb-2">
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingTime
                          }
                        >
                          12:45
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingCity
                          }
                        >
                          تهران
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingCityCode
                          }
                        >
                          (THR)
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingDate
                          }
                        >
                          12 اردیبهشت 1399
                        </div>
                        <div
                          className={
                            style.mobileDesign__flightDetailModalBoardingDateEn
                          }
                        >
                          (07 Apr)
                        </div>
                      </div>
                      <div
                        className={
                          style.mobileDesign__flightDetailModalBoardingAirport
                        }
                      >
                        Imam Khomeini Intl
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={style.mobileDesign__flightDetailModalPassengers}
                >
                  <div
                    className={style.mobileDesign__flightDetailModalPassenger}
                  >
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerTitle
                      }
                    >
                      <div>2</div>
                      <IoMdClose />
                      <div>بزرگسال</div>
                    </div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerValue
                      }
                    >
                      <div className="ml-2">۱,۳۷۰,۰۰۰</div>
                      <div>تومان</div>
                    </div>
                  </div>
                  <div
                    className={style.mobileDesign__flightDetailModalPassenger}
                  >
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerTitle
                      }
                    >
                      <div>2</div>
                      <IoMdClose />
                      <div>کودک</div>
                    </div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerValue
                      }
                    >
                      <div className="ml-2">۱,۳۷۰,۰۰۰</div>
                      <div>تومان</div>
                    </div>
                  </div>
                  <div
                    className={style.mobileDesign__flightDetailModalPassenger}
                  >
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerTitle
                      }
                    >
                      <div>1</div>
                      <IoMdClose />
                      <div>نوزاد</div>
                    </div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerValue
                      }
                    >
                      <div className="ml-2">۱,۳۷۰,۰۰۰</div>
                      <div>تومان</div>
                    </div>
                  </div>
                  <div
                    className={style.mobileDesign__flightDetailModalPassenger}
                  >
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerSumTitle
                      }
                    >
                      <div>مجموع:</div>
                    </div>
                    <div
                      className={
                        style.mobileDesign__flightDetailModalPassengerSumValue
                      }
                    >
                      <div className="ml-2">۱,۳۷۰,۰۰۰</div>
                      <div>تومان</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.mobileDesign__flightDetailModalFooter}>
              <div className="flex justify-between items-center">
                <div>
                  <div className={style.mobileDesign__priceText}>یک نفر</div>
                  <div className="flex items-center">
                    <div className={style.mobileDesign__price}>1,370,000</div>
                    <div className={style.mobileDesign__priceText}>تومان</div>
                  </div>
                </div>
                <div
                  className={style.mobileDesign__selectAndDetails}
                  onClick={() => setIsFlightDetailsVisible(false)}
                >
                  جزئیات و انتخاب
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={style.desktopDesign__container}>
        <div
          className="flex justify-between items-center px-4"
          style={{ height: "142px" }}
        >
          <div className={style.desktopDesign__airline}>
            <Image
              src="/images/logo.png"
              alt="airlineLogo"
              height={56}
              width={56}
            />
            <h2 className={style.desktopDesign__AirlineName}>ماهان</h2>
          </div>
          <div>
            <div className={style.desktopDesign__timeContainer}>
              <div className="flex flex-col items-center">
                <div className={style.desktopDesign__time}>17:30</div>
                <div className={style.desktopDesign__cityContainer}>
                  <div className={style.desktopDesign__cityName}>تهران</div>
                  <div className={style.desktopDesign__cityCode}>(isr)</div>
                </div>
              </div>
              <div className={style.desktopDesign__durationContainer}>
                <div className={style.desktopDesign__duration}>
                  3ساعت و 45 دقیقه
                </div>
                <div className={style.desktopDesign__durationUnderline}>
                  <div
                    className={style.desktopDesign__durationCircle}
                    style={{ borderColor: variables.blue }}
                  ></div>
                  <div className={style.desktopDesign__durationLine}></div>
                  <div
                    className={style.desktopDesign__durationCircle}
                    style={{ borderColor: variables.pumpkinOrange }}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className={style.desktopDesign__time}>17:30</div>
                <div className={style.desktopDesign__cityContainer}>
                  <div className={style.desktopDesign__cityName}>تهران</div>
                  <div className={style.desktopDesign__cityCode}>(isr)</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center pt-4 pr-4 pb-4 h-100"
            style={{ borderRight: "1px solid #eeeeee" }}
          >
            <div className={style.desktopDesign__priceText}>یک نفر</div>
            <div className="flex items-center pt-2">
              <div className={style.desktopDesign__price}>1,370,000</div>
              <div className={style.desktopDesign__priceText}>تومان</div>
            </div>
            <div className={style.desktopDesign__selectFlight}>انتخاب بلیط</div>
          </div>
        </div>
        <div
          className="flex justify-between items-center px-4"
          style={{ borderTop: "1px solid #eeeeee" }}
        >
          <div className={style.desktopDesign__flightSummery}>
            <div className={style.desktopDesign__flightSummeryItem}>چارتر</div>
            <div className="flex items-center">
              <div className={style.desktopDesign__flightSummeryItem}>
                اکونومی
              </div>
              <span className="px-2 pb-1">.</span>
              <div className={style.desktopDesign__flightSummeryItem}>
                10 صندلی خالی
              </div>
              <span className="px-2 pb-1">.</span>
              <div className={style.desktopDesign__flightSummeryItem}>
                شماره پرواز : 2345
              </div>
            </div>
          </div>
          <div className="">more</div>
        </div>
        {/* {isFlightDetailsVisible && ()} */}
        <div className="">
          <div className="">tag</div>
          <div className="">title</div>
          <div className="">
            <div className="">logo</div>
            <div className="">path</div>
            <div className="">
              <div className="">boarding</div>
              <div className="">detail</div>
              <div className="">boarding</div>
            </div>
          </div>
          <div className="">
            <div className="">child</div>
            <div className="">newborn</div>
            <div className="">adult</div>
            <div className="">sum</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listitem;
