import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "mw-media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl("Movies"),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[\\w\\-\\s\\/]+"),
        ])
      ),
      // name: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      category: new FormControl(""),
      year: new FormControl("", this.yearValidator),
    });
  }

  // custom validator
  yearValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1990;
    const maxYear = 2022;

    if (year > minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}

//254704420000
