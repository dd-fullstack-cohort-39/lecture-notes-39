import React from 'react'

export function Person ({person}) {
  console.log('person', person)
  return (
    <h3>{person}</h3>
  )
}