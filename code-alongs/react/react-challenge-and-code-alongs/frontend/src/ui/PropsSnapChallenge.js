import React from 'react'
import { Person } from './Person'

export function PropsSnapChallenge ({aValue, myString, people}) {
  console.log(people)
  return (
    <>
      <h2>A Value is {aValue}</h2>
      <h2>My String is {myString}</h2>
      {people.map(person => <Person person={person}/>)}
    </>
  )
}