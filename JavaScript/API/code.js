//  =============== Access API using XMLHttpRequest ================ //

if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else if(window.ActiveXObject) {
    try {
        retquest = new ActiveXObject('Msxml2.XMLHTTP');
    } 
    catch (e) {
        try {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        }
        catch (e) {}
    }
}




request.open('GET', 'https://url.com/some/url', true);
request.send(null);


// ========================= using fetch ========================= //


fetch('https://url.com/some/url')
    .then(function(response) {
        // Successful response :)
    })
    .catch(function(err) {
        // Error :(
    }) 