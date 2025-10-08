import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CORE_VALUES } from '../../data/constants/core-values.constants';

@Component({
  selector: 'app-core-values',
  imports: [NgOptimizedImage],
  templateUrl: './core-values.html',
  styleUrl: './core-values.css'
})
export class CoreValues {
  public readonly coreValues = CORE_VALUES
}
