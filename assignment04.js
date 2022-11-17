let Arr1 = [107, 654, 872, 409, 483, 239, 235, 987, 555, 792]

let Arr2 = [-145, -176, -52, 34, 56, 199, -2, -7, 134, 85]

let Arr3 = [
  {
    "fname": "Dave",
    "lname": "Harvy",
    "title": "Mr.",
    "suffix": "",
    "age": 48
  },
  {
    "fname": "Connie",
    "lname": "Frost",
    "title": "Mrs.",
    "suffix": "",
    "age": 49
  },
  {
    "fname": "Harriet",
    "lname": "Smith",
    "title": "",
    "suffix": "",
    "age": 23
  },
  {
    "fname": "Wilbur",
    "lname": "Crown",
    "title": "",
    "suffix": "The II",
    "age": 21
  },
  {
    "fname": "Harry",
    "lname": "Tielmans",
    "title": "",
    "suffix": "Junior",
    "age": 7
  }
];  
let years = [-100, 0, 100, 1900, 1904, 2000];

let r = [1, 4, 5, 7];

let distances = [2,4,6,8,10];

let findH = (a, b) => {
  return "The hypotenuse of " + a + " & " + b + " is: " + (Math.sqrt((a * a) + (b * b)))
};

let findQ = (a, b, c) => {
  return "The roots of " + a + ", " + b + " & " + c + " are: " + (((-1 * b) + (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a)) + " & " + (((-1 * b) - (Math.sqrt((b * b) - (4 * a * c)))) / (2 * a))
};

let findV = (r) => {
  return "The volume of a sphere with radius " + r + " is: " + ((4/3) * (r * r * r) * Math.PI)
};

let findK = (d) => {
  return d + " degrees F is " + ((5/9) * (d + 459.67)) + " degrees Kelvin"
};

let arcTPlusNum = (n) => {
  return (Math.atan(Math.PI + n))
};

let findNumPlusSquare = (n) => {
  return "The sum of " + n + " and " + n + " squared is: " + (n + (n * n))
};

let isLeapYear = (y) => {
  if (y % 4 == 0 && y > 0) {
    return true;
  }
  else {
    return false;
  }
};

let findTime = (h) => {
  return "It takes " + Math.sqrt(h / 16.0) + " seconds for an object to fall from " + h + " feet"
};

years.filter(year => isLeapYear(year)).reduce((a,b) => (a + b));


Arr3.map(person => person.fname + " " + person.lname);


for (let i = 0; i < 10; i++) {
  Arr1.reduce((a,b) => Arr1[i] * Arr2[i])
};

Arr2.filter(num => num % 2 == 0).reduce((a,b) => a + b);

for (let i = 0; i < 4; i++) {
  r.map(sphere => findV(r[i]))
};

for (let i = 0; i < 5; i++) {
  distances.map(time => findTime(distances[i]))
};

r.reduce(ans => arcTPlusNum(ans));
