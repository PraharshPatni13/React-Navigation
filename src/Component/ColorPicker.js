import React, { useState } from "react";


function ColorPicker() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [showColoPicker, setShowColorPicker] = useState(false);

  const handleColorChnage = (event)=>{
    setBackgroundColor(event.target.value)
    setShowColorPicker(false)
  }
  return (
    <div className="colorPicker" onClick={setShowColorPicker(!showColoPicker)}>
      {showColoPicker && (
        <input
          type="color"
          onChange={handleColorChnage}
          value={backgroundColor}
        />
      )}
    </div>
  );
}
export default ColorPicker;