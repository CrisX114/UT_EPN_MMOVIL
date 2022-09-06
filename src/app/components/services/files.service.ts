import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private storage: AngularFireStorage) {}
  urlFile: Observable<string>;

  uploadFile(path: any, file: any): Promise<string> {
    return new Promise((resolve) => {
      const ref = this.storage.ref(path);
      const task = this.storage.upload(path, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            ref.getDownloadURL().subscribe((res) => {
              const downloadURL = res;
              resolve(downloadURL);
              return;
            });
          })
        )
        .subscribe();
    });
  }

  getLink(path: any) {
    const ref = this.storage.ref(path);
  }
}
