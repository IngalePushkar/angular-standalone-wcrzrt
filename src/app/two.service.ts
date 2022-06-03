import { Injectable } from '@angular/core';
import { ThreeService } from './three.service';

@Injectable()
export class TwoService {

  constructor(private three: ThreeService) { }

}