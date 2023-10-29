import { useEffect, useState } from "react";
import BasicCard from "../components/card";
import BasicSelect from "../components/dropDown";
import noParcels from "../assets/noParcels.png";
function ParcelsList() {
  const [parcels, setParcels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredParcels, setFilteredParcels] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(`http://localhost:8000/all-parcels/user`, {
          credentials: "include",
        });
        const data = await res.json();
        setParcels(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    })();
  }, []);
  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    const result = parcels.filter((parcel) => {
      return parcel.status === selectedValue;
    });
    if (selectedValue !== "") {
      setFilteredParcels(result);
    }
  }, [selectedValue]);
  if (isLoading) {
    return <div></div>;
  }
  return (
    <>
      <div className="container">
        {parcels.length > 0 ? (
          <>
            <BasicSelect
              handleDropdownChange={handleDropdownChange}
              selectedValue={selectedValue}
            />
            <BasicCard
              parcels={filteredParcels ? filteredParcels : parcels}
            ></BasicCard>
          </>
        ) : (
          <>
            <h2>you don't have parcels yet</h2>
            <img src={noParcels} className="noParcels" />
          </>
        )}
      </div>
    </>
  );
}

export default ParcelsList;
