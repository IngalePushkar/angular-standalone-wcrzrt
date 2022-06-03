import { Injectable } from '@angular/core';
import { OneService } from './one.service';

@Injectable()
export class ThreeService {

  constructor(private one: OneService) { }

}