const fs = require("fs");

function testAppendFile() {
    const fileData = "\nHello world testing file\n";
    const cb = (error) => {
        if (error) {
            console.log("creating file failed");
            console.log(error);
            ///settimeout()
        }
    };
    fs.appendFile("testfile.txt", fileData, cb)
}
testAppendFile();

function createFile() {
    let data = ""
    for (let i = 1; i <= 10000; i++) {
        data += `got you ${i}\n`
    }
    fs.writeFile("currentdate.txt", data, (err) => {
        if (err) {
            console.log("Error creating file");
            console.log(err);
            return;
        }
        console.log("file created");
    });
}

createFile();

function createAndWriteFile() {
    let fileData = ""
    const fileName = `${new Date().toDateString()}.txt`
    const cb = (error) => {}
    for (let i = 0; i < 500000; i++) {
        fileData = fileData + `\nGot you ${i}\n`
    }

    fs.writeFile(fileName,fileData,cb)
}

function main() {
    for (let i = 0; i < 200; i++) {
        createAndWriteFile()
    }
}
main();