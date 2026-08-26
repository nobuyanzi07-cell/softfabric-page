import { useState } from "react";

function ColorsCircles() {
    console.log("ColorCircles", new Date());// for each component

    const [colors, setColors] = useState([])

    const onSubmit = (color) => {
        const clonedColors = structuredClone(colors);// [...colors]
        clonedColors.push(color);
        setColors(clonedColors);
    }

    const removeColor = (indexToRemove) => {
        setColors((prevColors) => 
             prevColors.filter((_, index) => index !== indexToRemove)
        );
    }

  return (
    <div>
        <ColorForm onSubmit={onSubmit} />
        <ColorList colors={colors} removeColor={removeColor} />
    </div>
  );
}


function ColorForm(props) {
    console.log("ColorForm", new Date());// for each component
    const { onSubmit } = props;
    const [color, setColor] = useState("");

    const handleSubmit = () => {
        onSubmit(color);
        setColor("");// Clear the input field after submission
    }

  return (
    <div>
      <label>Enter Color</label>
      <input value={color} onChange={(e) => setColor(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

function ColorList(props) {
  const { colors, removeColor } = props;
  
  return (
    <div style={{ marginTop: "30px" }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "30px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
          }}
        >
          {color}
          <button onClick={() => removeColor(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ColorsCircles;