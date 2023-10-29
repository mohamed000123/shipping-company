import { useEffect, useState } from "react";
import Card from "../components/card";
import noBookedParcels from "../assets/noParcels.jpg";
function PickedParcels() {
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`http://localhost:8000/biker-parcels`, {
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
            return <Card parcel={parcel} key={parcel.id}></Card>;
          })
        ) : (
          <>
            <h2>don't have parcels! book some now</h2>
            <img src={noBookedParcels} className="noAvailableParcels" />
          </>
        )}
      </div>
    </>
  );
}

export default PickedParcels;
