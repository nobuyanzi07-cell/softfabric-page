function Itemcard () {
    const description =
    "a classic, high-intensity cardio tool that improves agility, burns calories, and builds lower-body strength. Key equipment choices, proper form, and core techniques will help you maximize your workout.";
  const amount = "KES 2,000";

  //react application:primitive datatypes<string,boolean,numbers>

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        border: "2px solid rgba(0,0,0,0.2)",
        padding: "2px 4px 2px 4px",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img
          width={"200px"}
          src="https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL320_.jpg"
        />
      </div>
      <div style={{ textAlign: "left", fontSize: "10px" }}>{description}</div>
      <div style={{ fontSize: "20px" }}>{amount}</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: "2px solid rgba(0,0,0,0.1)",
            padding: "2px 4px 2px 4px",
            color: "white",
            backgroundColor: "orange",
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Itemcard