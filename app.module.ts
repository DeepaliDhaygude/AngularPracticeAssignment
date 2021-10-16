import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TemplateComponent } from './template/template.component';
import { Template2Component } from './template2/template2.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomPipe } from './custom.pipe';
import { Directive1Component } from './directive1/directive1.component';
import { CustDirective } from './cust.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './child/child.component';
import { ServicedataComponent } from './servicedata/servicedata.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentComponent } from './assignment/assignment.component'





@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    TemplateComponent,
    Template2Component,
    ReactiveFormComponent,
    RegistrationFormComponent,
    PipeDemoComponent,
    CustomPipe,
    Directive1Component,
    CustDirective,
    LifecycleComponent,
    ChildComponent,
    ServicedataComponent,
    AssignmentComponent,

      
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
