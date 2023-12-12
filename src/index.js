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
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%23e3e4ff&color2=%23f2e2f8&color3=%23d1ffff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false"
      />
    </ShaderGradientCanvas>
  </React.StrictMode>
);
