/* Get the value of the export.ts file */

/* Individual imports */
import { title, Human, show } from "./export";

/* Impoot a specific parameter send from export.ts */
import People from "./export";

/* Import all */
import * as exportPackage from './export';

console.log(exportPackage.title);

const human: exportPackage.Human = { name: "Manuel" };

exportPackage.show("Show");

const people = new People('Johan', 22, 1.70);
console.log(people.name);