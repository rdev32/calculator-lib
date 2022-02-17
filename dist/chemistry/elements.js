"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var periodicTable = [addElement("H", 1, 1, "Hydrogen", "I A", "Non-metal", 2.2), addElement("He", 2, 4, "Helium", "VIII A", "Noble gas", null), addElement("Li", 3, 7, "Lithium", "I A", "Alkali metal", 1), addElement("Be", 4, 9, "Beryllium", "II A", "Alkaline earth metal", 1.6), addElement("B", 5, 11, "Boron", "III A", "Metalloid", 2), addElement("C", 6, 12, "Carbon", "IV A", "Non-metal", 2.5), addElement("N", 7, 14, "Nitrogen", "V A", "Non-metal", 3.0), addElement("O", 8, 16, "Oxygen", "VI A", "Non-metal", 3.5), addElement("F", 9, 19, "Fluorine", "VII A", "Halogen", 4), addElement("Ne", 10, 20, "Neon", "VIII A", "Noble gas", null), addElement("Na", 11, 23, "Sodium", "I A", "Alkali metal", 0.9), addElement("Mg", 12, 24, "Magnesium", "II A", "Alkaline earth metal", 1.2), addElement("Al", 13, 27, "Aluminium", "III A", "Metal", 1.5), addElement("Si", 14, 28, "Silicon", "IV A", "Metalloid", 1.8), addElement("P", 15, 31, "Phosphorus", "V A", "Non-metal", 2.1), addElement("S", 16, 32, "Sulful", "VI A", "Non-metal", 2.5), addElement("Cl", 17, 35, "Chlorine", "VII A", "Halogen", 3.0), addElement("Ar", 18, 40, "Argon", "VIII A", "Noble gas", null), addElement("K", 19, 39, "Potassium", "I A", "Alkali metal", 0.8), addElement("Ca", 20, 40, "Calcium", "II A", "Alkaline earth metal", 1), addElement("Sc", 21, 45, "Scandium", "III B", "Transition metal", 1.3), addElement("Ti", 22, 48, "Titanium", "IV B", "Transition metal", 1.5), addElement("V", 23, 51, "Vanadium", "V B", "Transition metal", 1.6), addElement("Cr", 24, 52, "Chromium", "VI B", "Transition metal", 1.6), addElement("Mn", 25, 55, "Manganese", "VII B", "Transition metal", 1.5), addElement("Fe", 26, 56, "Iron", "VIII B", "Transition metal", 1.8), addElement("Co", 27, 59, "Cobalt", "VIII B", "Transition metal", 1.9), addElement("Ni", 28, 59, "Nickel", "VIII B", "Transition metal", 1.9), addElement("Cu", 29, 64, "Copper", "I B", "Transition metal", 1.9), addElement("Zn", 30, 65, "Zinc", "II B", "Transition metal", 1.6), addElement("Ga", 31, 70, "Gallium", "III A", "Metal", 1.6), addElement("Ge", 32, 73, "Germanium", "IV A", "Metalloid", 1.8), addElement("As", 33, 75, "Arsenic", "V A", "Metalloid", 2), addElement("Se", 34, 79, "Selenium", "VI A", "Non-metal", 2.4), addElement("Br", 35, 80, "Bromine", "VII A", "Halogen", 2.8), addElement("Kr", 36, 84, "Krypton", "VIII A", "Noble gas", 3), addElement("Rb", 37, 85, "Rubidium", "I A", "Alkali metal", 0.8), addElement("Sr", 38, 88, "Strontium", "II A", "Alkaline earth metal", 1), addElement("Y", 39, 89, "Yttrium", "III B", "Transition metal", 1.2), addElement("Zr", 40, 91, "Zicronium", "IV B", "Transition metal", 1.3), addElement("Nb", 41, 93, "Niobium", "V B", "Transition metal", 1.6), addElement("Mo", 42, 96, "Molybdenum", "VI B", "Transition metal", 2.2), addElement("Tc", 43, 98, "Technetium", "VII B", "Transition metal", 1.9), addElement("Ru", 44, 101, "Ruthenium", "VIII B", "Transition metal", 2.2), addElement("Rh", 45, 102, "Rhodium", "VIII B", "Transition metal", 2.3), addElement("Pd", 46, 106, "Palladium", "VIII B", "Transition metal", 2.2), addElement("Ag", 47, 108, "Silver", "I B", "Transition metal", 1.9), addElement("Cd", 48, 112, "Cadmium", "II B", "Transition metal", 1.7), addElement("In", 49, 115, "Indium", "III A", "Metal"), 1.8, addElement("Sn", 50, 119, "Tin", "IV A", "Metal", 1.8), addElement("Sb", 51, 122, "Antimony", "V A", "Metalloid", 2.1), addElement("Te", 52, 128, "Tellurium", "VI A", "Metalloid", 2.1), addElement("I", 53, 127, "Iodine", "VII A", "Halogen", 2.7), addElement("Xe", 54, 131, "Xenon", "VIII A", "Noble gas", 2.6), addElement("Cs", 55, 133, "Caesium", "I A", "Alkali metal", 0.8), addElement("Ba", 56, 137, "Barium", "II A", "Alkaline earth metal", 0.9), addElement("La", 57, 139, "Lanthanum", "III B", "Lanthanide", 1.1), addElement("Ce", 58, 140, "Cerium", "III B", "Lanthanide", 1.1), addElement("Pr", 59, 141, "Praseodymium", "III B", "Lanthanide", 1.1), addElement("Nd", 60, 144, "Neodymium", "III B", "Lanthanide", 1.1), addElement("Pm", 61, 145, "Promethium", "III B", "Lanthanide", 1.1), addElement("Sm", 62, 150, "Samarium", "III B", "Lanthanide", 1.2), addElement("Eu", 63, 152, "Europium", "III B", "Lanthanide", 1.2), addElement("Gd", 64, 157, "Gadolinium", "III B", "Lanthanide", 1.2), addElement("Tb", 65, 159, "Teribium", "III B", "Lanthanide", 1.1), addElement("Dy", 66, 163, "Dysprosium", "III B", "Lanthanide", 1.2), addElement("Ho", 67, 165, "Holmium", "III B", "Lanthanide", 1.2), addElement("Er", 68, 167, "Erbium", "III B", "Lanthanide", 1.2), addElement("Tm", 69, 169, "Thulium", "III B", "Lanthanide", 1.3), addElement("Yb", 70, 173, "Ytterbium", "III B", "Lanthanide", 1.1), addElement("Lu", 71, 175, "Lutetium", "III B", "Lanthanide", 1.3), addElement("Hf", 72, 178, "Hafnium", "IV B", "Transition metal", 1.3), addElement("Ta", 73, 181, "Tantalum", "V B", "Transition metal", 1.5), addElement("W", 74, 184, "Tungsten", "VI B", "Transition metal", 2.4), addElement("Re", 75, 186, "Rhenium", "VII B", "Transition metal", 1.9), addElement("Os", 76, 190, "Osmium", "VIII B", "Transition metal", 2.2), addElement("Ir", 77, 192, "Iridium", "VIII B", "Transition metal", 2.2), addElement("Pt", 78, 195, "Platinum", "VIII B", "Transition metal", 2.3), addElement("Au", 79, 197, "Gold", "I B", "Transition metal", 2.5), addElement("Hg", 80, 200, "Mercury", "II B", "Transition metal", 2), addElement("Tl", 81, 204, "Thalium", "III A", "Metal", 1.6), addElement("Pb", 82, 207, "Lead", "IV A", "Metal", 2.3), addElement("Bi", 83, 209, "Bismuth", "V A", "Metal", 2), addElement("Po", 84, 209, "Polonium", "VI A", "Metalloid", 2), addElement("At", 85, 210, "Astatine", "VII A", "Halogen", 2.2), addElement("Rn", 86, 222, "Radon", "VIII A", "Noble gas", 2.2), addElement("Fr", 87, 223, "Francium", "I A", "Alkali metal", 0.7), addElement("Ra", 88, 226, "Radium", "II A", "Alkaline earth metal", 0.9), addElement("Ac", 89, 227, "Actinium", "III B", "Actinide", 1.1), addElement("Th", 90, 232, "Thorium", "III B", "Actinide", 1.3), addElement("Pa", 91, 231, "Protactinium", "III B", "Actinide", 1.5), addElement("U", 92, 238, "Uranium", "III B", "Actinide", 1.4), addElement("Np", 93, 237, "Neptunium", "III B", "Actinide", 1.4), addElement("Pu", 94, 244, "Plutonium", "III B", "Actinide", 1.3), addElement("Am", 95, 243, "Americium", "III B", "Actinide", 1.1), addElement("Cm", 96, 247, "Clurium", "III B", "Actinide", 1.3), addElement("Bk", 97, 247, "Berkelium", "III B", "Actinide", 1.3), addElement("Cf", 98, 251, "Californium", "III B", "Actinide", 1.3), addElement("Es", 99, 252, "Einsteinium", "III B", "Actinide", 1.3), addElement("Fm", 100, 257, "Fermium", "III B", "Actinide", 1.3), addElement("Md", 101, 258, "Mendelevium", "III B", "Actinide", 1.3), addElement("No", 102, 259, "Nobelium", "III B", "Actinide", 1.3), addElement("Lr", 103, 262, "Lawrencium", "III B", "Actinide", 1.3), addElement("Rf", 104, 267, "Rutherfordium", "IV B", "Transition metal", null), addElement("Db", 105, 268, "Dubnium", "V B", "Transition metal", null), addElement("Sg", 106, 271, "Seaborgium", "VI B", "Transition metal", null), addElement("Bh", 107, 272, "Bohrium", "VII B", "Transition metal", null), addElement("Hs", 108, 277, "Hassium", "VIII B", "Transition metal", null), addElement("Mt", 109, 276, "Meitnerium", "VIII B", "Transition metal", null), addElement("Ds", 110, 281, "Darmstadtium", "VIII B", "Transition metal", null), addElement("Rg", 111, 280, "Roentgenium", "I B", "Transition metal", null), addElement("Cn", 112, 285, "Copernicium", "II B", "Transition metal", null), addElement("Nh", 113, 284, "Nihonium", "III A", "Metal", null), addElement("Fl", 114, 289, "Flevorium", "IV A", "Metal", null), addElement("Mc", 115, 288, "Moscovio", "V A", "Metal", null), addElement("Lv", 116, 292, "Livermorium", "VI A", "Metal", null), addElement("Ts", 117, 294, "Teneso", "VII A", "Halogen", null), addElement("Og", 118, 294, "Oganesson", "VIII A", "Noble gas, null", null)];
/**
  @param {string} simbol
  @param {number} atomic_number
  @param {number} atomic_mass
  @param {string} name
  @param {string} group
  @param {string} type
  @param {number} electronegativity
**/

function addElement(simbol, atomic_number, atomic_mass, name, group, type, electronegativity) {
  var element = {
    "simbol": simbol,
    "atomic_number": atomic_number,
    "atomic_mass": atomic_mass,
    "name": name,
    "group": group,
    "type": type,
    "electronegativity": electronegativity
  };
  return element;
}

var _default = periodicTable;
exports["default"] = _default;