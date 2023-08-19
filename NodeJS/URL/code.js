const myRUL1 = new URL('https://example.org/foo/bar?baz');

const myRUL2 = new URL('/foo', 'https:example.org/');

console.log(myRUL1);    // href: https://example.org/foo/bar?baz
console.log(myRUL2);    // href: https://example.org/foo


// If input or base is not a valid URL ==>  A TypeError will be thrown

function joinURLs(input, base) {
    try {
        const res = new URL(input, base).toString();
        return res;
    } catch (err) {
        if(err instanceof TypeError) {
            throw new TypeError('Invalid URL provided!');
        }
        throw err;
    }
}


const input1 = 'https://example.com/page1';
const base1 = 'https://example.com/';

console.log(joinURLs(input1, base1));   // https://example.com/page1

const invalidUrl = 'https://example.com/page2';
const baseUrl = 12345;

console.log(joinURLs(invalidUrl, baseUrl));   // throw type error


//  Unicode characters appearing within the host name of input will be automatically converted to ASCII using the Punycode algorithm.

const wierdURL = new URL('https://測試');

console.log(wierdURL);      // https://xn--g6w251d/ 


// n cases where it is not known in advance if input is an absolute URL and a base is provided, 
// it is advised to validate that the origin of the URL object is what is expected.



let myURL1 = new URL('http://Example.com/', 'https://example.org/');
// http://example.com/

myURL1 = new URL('https://Example.com/', 'https://example.org/');
// https://example.com/

myURL1 = new URL('foo://Example.com/', 'https://example.org/');
// foo://Example.com/

myURL1 = new URL('http:Example.com/', 'https://example.org/');
// http://example.com/

myURL1 = new URL('https:Example.com/', 'https://example.org/');
// https://example.org/Example.com/

myURL1 = new URL('foo:Example.com/', 'https://example.org/');
// foo:Example.com/ 



// ==================================== url.hash ======================================== //

// Gets and sets the fragment portion of the URL

const urll = new URL('https://example.org/foo#bar');
console.log(urll.hash);     // #bar

urll.hash = 'test';

console.log(urll.href);     // https://example.org/foo#test



// ==================================== url.host ========================================= //
// Gets & Sets the host portion of the URL

const url1 = new URL('https://example.org:81/foo');
console.log(url1.host);     // example.org:81

url1.host = 'test.com:88';
console.log(url1);
console.log(url1.href);     // https://test.com:88/foo
console.log(url1.host);     // test.com:88


// =================================== url.href ========================================== //
// Gets & Sets serialized URL


const myURL = new URL('https://example.org/foo');
console.log(myURL.href);    // https://example.org/foo
myURL.href = 'https://facebook.com';

console.log(myURL.href);    // https://facebook.com

// Getting the value of href property is equivalent to "url.toString()"
console.log(myURL.toString());  // https://facebook.com

// Setting the value of this property to a new value is equivalent to creating a new URL object using new URL(value). 
// Each of the URL object's properties will be modified.



// If the value assigned to the href property is not a valid URL, a TypeError will be thrown.

myURL.href = 'This is an invalid URL';     // Throw invalid URL value ERR
console.log(myURL.href);
myURL.href = 'lsdfjalsdkf';
console.log(myURL.href);                   // Throw invalid URL value ERR





// =================================== url.hostname ======================================== //
// Gets & Sets the host name portion of the URL. 
// The diffence between rul.host & url.hostname --> is that url.hostname doesn't include
// the port

const urll = new URL('https://example.org:81/foo');
console.log(urll.hostname);     // example.org

// Setting the hostname does not change the port
urll.hostname = 'example.com';
console.log(urll.href);         // https://example.com:81/foo



// ===================================== rul.origin ===================================== //
// Gets the read-only serialization of the URL's origin

const urlll = new URL('https://example.org/foo/bar?baz');
console.log(urlll.origin);  // https://example.org




// ==================================== url.password ===================================== //
// Gets & Sets the password portion of the URL

