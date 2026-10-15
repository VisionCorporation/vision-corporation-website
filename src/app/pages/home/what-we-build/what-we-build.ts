import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WEBSITE_TYPES } from '../../../data/constants/what-we-build.constants';

@Component({
  selector: 'app-what-we-build',
  imports: [CommonModule, RouterLink],
  templateUrl: './what-we-build.html',
  styleUrl: './what-we-build.css'
})
export class WhatWeBuild {
  public websiteTypes = WEBSITE_TYPES
}
