// styling
import styles from "../auth/login.module.css";
// react
import { useState } from "react";
// routing
import { useNavigate } from "react-router-dom";
function CreateParcel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropOff, setdropOff] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  async function addParcel(e) {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/create-parcel", {
        method: "POST",
        body: JSON.stringify({
          pickupAddress: pickup,
          deliveryAddress: dropOff,
          title: title,
          description: description,
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        navigate("/parcels");
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={addParcel}>
          <h3>create new parcel</h3>
          <label>title</label>
          <input
            type="text"
            placeholder="parcel title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label>description</label>
          <input
            type="text"
            placeholder="parcel description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <label>pickup address</label>
          <input
            type="text"
            placeholder="pickup address"
            onChange={(e) => {
              setPickup(e.target.value);
            }}
            required
          />
          <label>drop off address</label>
          <input
            type="text"
            placeholder="drop off address"
            onChange={(e) => {
              setdropOff(e.target.value);
            }}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button id="btn">add parcel</button>
        </form>
      </div>
    </>
  );
}

export default CreateParcel;
