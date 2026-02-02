//---------- built-in Type --------------//
let age: number;
age = 5;
//age = '5'; // error age is not assinable to number

console.log('age--->', age);

// ---------------- Union Type-------------- //
let role: number | string;
role = 2;
role = '5';
// role = false; // error role is not assinable to boolean
console.log('role-->', role);

// ------------------ Array of String Type ------------ //
// let subjects: string[];
// OR
// let subjects: Array<string>;
// subjects = ['PHP', 'Javascript', 'React']; // NO ERROR
// subjects = [1, 'Python']; // error number is not assinable to string

// ------------------ Array of Union Type ------------ //
let subjects: (string | number | boolean)[];
subjects = ['PHP', 2, 3, false, true, 'React']; //NO ERROR
console.log('subjects--->', subjects);

// ------- Object Type ------ //
// ---- 1 type of syntax ----//
// const student: {
//   name: string;
//   roll: number;
//   address: string;
//   isActive: boolean;
// } = {
//   name: 'Sounik',
//   roll: 1,
//   address: 'Street 2, 1234',
//   isActive: true,
// };

// ------ custom STUDENT type ----- //
// type STUDENT = {
//   name: string;
//   roll: number;
//   address: string;
//   isActive: boolean;
// };

// ------ interface STUDENT ----- //

interface STUDENT {
  name: string;
  roll: number;
  address: string;
  isActive: boolean;
}

const student: STUDENT = {
  name: 'Sounik',
  roll: 1,
  address: 'Street 2, 1234',
  isActive: true,
};

console.log('Student--->', student);

// ----- Array of Objects ---- //

type voter = {
  name: string;
  voterId: number;
  address: string;
  isNew: boolean;
  isActive: {}; // it mease isActive must not be null or undefined
};

let voters: voter[];

voters = [
  {
    name: 'Sounik Chakraborty',
    voterId: 55658585521,
    address: 'Test City 125333',
    isNew: true,
    isActive: true,
  },
  {
    name: 'Samir Chakraborty',
    voterId: 55658585534,
    address: 'Test City 700110',
    isNew: false,
    // isActive: undefined //ERROR - Type 'undefined' is not assignable to type '{}'
    // isActive: null // EROR - Type 'null' is not assignable to type '{}'
    isActive: 'true',
  },
];

// const [voters, setVoters] = useState<voter[]>([])
console.log('voters--->', voters);

// ------ enum ----- //

// enum Role {
//   Admin,
//   Guest,
//   Staff,
// }
// const useRole: Role = Role.Admin;
// console.log('userRole--->', useRole); // OUTPUT - userRole---> 0

enum Role {
  Admin = 'Admin',
  Guest = 'Guest',
  Staff = 'Staff',
}

let userRole: Role = Role.Admin;

console.log('userRole--->', userRole); // OUTPUT - userRole---> Admin

userRole = Role.Staff;
console.log('userRole--->', userRole); // OUTPUT - userRole---> Staff
// Replacing enum with Union

// ---- Never ---- //

const throwError = (errorMessage: string): never => {
  throw new Error(errorMessage);
};

// throwError('Unexpected Value');

// ---- MUST NOT BE NULL or UNDEFINED --- //

let user: {}; //****** {} is not empty object, it means type of this variable can not be NULL or UNDEFINED **********/
user = 'sounik'; // SUCCESS
user = false; // SUCCESS
user = 1; // SUCCESS
user = null; // ERROR - Type 'null' is not assignable to type '{}'
user = undefined; // ERROR - Type 'undefined' is not assignable to type '{}'
user = []; // SUCCESS
user = {}; // SUCCESS

console.log(user);

// ----- Type Borrowing --- //

let name1 = 'Sounik';
let name2: typeof name1; // here name2 borrwing type from name1
name2 = 'Rahul';

console.log(name2);

// ----- Tuple ---- //

let foo: [number, number]; // Tuple is used to declare fixed length of array also when you know which index have which type
foo = [1, -1];
foo = [1, -1, 0]; // ERROR - Type '[number, number, number]' is not assignable to type '[number, number]'

console.log(foo);

// ---- Type Casting ---- //
// ------------------------- //

// const inputEl = document.getElementById("input-id");

// console.log(inputEl.value); // ERROR- 'inputEl' is possibly 'null'
// to overcome the above error we need to add ! at the end

// const inputEl = document.getElementById("input-id")!;
// console.log(inputEl.value); //ERROR- Property 'value' does not exist on type 'HTMLElement'
// to overcome the above error we need to do type casting
const inputEl = document.getElementById('input-id')! as HTMLInputElement;
console.log(inputEl?.value);

// ----- Record utility ---- //
// It is used when you dont know the exaxt types of a data elements/property
// *** SYNTAX - Record<KeyType, ValueType> *** //

let data: Record<string, string | number | boolean>;

data = {
  name: 'Sounik',
  roll: 1,
  isActive: false,
};

console.log(data);

// FUNCTION Type //
// SYNTAX - () => returnType

type Human = {
  firstName: string;
  lastName: string;
  getFullName: () => string; // funtion type
};

let person: Human = {
  firstName: 'Sounik',
  lastName: 'Chakraborty',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const fn = person.getFullName();
console.log(fn);

// ---- Type Unknown ---- //

// ---- || vs ?? ---- //

const input = '';

console.log('check ||--->', input || false); // OUTPUT false
console.log('check ??--->', input ?? false); // OUTPUT blank string
