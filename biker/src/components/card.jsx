import { Button } from "@mui/material";
import { useEffect } from "react";

export default function Card({ parcel }) {
  async function deliverParcel(id) {
    try {
      const res = await fetch(`http://localhost:8000/deliver/parcel/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      if(data){
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{},[])
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
      <p>
        parcel status:
        <span style={{ color: "red" }}>{parcel.status}</span>
      </p>
      <Button
        variant="contained"
        onClick={() => {
          deliverParcel(parcel.id);
        }}
      >
        delivered
      </Button>
    </div>
  );
}
