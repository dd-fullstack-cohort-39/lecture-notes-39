import React from "react"
// import { PropsSnapChallenge } from './PropsSnapChallenge'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import image1 from '../images/logo512.png'

export function Home() {
	// const people = ['Fred', 'Sue', 'Bob', 'Mary']

	return (
		<>
			<Container className='bg-secondary rounded p-5 my-5'>
				<h1>Hello World</h1>
				<p>Pork belly t-bone cupidatat sirloin biltong pariatur spare ribs short loin chicken fugiat adipisicing. Doner drumstick biltong, officia ad ham sirloin rump. Chicken quis nisi drumstick incididunt ball tip proident.</p>
				<Button variant="primary" size="lg">Large</Button>
			</Container>

			<div className="bg-secondary py-5">
				<Container>
					<Row className="g-5">
						<Col lg={2}>
							<Image fluid className="d-block mx-auto" src={image1} alt="react is awesome"/>
						</Col>
						<Col lg={10}>
							<p>Jowl strip steak ut tri-tip et. Dolor pork belly in nisi, cillum fugiat shoulder sunt burgdoggen pig. Ipsum ut adipisicing tail, beef shank boudin andouille pancetta aliquip laboris t-bone bresaola ball tip.</p>
							<p>Enim pariatur pastrami spare ribs cow rump ipsum. In meatloaf ut ut cupim pariatur kevin veniam frankfurter. Anim ham alcatra, leberkas quis officia sed t-bone cow jowl elit aute strip steak. Cupim voluptate ham turkey, dolor boudin brisket tenderloin.</p>
						</Col>
					</Row>
				</Container>
			</div>

<Container className="my-5">
	<Row className="g-5">
		<Col lg={3}>
			<Image fluid className="rounded-circle d-block mx-auto" src="http://www.fillmurray.com/350/350" alt="more fill"/>
			<p className="bg-secondary border border-dark rounded p-3 mt-4">Beef ribs dolor rump alcatra in capicola short
				ribs frankfurter jerky boudin. Drumstick boudin consequat chuck cupim magna ex pariatur. Qui irure pancetta
				flank proident consequat biltong excepteur cow jowl pork belly pig ribeye tail.</p>
		</Col>
		<Col lg={3}>
			<Image fluid className="rounded-circle d-block mx-auto" src="http://www.fillmurray.com/350/350" alt="more fill"/>
			<p className="bg-secondary border border-dark rounded p-3 mt-4">Beef ribs dolor rump alcatra in capicola short
				ribs frankfurter jerky boudin. Drumstick boudin consequat chuck cupim magna ex pariatur. Qui irure pancetta
				flank proident consequat biltong excepteur cow jowl pork belly pig ribeye tail.</p>
		</Col>
		<Col lg={3}>
			<Image fluid className="rounded-circle d-block mx-auto" src="http://www.fillmurray.com/350/350" alt="more fill"/>
			<p className="bg-secondary border border-dark rounded p-3 mt-4">Beef ribs dolor rump alcatra in capicola short
				ribs frankfurter jerky boudin. Drumstick boudin consequat chuck cupim magna ex pariatur. Qui irure pancetta
				flank proident consequat biltong excepteur cow jowl pork belly pig ribeye tail.</p>
		</Col>
		<Col lg={3}>
			<Image fluid className="rounded-circle d-block mx-auto" src="http://www.fillmurray.com/350/350" alt="more fill"/>
			<p className="bg-secondary border border-dark rounded p-3 mt-4">Beef ribs dolor rump alcatra in capicola short
				ribs frankfurter jerky boudin. Drumstick boudin consequat chuck cupim magna ex pariatur. Qui irure pancetta
				flank proident consequat biltong excepteur cow jowl pork belly pig ribeye tail.</p>
		</Col>
	</Row>
</Container>




			{/*<PropsSnapChallenge aValue={8} myString='bla bla' people={people}/>*/}
			{/*/!*same as above*!/*/}
			{/*/!*{PropsSnapChallenge({aValue: 8,myString:'bla bla', people})}*!/*/}
			{/*<a href='/pizza'>go to pizza</a>*/}
		</>
	)
}