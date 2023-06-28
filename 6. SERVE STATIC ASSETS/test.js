// function findContentType(url){
//     const array = url.split('/')
//     const file = array[array.length - 1]
//     const fileParts = file.split('.')
//     const fileExtension = fileParts[fileParts.length - 1]

//     return fileExtension
// }

// console.log(findContentType('/assets/applications.css'))


function changeUrl(url){
    const array = url.split('/')
    array.shift()
    return array.join('/')

}
console.log(changeUrl('static/css/Style.css'))
console.log(changeUrl('apple/css/Style.css'))
console.log(changeUrl('static/asas/Style.css'))
