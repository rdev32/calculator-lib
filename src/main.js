"use strict"

import { basicOperations } from './arithmetic/basic_operations.js';
import { area } from './geometry/area.js';
import { fractions } from './arithmetic/fractions.js';

export const BasicOperations = basicOperations;
export const Area = area;
export const Fractions = fractions; 

console.log(Fractions.sum(1,2,-4,6));