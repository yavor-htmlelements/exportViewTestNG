import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTreeGridModule } from 'jqwidgets-ng/jqxtreegrid';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { AppComponent } from './app.component';
import { jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxChartModule,
    jqxDataTableModule,
    jqxDateTimeInputModule,
    jqxInputModule,
    jqxTreeGridModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
