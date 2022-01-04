"use strict"

import { basicOperations } from './arithmetic/basic_operations.js';
import { area } from './geometry/area.js';
import { fractions } from './arithmetic/fractions.js';
import { base } from './arithmetic/base.js';
import { segments } from './geometry/segments.js';
import { operations } from './general/operations.js';
import { percentage } from './arithmetic/percentage.js';
import { equations } from './algebra/equations.js';
import { rule_three } from './arithmetic/rule_three.js';

export const BasicOperations = basicOperations;
export const Area = area;
export const Fractions = fractions; 
export const Base = base; 
export const Segments = segments;
export const Operations = operations;
export const Percentage = percentage;
export const Equations = equations;
export const RuleOfThree = rule_three;

console.log(RuleOfThree.simple('inverse', 210, undefined, 12, 20))