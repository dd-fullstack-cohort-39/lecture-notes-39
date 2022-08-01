// for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)

for(let i = 1; i <= 100; i++){
  console.log(
    (i% 3 ? '' : 'fizz ')
    +
    (i% 5 ? '' : 'buzz')
    || i
  )
}