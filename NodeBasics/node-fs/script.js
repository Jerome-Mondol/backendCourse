const fs = require("fs")

// writeFile --> Make a new file

fs.writeFile("new.txt", "This is a new file", (err) => {
    if(err) console.error(err)
    else console.log("File created successfully")
})


// appendFile --> Append text to an existing file

fs.appendFile("new.txt", "Append text", (err) => {
    if(err) console.error(err)
    else console.log("Text appended successfully")
})


// rename --> Rename a file

fs.rename("new.txt", "renamed.txt", (err) => {
    if(err) console.error(err)
    else console.log("File renamed successfully")
})


// copyFile --> Copy a file

fs.copyFile("renamed.txt", "./copy.txt", (err) => {
    if(err) console.error(err)
    else console.log("File copied successfully")
})


// readFile --> Read a file

fs.readFile("renamed.txt", (err, data) => {
    if(err) console.error(err)
    else console.log(data.toString())
})

// unlink --> Delete a file

fs.unlink("copy.txt", (err) => {
    if(err) console.error(err)
    else console.log("File deleted successfully")
})


// rmdir --> Delete a directory (empty)

fs.rmdir("./rmdir", (err) => {
    if(err) console.error(err)
    else console.log("Directory deleted successfully")
})


// rmdir --> Delete a directory (non-empty)

fs.rmdir("./rmdirwithfile", {recursive: true}, (err) => {
    if(err) console.error(err)
    else console.log("Directory deleted successfully")
})
