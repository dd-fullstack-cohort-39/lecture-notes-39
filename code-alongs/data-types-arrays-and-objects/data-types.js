// we declare variables with 'const', 'let' and rarely 'var'

let thisIsAString = 'hello world'
console.log(thisIsAString)

let postImage = 'https://somesillycatpic.com'
let postText = 'my cat is cooler than yours'
let posterName = 'some cat lover'
let posterAvatar = 'https://somecatloveravatarimage.com'

let dogLoverImage = 'https://somesillydogpic.com'
let dogLoverText = 'my dog is cooler than yours'
let dogLoverName = 'some dog lover'
let dogLoverAvatar = 'https://somedogloveravatarimage.com'

// make an object using JSON (javascript object notation)
let catPost = {
  image: postImage,
  text: postText,
  name: posterName,
  avatar: posterAvatar
}
// make another object
let dogPost = {
  image: dogLoverImage,
  text: dogLoverText,
  name: dogLoverName,
  avatar: dogLoverAvatar
}
// console log the object
console.log(catPost)
// console log the name from the object
console.log(catPost.name)