const uurl = new URL('https://abc:xyz@example.com');
console.log(uurl.password);       // xyz
uurl.password = '123';
console.log(uurl.href);     // https://abc:123@example.com




// ==================================== url.pathname ====================================== //
// Gets & Sets the path portion of the URL

const urrl = new URL('https://example.org/abc/xyz?123');
urrl.pathname = '/abcdef';

console.log(urrl.href);     // https://example.org/abcdef?123



// ================================ url.port ====================================== //
// Gets & Sets the port portion of URL
// The Port may be a number in the Range [0 - 65535]

/*
    Protocol        Port
      "ftp"     |    21
      "file"    |    
      "http"    |    80
      "https"   |    443
      "ws"      |    80
      "wss"     |    443
*/

const x = new URL('https://example.org:888');
console.log(x.port);
x.port = 433;           // 443  --> numerical values converted to string first
console.log(x.port);
x.port = '433';         // 433  
console.log(x.port);
x.port = '55cd4';       // 55   -->  it takes the only leading numbers.
console.log(x.port);
x.port = 'aaaa';        // 55   -->  as the previous port, as this is an invalid value --> ignored.. 
console.log(x.port);
x.port = 1111.44;       // Takes only the integer value 
console.log(x.port);
x.port = 10000000;      // Out of range > 65535
console.log(x.port);    
x.port = 65535;         // 65535
console.log(x.port);    
x.port = 1e19;          // 10000000000000000000, will be range-checked as described below
console.log(x.port);
x.port = 1e4;           // 10000
console.log(x.port);    



// =================================== url.protocol ======================================= //

const y = new URL('https://example.org');
console.log(y.protocol);        // https:

y.protocol = 'ftp:';
console.log(y.href);    // ftp://example.org/
y.protocol = 'ftp'; 
console.log(y.href)     // ftp://example.org/


// Changing from http to https works..
const u = new URL('http://example.org');
u.protocol = 'https';
console.log(u.href);
// https://example.org/ 


// However, changing from http to a hypothetical fish protocol does not because the new protocol is not special.

const v = new URL('http://example.org');
v.protocol = 'fish';
console.log(v.href);
// http://example.org/


// Likewise, changing from a non-special protocol to a special protocol is also not permitted:

const z = new URL('fish://example.org');
z.protocol = 'http';
console.log(z.href);    // fish://example.org


// ========================================= url.search ==================================== //
// Gets and sets the serialized query portion of the URL.

const a = new URL('https://example.org/abc?123');
console.log(a.search);  // 123
a.search = 'cat';
console.log(a.href);    // https://example.org/abc?cat






// ================================= url.searchParams =================================== //

const b = new URL('https://example.org/abc?foo=~bar');
console.log(b.search);      // foo=~bar

// Modify the URL via searchParams..
b.searchParams.sort();

console.log(b.search);      // ?foo=%7Ebar



// ================================ url.username ==================================== //
// Gets & Sets the username portion property will be percent-encoded

const test = new URL('https://abc:xyz@example.com');
console.log(test.username);

test.username = '1234';
console.log(test.href);         // https://1234:xyz@example.com/

console.log(test.toString());   // https://1234:xyz@example.com/
console.log(test.toJSON());     // https://1234:xyz@example.com/



const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org')
];

console.log(myURLs);        // As json objects
console.log(JSON.stringify(myURLs));    // as array of strings


// ====================== URL.creatObjectURL(blob) =========================== //
const blob = new Blob(['hello']);
console.log(blob);



// ==================== URLSearchParams ======================= //
const haha = new URL('https://example.org/?abc=123');
console.log(haha.searchParams.get('abc'));      // 123t

console.log(haha.searchParams.get('xyz'));      // null

haha.searchParams.append('xyz', 'test');    
console.log(haha.href);     // https://example.org/?abc=123&xyz=test

haha.searchParams.delete('abc');
console.log(haha.href);     // https://example.org/?xyz=test

haha.searchParams.set('xyz', 'mohamed');
console.log(haha.href);     // https://example.org/?xyz=mohamed




