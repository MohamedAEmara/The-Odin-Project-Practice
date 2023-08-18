// function joinURLs(input, base) {
//     try {
//         const res = new URL(input, base).toString();
//         return res;
//     } catch (err) {
//         if(err instanceof TypeError) {
//             throw new TypeError('Invalid URL provided!');
//         }
//         throw err;
//     }
// }


// const input1 = 'https://example.com/page1';
// const base1 = 'https://example.com/';

// console.log(joinURLs(input1, base1));   // https://example.com/page1

// const invalidUrl = 'https://example.com/page2';
// const baseUrl = 12345;

// console.log(joinURLs(invalidUrl, baseUrl));   // throw type error



const wierdURL = new URL('https://測試');

console.log(wierdURL);