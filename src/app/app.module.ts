import { BrowserModule } from "@angular/platform-browser";
import { DoBootstrap, Injector, NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { createCustomElement } from "@angular/elements";
import { ElementZoneStrategyFactory } from "elements-zone-strategy";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  // bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const strategyFactory = new ElementZoneStrategyFactory(
      AppComponent,
      this.injector
    );
    const el = createCustomElement(AppComponent, {
      injector: this.injector,
      strategyFactory
    });
    customElements.define("phoenix-wc-wiki-ngx", el);
  }
}
