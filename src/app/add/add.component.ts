import { Component, OnInit } from '@angular/core';
import { Cheese } from '../models/cheese';
import { CheesesServiceService } from '../cheeses/cheeses-service.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})


export class AddComponent implements OnInit {
  
  cheese: any = {
    id: 0,
    naam: "",
    soort: "" ,
    smaak: "",
    price: 0.123456789,
   // pictureData :"$base64.encode(image)"
  }

imageUrl: string = "data:image/jpeg;base64"
selectedFiles?: FileList;
currentFile?: File;
progress = 0;
 message = '';
 preview = '';
 imageInfos?: Observable<any>;

  submitted = false;
  fileToUpload: any = null;  
  //fileToUpload: File | null | undefined;

  constructor(private cheesesServiceService:CheesesServiceService) { }
  
  
  ngOnInit(): void {
   
  }


  saveCheese(): void {
    const data = {
      id: this.cheese. id,
      naam: this.cheese. naam,
      soort: this.cheese.soort,
      smaak: this.cheese.smaak,
      price: this.cheese.price,
      //pictureData:this.cheese.pictureData

    };
    this.cheesesServiceService.createCheese(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

    /*this.cheesesServiceService.createCheese(data)
      .subscribe({next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });*/
  }

  newCheese(): void {
    this.submitted = false;
    this.cheese = {
      id: 0,
      naam: '',
      soort: "" ,
      smaak: "",
      price: 0.123456789,
      //pictureData :"$base64.encode(image)"
    };
    
  }

  
  selectFile(event: any ): void {
    this.message = '';
    this.preview = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;
  
    if (this.selectedFiles ) {
      const file: File | null = this.selectedFiles .item(0);
  
      if (file) {
        this.preview = '';
        this.currentFile = file;
  
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.preview = e.target.result;
        };
  
        reader.readAsDataURL(this.currentFile);
      }
    }

}

/*upload(): void {
  this.progress = 0;

  if (this.selectedFiles ) {
    const file: File | null = this.selectedFiles .item(0);
    if (file) {
      this.currentFile = file;

      this.cheesesServiceService.uploadImage(this.currentFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.imageInfos = this.cheesesServiceService.get(this.cheese);
          }
        },
        error: (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the image!';
          }

          this.currentFile = undefined;
        },
      });
    }

    this.selectedFiles = undefined;
  }
}*/
}
