"use strict"

import { basicOperations } from './arithmetic/basic_operations.js';
import { area } from './geometry/area.js';
import { fractions } from './arithmetic/fractions.js';
import { base } from './arithmetic/base.js';
import { segments } from './geometry/segments.js';
import { operations } from './general/operations.js';
import { percentage } from './arithmetic/percentage.js';

export const BasicOperations = basicOperations;
export const Area = area;
export const Fractions = fractions; 
export const Base = base; 
export const Segments = segments;
export const Operations = operations;
export const Percentage = percentage;

console.log(Percentage.percentFromPercent(10, 10, 40))