import { Component, VERSION } from "@angular/core";
// import * as d3 from "d3";
import { curveStepAfter } from "d3-shape";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  // from: Date;
  // to: Date;
  // chartData: any[];
  name1: string = "series1";
  name2: string = "series2";
  color1: string = "#3f51b5"; // blue
  color2: string = "#ff8f00"; // orange
  customColors: any[];
  interpolationFunction = curveStepAfter;
}
