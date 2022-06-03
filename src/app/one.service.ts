import { Injectable } from '@angular/core';
import { TwoService } from './two.service';

@Injectable()
export class OneService {
  constructor(private two: TwoService) {}
}
