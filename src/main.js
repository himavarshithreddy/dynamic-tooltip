import React, { useState } from "react";
import "./App.css";

function Screen() {
  // Define the initial state for the selected button and button settings.
  const [selectedButton, setSelectedButton] = useState("btn1");
  // Initialize settings for five buttons (btn1 to btn5).
    // These settings will be used to customize tooltips and button appearance.
  const initialButtonSettings = {
    btn1: {
      tooltipText: "This is Tooltip",
      tooltipPosition: "bottom",
      textSize: "12px",
      padding: "3px",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      cornerRadius: "3px",
      tooltipWidth: "fit-content",
      selectedImage: null,
    },
    btn2: {
      tooltipText: "This is Tooltip",
      tooltipPosition: "bottom",
      textSize: "12px",
      padding: "3px",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      cornerRadius: "3px",
      tooltipWidth: "fit-content",
      selectedImage: null,
    },
    btn3: {
      tooltipText: "This is Tooltip",
      tooltipPosition: "bottom",
      textSize: "12px",
      padding: "3px",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      cornerRadius: "3px",
      tooltipWidth: "fit-content",
      selectedImage: null,
    },
    btn4: {
      tooltipText: "This is Tooltip",
      tooltipPosition: "bottom",
      textSize: "12px",
      padding: "3px",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      cornerRadius: "3px",
      tooltipWidth: "fit-content",
      selectedImage: null,
    },
    btn5: {
      tooltipText: "This is Tooltip",
      tooltipPosition: "bottom",
      textSize: "12px",
      padding: "3px",
      textColor: "#ffffff",
      backgroundColor: "#000000",
      cornerRadius: "3px",
      tooltipWidth: "fit-content",
      selectedImage: null,
    },
  };
  const [buttonSettings, setButtonSettings] = useState(initialButtonSettings);
 // Function to update button settings based on user input.
  const updateButtonSettings = (newSettings) => {
    setButtonSettings((prevSettings) => ({
      ...prevSettings,
      [selectedButton]: newSettings,
    }));
  };
 // Event handlers for user input changes:
  const handleButtonChange = (event) => {
    setSelectedButton(event.target.value);
  };

  const handleTextChange = (event) => {
    const newTooltipText = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      tooltipText: newTooltipText,
    });
  };
  const handlePositionChange = (event) => {
    const newTooltipPosition = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      tooltipPosition: newTooltipPosition,
    });
  };
  const handleTextSizeChange = (event) => {
    const newTextSize = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      textSize: newTextSize,
    });
  };

  const handlePaddingChange = (event) => {
    const newPadding = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      padding: newPadding,
    });
  };

  const handleTextColorChange = (event) => {
    const newTextColor = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      textColor: newTextColor,
    });
  };

  const handleBackgroundColorChange = (event) => {
    const newBackgroundColor = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      backgroundColor: newBackgroundColor,
    });
  };

  const handleCornerRadiusChange = (event) => {
    const newCornerRadius = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      cornerRadius: newCornerRadius,
    });
  };

  const handleTooltipWidthChange = (event) => {
    const newTooltipWidth = event.target.value;
    updateButtonSettings({
      ...buttonSettings[selectedButton],
      tooltipWidth: newTooltipWidth,
    });
  };
  // Event handler to handle image upload and display
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newSelectedImage = e.target.result;
        updateButtonSettings({
          ...buttonSettings[selectedButton],
          selectedImage: newSelectedImage,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      {/* User input area */}
      <div className="inputbg">
        <div className="inputarea">
          <div className="target">
            <label>Target Element</label>
            <select
              className="select"
              id="buttonSelector"
              value={selectedButton}
              onChange={handleButtonChange}
            >
              <option value="">Select an option</option>
              <option value="btn1">Button 1</option>
              <option value="btn2">Button 2</option>
              <option value="btn3">Button 3</option>
              <option value="btn4">Button 4</option>
              <option value="btn5">Button 5</option>
            </select>
          </div>
          <div className="hor">
            <div>
              <label>Tooltip Position</label>
              <select
                className="select"
                value={buttonSettings[selectedButton].tooltipPosition}
                onChange={handlePositionChange}
              >
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
                <option value="right">Right</option>
                <option value="left">Left</option>
              </select>
            </div>
            <div>
              <label>Tooltip Text</label>
              <input
                className="toolt hort"
                value={buttonSettings[selectedButton].tooltipText}
                onChange={handleTextChange}
              ></input>
            </div>
          </div>
          <div className="hor">
            <div>
              <label>Text size</label>
              <input
                className="toolt hort"
                value={buttonSettings[selectedButton].textSize}
                onChange={handleTextSizeChange}
              ></input>
            </div>
            <div>
              <label>Padding</label>
              <input
                className="toolt hort"
                value={buttonSettings[selectedButton].padding}
                onChange={handlePaddingChange}
              ></input>
            </div>
          </div>
          <label>Text Color</label>
          <input
            className="toolt"
            value={buttonSettings[selectedButton].textColor}
            onChange={handleTextColorChange}
          ></input>
          <label>Background Color</label>
          <input
            className="toolt"
            value={buttonSettings[selectedButton].backgroundColor}
            onChange={handleBackgroundColorChange}
          ></input>
          <div className="hor">
            <div>
              <label>Corner Radius</label>
              <input
                className="toolt hort"
                value={buttonSettings[selectedButton].cornerRadius}
                onChange={handleCornerRadiusChange}
              ></input>
            </div>
            <div>
              <label>Tooltip Width</label>
              <input
                className="toolt hort"
                value={buttonSettings[selectedButton].tooltipWidth}
                onChange={handleTooltipWidthChange}
              ></input>
            </div>
          </div>
          <div className="imgcon">
            <label>Upload an Image</label>
            <input
              className="toolt"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
      {/* Screen area to display buttons and tooltips */}
      <div className="screen">
        <div className="topbtn">
          <div>
            {/* Button 1 */}
            <button
              className="button"
              onClick={() => setSelectedButton("btn1")}
            >
              Button 1
            </button>
            <span
              className={`tooltip tool${buttonSettings.btn1.tooltipPosition} ${
                selectedButton === "btn1" ? "visible" : ""
              }`}
              style={{
                fontSize: buttonSettings.btn1.textSize,
                padding: buttonSettings.btn1.padding,
                color: buttonSettings.btn1.textColor,
                backgroundColor: buttonSettings.btn1.backgroundColor,
                borderRadius: buttonSettings.btn1.cornerRadius,
                width: buttonSettings.btn1.tooltipWidth,
              }}
            >
              {buttonSettings.btn1.selectedImage && (
                <img
                  src={buttonSettings.btn1.selectedImage}
                  alt="Custom Tooltip"
                />
              )}
              {buttonSettings.btn1.tooltipText}
            </span>
          </div>
          <div>
            {/* Button 2 */}
            <button
              className="button"
              onClick={() => setSelectedButton("btn2")}
            >
              Button 2
            </button>
            <span
              className={`tooltip tool${buttonSettings.btn2.tooltipPosition} ${
                selectedButton === "btn2" ? "visible" : ""
              }`}
              style={{
                fontSize: buttonSettings.btn2.textSize,
                padding: buttonSettings.btn2.padding,
                color: buttonSettings.btn2.textColor,
                backgroundColor: buttonSettings.btn2.backgroundColor,
                borderRadius: buttonSettings.btn2.cornerRadius,
                width: buttonSettings.btn2.tooltipWidth,
              }}
            >
              {buttonSettings.btn2.selectedImage && (
                <img
                  src={buttonSettings.btn2.selectedImage}
                  alt="Custom Tooltip"
                />
              )}
              {buttonSettings.btn2.tooltipText}
            </span>
          </div>
        </div>
        <div className="midbtn">
          {/* Button 3 */}
          <button className="button" onClick={() => setSelectedButton("btn3")}>
            Button 3
          </button>
          <span
            className={`tooltip tipmid tool${
              buttonSettings.btn3.tooltipPosition
            } ${selectedButton === "btn3" ? "visible" : ""}`}
            style={{
              fontSize: buttonSettings.btn3.textSize,
              padding: buttonSettings.btn3.padding,
              color: buttonSettings.btn3.textColor,
              backgroundColor: buttonSettings.btn3.backgroundColor,
              borderRadius: buttonSettings.btn3.cornerRadius,
              width: buttonSettings.btn3.tooltipWidth,
            }}
          >
            {buttonSettings.btn3.selectedImage && (
              <img
                src={buttonSettings.btn3.selectedImage}
                alt="Custom Tooltip"
              />
            )}
            {buttonSettings.btn3.tooltipText}
          </span>
        </div>
        <div className="botbtn">
          <div>
            {/* Button 4 */}
            <button
              className="button"
              onClick={() => setSelectedButton("btn4")}
            >
              Button 4
            </button>
            <span
              className={`tooltip tool${buttonSettings.btn4.tooltipPosition} ${
                selectedButton === "btn4" ? "visible" : ""
              }`}
              style={{
                fontSize: buttonSettings.btn4.textSize,
                padding: buttonSettings.btn4.padding,
                color: buttonSettings.btn4.textColor,
                backgroundColor: buttonSettings.btn4.backgroundColor,
                borderRadius: buttonSettings.btn4.cornerRadius,
                width: buttonSettings.btn4.tooltipWidth,
              }}
            >
              {buttonSettings.btn4.selectedImage && (
                <img
                  src={buttonSettings.btn4.selectedImage}
                  alt="Custom Tooltip"
                />
              )}
              {buttonSettings.btn4.tooltipText}
            </span>
          </div>
          <div>
            {/* Button 5 */}
            <button
              className="button"
              onClick={() => setSelectedButton("btn5")}
            >
              Button 5
            </button>
            <span
              className={`tooltip tool${buttonSettings.btn5.tooltipPosition} ${
                selectedButton === "btn5" ? "visible" : ""
              }`}
              style={{
                fontSize: buttonSettings.btn5.textSize,
                padding: buttonSettings.btn5.padding,
                color: buttonSettings.btn5.textColor,
                backgroundColor: buttonSettings.btn5.backgroundColor,
                borderRadius: buttonSettings.btn5.cornerRadius,
                width: buttonSettings.btn5.tooltipWidth,
              }}
            >
              {buttonSettings.btn5.selectedImage && (
                <img
                  src={buttonSettings.btn5.selectedImage}
                  alt="Custom Tooltip"
                />
              )}
              {buttonSettings.btn5.tooltipText}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen;
