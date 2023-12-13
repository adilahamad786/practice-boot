const fileBtn = document.querySelector("#file");
const generateLink = document.querySelector("#generate");

let content = "";
let fileName = "index.html";
let type = "text/html"

fileBtn.addEventListener("click", async function () {
    let [fileHandler] = await window.showOpenFilePicker();
    let file = await fileHandler.getFile();
    let fileText = await file.text();

    let html =new DOMParser().parseFromString(fileText, "text/html");;

    console.log(html.body.querySelectorAll("[id"));

    let h2 = document.createElement("h2");
    h2.textContent = "Yes, Bro!"

    html.body.append(h2);

    content = new XMLSerializer().serializeToString(html);

    // console.log(content)
})


generateLink.addEventListener("click", function download() {
    console.log(content, type, fileName)
    // var a = document.getElementById("a");
    var file = new Blob([content], {type: type});

    // a.href = URL.createObjectURL(file);
    // a.download = fileName;

    generateLink.href = URL.createObjectURL(file);
    generateLink.download = fileName;
})




function download(data, filename, type) {
    // var file = new Blob([data], {type: type});
    // if (window.navigator.msSaveOrOpenBlob) // IE10+
    //     window.navigator.msSaveOrOpenBlob(file, filename);
    // else { // Others
    //     var a = document.createElement("a"),
    //             url = URL.createObjectURL(file);
    //     a.href = url;
    //     a.download = filename;
    //     document.body.appendChild(a);
    //     a.click();
    //     setTimeout(function() {
    //         document.body.removeChild(a);
    //         window.URL.revokeObjectURL(url);  
    //     }, 0); 
    // }
}