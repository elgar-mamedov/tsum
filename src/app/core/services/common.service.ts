import { Injectable } from '@angular/core';

export const CYRILLIC_PATTERN = /^[\u0400-\u04FF\s]+$/;
export const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
}
