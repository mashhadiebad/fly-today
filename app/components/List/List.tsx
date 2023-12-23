"use client";
import { useEffect, useState } from "react";
import data from "../../../data/flight-data.json";
import ListItem from "../ListItem/ListItem";
import { useAppSelector } from "@/store/store";
import { useDispatch } from "react-redux";
import { filterActions } from "@/store/store";

interface flightsData {
  passportMandatoryType: string;
  domesticCountryCode: any;
  isPassportMandatory: boolean;
  isDestinationAddressMandatory: boolean;
  isPassportIssueDateMandatory: boolean;
  directionInd: number;
  refundMethod: string;
  validatingAirlineCode: string;
  fareSourceCode: string;
  hasFareFamilies: boolean;
  airItineraryPricingInfo: {
    fareType: string;
    itinTotalFare: {
      totalService: number;
      totalFare: number;
      grandTotalWithoutDiscount: number;
      discountAmount: any;
      totalVat: number;
      totalTax: number;
      totalServiceTax: number;
      totalCommission: number;
    };
    ptcFareBreakdown: [
      {
        passengerFare: {
          baseFare: number;
          totalFare: number;
          serviceTax: number;
          taxes: any[];
          total: number;
          tax: number;
          vat: number;
          baseFareWithMarkup: number;
          totalFareWithMarkupAndVat: number;
          commission: number;
          priceCitizen: number;
        };
        passengerTypeQuantity: {
          passengerType: string;
          quantity: number;
        };
      }
    ];
    fareInfoes: any[];
  };
  originDestinationOptions: [
    {
      journeyDurationPerMinute: number;
      connectionTimePerMinute: number;
      flightSegments: [
        {
          departureDateTime: string;
          arrivalDateTime: string;
          stopQuantity: number;
          flightNumber: string;
          resBookDesigCode: string;
          journeyDuration: string;
          journeyDurationPerMinute: number;
          connectionTimePerMinute: number;
          departureAirportLocationCode: string;
          arrivalAirportLocationCode: string;
          marketingAirlineCode: string;
          cabinClassCode: string;
          operatingAirline: {
            code: string;
            flightNumber: string;
            equipment: string;
            equipmentName: any;
          };
          seatsRemaining: number;
          isCharter: boolean;
          isReturn: boolean;
          baggage: string;
          technicalStops: any[];
        }
      ];
    }
  ];
  featured: any;
  bestExperienceIndex: number;
  isCharter: boolean;
  isSystem: boolean;
  isInstance: boolean;
  isOffer: boolean;
  isSeatServiceMandatory: boolean;
  isMealServiceMandatory: boolean;
}

const List = () => {
  const dispatch = useDispatch();
  const [flightsData, setFlightsData] = useState<flightsData[]>(
    data.pricedItineraries
  );
  const flightsKindFilter = useAppSelector((state) => state.filter.flightsKind);
  const airlineFilter = useAppSelector((state) => state.filter.airline);
  const sortType = useAppSelector((state) => state.sort.sortType);

  const handlefilter = (airlineFilter: string, flightsKindFilter: string) => {
    const allflightList = data.pricedItineraries;
    const filteredData = allflightList.filter((item) => {
      let airlineCondition = true;
      let flightKindCondition = true;

      if (airlineFilter) {
        airlineCondition = item.validatingAirlineCode === airlineFilter;
      }

      if (flightsKindFilter) {
        if (flightsKindFilter === "isCharter") {
          flightKindCondition = item.isCharter;
        } else if (flightsKindFilter === "isSystem") {
          flightKindCondition = item.isSystem;
        }
      }

      return flightKindCondition && airlineCondition;
    });

    setTimeout(() => {
      setFlightsData(filteredData);
      dispatch(filterActions.setListLength(filteredData.length));
    }, 0);
  };

  const handleSort = () => {
    let flightList: flightsData[] = [...flightsData];

    if (sortType === "totalFare") {
      const sortedList = flightList.sort(
        (a, b) =>
          a.airItineraryPricingInfo.itinTotalFare.totalFare -
          b.airItineraryPricingInfo.itinTotalFare.totalFare
      );
      setFlightsData(sortedList);
    }

    if (sortType === "journeyDuration") {
      const sortedList = flightList.sort(
        (a, b) =>
          a.originDestinationOptions[0].journeyDurationPerMinute -
          b.originDestinationOptions[0].journeyDurationPerMinute
      );
      setFlightsData(sortedList);
    }
  };

  useEffect(() => {
    handlefilter(airlineFilter, flightsKindFilter);
  }, [flightsKindFilter, airlineFilter]);

  useEffect(() => {
    handleSort();
  }, [flightsData, sortType]);
  return (
    <div>
      {flightsData.map((item, index) => (
        <div key={index} className="mb-4">
          <ListItem flightData={item} />
        </div>
      ))}
    </div>
  );
};

export default List;
