import FilterList from "./FilterList";

function SideBar() {
  return (
    <div
      style={{
        display: "flex",
        width: "500px",
        flexDirection: "column",
      }}
    >
      <FilterList title={"Conditions"} options={["New", "Used", "Renewed"]} />
      <FilterList
        title={"Material"}
        options={["Plastic", "Rubber", "PVC", "Allot Stel", "Aluminium"]}
      />
      <FilterList
        title={"Uses"}
        options={[
          "Exersice",
          "Speed And Endurance",
          "Boxing",
          "Body Building",
          "Marital Arts",
        ]}
      />
      <FilterList
        title={"Brand"}
        options={["Cross Rope ", "Venum", "Sport Bit", "Canon Sprot", "Adidas"]}
      />
    </div>
  );
}

export default SideBar;