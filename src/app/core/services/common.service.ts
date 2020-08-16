import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public static readonly CYRILLIC_PATTERN = /^[\u0400-\u04FF\s]+$/;

  constructor() { }
}
