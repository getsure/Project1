import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChiruComponent } from './chiru/chiru.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttrDirsBindingComponent } from './attr-dirs-binding/attr-dirs-binding.component';
import { ColorDirective } from './directives/color.directive';
import { PredefinedPipesComponent } from './predefined-pipes/predefined-pipes.component';
import { MyTitleCasePipe } from './pipes/my-title-case.pipe';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductsasyncComponent } from './productsasync/productsasync.component'

@NgModule({
  declarations: [
    AppComponent,
    ChiruComponent,
    InterpolationBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    ClassStyleBindingComponent,
    StructuralDirectivesComponent,
    AttrDirsBindingComponent,
    ColorDirective,
    PredefinedPipesComponent,
    MyTitleCasePipe, ProductsComponent, ParentComponent, ChildComponent, FirstComponent, SecondComponent, ProductsasyncComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
