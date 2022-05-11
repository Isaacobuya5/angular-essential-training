import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'categoryList',
  // pure: true
})

export class CategoryListPipe implements PipeTransform {

  transform(mediaItems) {
    // get all distinct category names across all distict media items passed in
    const categories = [];
    mediaItems.forEach(mediaItem => {
    if (categories.indexOf(mediaItem.category) <= -1) {
      categories.push(mediaItem.category);
    }
});
  return categories.join(', '); // you can return any data type
  }

}
