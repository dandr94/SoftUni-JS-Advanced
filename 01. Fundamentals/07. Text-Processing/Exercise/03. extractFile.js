function extractFile(path){
    let lastDotIndex = path.lastIndexOf('.')
    let lastSlashIndex = path.lastIndexOf('\\')  
    let fileName = path.slice(lastSlashIndex + 1, lastDotIndex)
    let extension = path.slice(lastDotIndex + 1,)

    console.log(`File name: ${fileName}\nFile extension: ${extension}`)
    
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')