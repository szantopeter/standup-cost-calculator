import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/calc",
    pathMatch: "full"
  },
  {
    path: "calc",
    component: CalculatorComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
