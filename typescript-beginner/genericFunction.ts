/* Function for text */
const text = (data: string): string => {
    return data;
}

console.log(text("Hello"));

/* Function for number */
const numeric = (data: number): number => {
  return data;
};

console.log(numeric(50));

/* Function for boolean */
const status = (data: boolean): boolean => {
  return data;
};

console.log(status(true));

/* Function for generics, all types of data */
function generic<T>(data: T): T {
  return data;
};

console.log(generic(false));

export default {}