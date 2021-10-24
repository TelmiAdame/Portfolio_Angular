import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() {}

  getWorks() {
    return ['../../../../assets/image/print-site-picpay.JPG', 'https://picsum.photos/id/237/200/300', 'https://picsum.photos/id/237/200/300']
  }

}
