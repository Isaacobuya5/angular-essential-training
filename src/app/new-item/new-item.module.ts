import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { newItemRouting } from "./new-item.routing";

// feature modules
// common modules designed to be used on the feature modules.
// now import this into the root module

@NgModule
({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    newItemRouting
  ],
  declarations: [
    // this component belongs to this module
    MediaItemFormComponent
  ]
})

export class NewItemModule{}
