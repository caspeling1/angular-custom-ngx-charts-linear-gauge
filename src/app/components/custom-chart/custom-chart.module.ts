import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ChartCommonModule } from "@swimlane/ngx-charts";
import { TimelineFilterBarChartComponent } from "./timeline-filter.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ChartCommonModule
  ],
  declarations: [TimelineFilterBarChartComponent],
  exports: [TimelineFilterBarChartComponent]
})
export class CustomChartModule {}
