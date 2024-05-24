import React, { useState } from 'react'

const ColorPicker = () => {

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(e) {
    setColor(e.target.value)
  }
  function handleCopyColor() {
    navigator.clipboard.writeText(color)
  }
  return (
    <div className='color-picker-conatiner'>
      <h1>ColorPicker</h1>
      <div className='color-display' style={{backgroundColor : color }}>
      <p onClick={handleCopyColor} style={{ cursor: 'pointer' }}>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker 