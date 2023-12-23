"use client";
import data from "../../../data/flight-data.json";
import ListItem from "../ListItem/ListItem";
import { useAppSelector } from "@/store/store";

const List = () => {
  const flightsData = data.pricedItineraries;
  const flightsKindFilter = useAppSelector((state) => state.filter.flightsKind);
  console.log(flightsKindFilter);

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
