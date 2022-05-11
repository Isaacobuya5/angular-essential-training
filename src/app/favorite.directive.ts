import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[mwFavorite]", // we want a selector to find match on the element attribute, reason for square brackets
})
export class FavoriteDirective {
  @HostBinding("class.is-favorite") isFavorite = true;
  @HostBinding("class.is-favorite-hovering") hovering = false;

  @HostListener("mouseenter") onMouseEnter() {
    this.hovering = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.hovering = false;
  }

  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
