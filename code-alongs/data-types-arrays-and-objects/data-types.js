// we declare variables with 'const', 'let' and rarely 'var'

let thisIsAString = 'hello world'
console.log(thisIsAString)
console.log(thisIsAString.toUpperCase())

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
console.table(catPost)

// arrays
let myArray = [7, 4, 12, 8]
console.log(myArray)
console.log(myArray[0])
console.log(myArray[2])

let myArrayOfKids = ['Mayla', 'Yuri', 'Adri']
console.table(myArrayOfKids)
console.log(myArrayOfKids[2])

let arrayOfPosts = [
  catPost,
  dogPost
]

console.log(arrayOfPosts)
console.log(arrayOfPosts[1])
console.log(arrayOfPosts[1].avatar)

arrayOfPosts.forEach(post => console.log(post.name))