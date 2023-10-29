import { useEffect, useState } from "react";
import PickupCard from "../components/pickupCard";
import noAvailableParcels from "../assets/noAbailableParcels.png";
function AvailableParcels() {
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/all-parcels`, {
          credentials: "include",
        });
        const data = await res.json();
        setParcels(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    }
    getData();
  }, []);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <>
      <div className="container">
        {parcels.length > 0 ? (
          parcels.map((parcel) => {
            return <PickupCard parcel={parcel} key={parcel.id}></PickupCard>;
          })
        ) : (
          <>
            <h2>no available parcels</h2>
            <img src={noAvailableParcels} className="noAvailableParcels" />
          </>
        )}
      </div>
    </>
  );
}

export default AvailableParcels;
