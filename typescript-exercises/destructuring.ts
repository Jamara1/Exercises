/* With a object */
const avenger = {
  name: "Steve",
  key: "Captain America",
  power: "Drug",
};

const exportObj = ({name, key, power}: any) => {
  console.log(name + " " + key + " " + power);
};

exportObj(avenger);


/* With a array */
const avengers: string[] = ["Captain America", "Ironman", "Thor"];

const exportArr = ([captain, iron, thor]: string[]) => {
  console.log(captain + " " + iron + " " + thor);
};

exportArr(avengers);

export default {};
