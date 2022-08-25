import React from "react"
import { PropsSnapChallenge } from './PropsSnapChallenge'

export function Home() {
	const people = ['Fred', 'Sue', 'Bob', 'Mary']

	return (
		<>
			<h1>Home Page</h1>
			<PropsSnapChallenge aValue={8} myString='bla bla' people={people}/>
			{/*same as above*/}
			{/*{PropsSnapChallenge({aValue: 8,myString:'bla bla', people})}*/}
			<a href='/pizza'>go to pizza</a>
		</>
	)
}