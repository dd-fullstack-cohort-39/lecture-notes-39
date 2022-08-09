let username: string = 'Fred'
let userAge: number = 22
let adult: boolean = true

function addNumbers (number1: number, number2: number): number {
  return number1 + number2
}

function addTwoNumbers (number1: number, number2: number): void {
  console.log(number1 + number2)
}

interface Profile{
  profileId: string,
  profileName: string,
  profileImageUrl: string,
  profileAge: number,
}

let jim: Profile = {
  profileId: 'ajsddhgfukasdhfikujjashdfjkasdfh',
  profileName: 'Jimmy McGill',
  profileImageUrl: 'https://kasjhfkljasdhf.com',
  profileAge: 30,
}