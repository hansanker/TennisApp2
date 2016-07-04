/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GroupListComponent } from './group-list.component';

describe('Component: GroupList', () => {
  it('should create an instance', () => {
    let component = new GroupListComponent();
    expect(component).toBeTruthy();
  });
});
