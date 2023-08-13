let arr = [1, 2, 3, 5, 0, 100];

arr.forEach(number => console.log(number));

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

console.log(dbHost);