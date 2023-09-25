import { Component } from '@angular/core';
var domtoimage = require('dom-to-image-more');
var FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  saveImage() {
    let node = document.getElementById('frame');

    domtoimage
      .toBlob(node)
      .then(function (blob: any) {
        FileSaver.saveAs(blob, 'my-node.png');
      });
  }

  shareImage() {
    let node = document.getElementById('frame');

    domtoimage
      .toBlob(node)
      .then(function (blob: any) {
        navigator.share({
          title: "Эмоции",
          text: "Моя таблица эмоций",
          files: [
            new File([blob], 'МоиЭмоции.png', {
              type: blob.type,
            }),
          ],
        });
      });
  }
}
