type Color = "red" | "green" | "blue";
const color: Color = "blue";

type Dado = 1 | 2 | 3 | 4 | 5 | 6;
const dado: Dado = 5;

interface SuccessfulValidation {
    isValid: true;
    reason: null;
}

interface ErrorValidation {
    isValid: false;
    reason: string;
}

type ResultValidation = SuccessfulValidation | ErrorValidation;

const result: ResultValidation = {
    isValid: true,
    reason: null
}

export default {}