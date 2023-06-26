// This is an example for limiting file size before it uploads.


// The JavaScript reads the file selected, uses the File.size() method to get its size,
// compares it to the (hard coded) limit, and calls the Constraint API to inform the browser if there is a violation:


function checkFileSize() {
    const FS = document.getElementById("FS");
    const files = FS.files;

    if(files.length > 0) {
        if(files[0].size > 75 * 1024) {
            FS.setCustomValidity("The selected file must not be larger than 75 kB");
            return;
        }
    }

    FS.setCustomValidity("");
}




window.onload = () => {
    document.getElementById("FS").onchange = checkFileSize;
};