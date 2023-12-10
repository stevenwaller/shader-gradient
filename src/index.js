import React from "react";
import ReactDOM from "react-dom/client";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("shader-gradient"));

root.render(
  <React.StrictMode>
    <div className="overlay"></div>
    <ShaderGradientCanvas style={{ position: "absolute" }}>
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.5&uTime=0&wireframe=false"
      />
    </ShaderGradientCanvas>
  </React.StrictMode>
);
