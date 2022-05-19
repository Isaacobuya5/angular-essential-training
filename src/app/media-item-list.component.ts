import { Component, OnInit } from "@angular/core";
import { MediaItemService } from "./media-item.service";

@Component({
  selector: "mw-media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export class MediaItemListComponent implements OnInit {
  mediaItems;
  medium = "";

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItemService.get().subscribe((mediaItems) => {
      this.mediaItems = mediaItems;
    });
  }

  getMediumItems(medium: string) {
    this.medium = medium;
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
