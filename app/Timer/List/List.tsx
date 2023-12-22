import Listitem from "../ListItem/ListItem";
import data from "../../../data/flight-data.json";

const List = () => {
  const flightsData = data.pricedItineraries;
  return (
    <div>
      {flightsData.map((item, index) => (
        <div key={index} className="mb-4">
          <Listitem flightData={item} />
        </div>
      ))}
    </div>
  );
};

export default List;
