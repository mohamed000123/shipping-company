export default function BasicCard({ parcels }) {
  function displayData_Time(savedDateTime) {
    const dateTime = new Date(savedDateTime);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = dateTime.toLocaleString(undefined, options);
    return formattedDateTime;
  }
  return (
    <>
      {parcels.length > 0 ? (
        parcels.map((parcel) => {
          return (
            <div className="parcel" key={parcel.id}>
              <p>
                title:
                <span style={{ color: "blue" }}>{parcel.title}</span>
              </p>
              {parcel.description && (
                <p>
                  description:
                  <span style={{ color: "blue" }}>{parcel.description}</span>
                </p>
              )}
              <p>
                pickup location:
                <span style={{ color: "blue" }}>{parcel.pickupAddress}</span>
              </p>
              <p>
                drop off location:
                <span style={{ color: "blue" }}>{parcel.deliveryAddress}</span>
              </p>
              <p>
                parcel status:
                <span
                  style={
                    parcel.status === "created"
                      ? { color: "green" }
                      : parcel.status === "pickedUp"
                      ? { color: "red" }
                      : { color: "blue" }
                  }
                >
                  {parcel.status}
                </span>
              </p>
              <p>
                create date:
                <span style={{ color: "green" }}>
                  {displayData_Time(parcel.createdAt)}
                </span>
              </p>
              {parcel.pickUpDate && (
                <p>
                  pickup date:
                  <span style={{ color: "green" }}>
                    {displayData_Time(parcel.pickUpDate)}
                  </span>
                </p>
              )}
              {parcel.deliveryDate && (
                <p>
                  delivery date:
                  <span style={{ color: "green" }}>
                    {displayData_Time(parcel.deliveryDate)}
                  </span>
                </p>
              )}
            </div>
          );
        })
      ) : (
        <h2>no parcels</h2>
      )}
    </>
  );
}
