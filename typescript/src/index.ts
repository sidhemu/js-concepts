let id: number = 6;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4];

let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "test", false];

//Tuple Array
let emplyoee: [number, string][];

emplyoee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

//Union
let pid: string | number = 22;

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};
