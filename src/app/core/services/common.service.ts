import { Injectable } from '@angular/core';

export const CYRILLIC_PATTERN = /^[\u0400-\u04FF\s]+$/;
export const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
}
