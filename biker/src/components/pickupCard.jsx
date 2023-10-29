import { Button } from "@mui/material";
export default function PickupCard({ parcel, delivered }) {
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
  async function bookParcel(id) {
    try {
      const res = await fetch(`http://localhost:8000/pickup/parcel/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      if (data) {
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="parcel">
      <p>
        parcel title:
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
      {parcel.deliveryDate && (
        <p>
          deliverd at:
          <span style={{ color: "green" }}>
            {displayData_Time(parcel.deliveryDate)}
          </span>
        </p>
      )}
      {!delivered && (
        <Button
          variant="contained"
          onClick={() => {
            bookParcel(parcel.id);
          }}
        >
          book parcel
        </Button>
      )}
    </div>
  );
}
