import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

// Mutation to add a contact
const ADD_CONTACT = gql`
	mutation AddContact(
		$contactId: String!
		$name: String!
		$email: String!
		$phone: String!
		$address: String!
	) {
		createContact(
			contactId: $contactId
			name: $name
			email: $email
			phone: $phone
			address: $address
		) {
			id
			contactId
			name
		}
	}
`;

function CreateContact() {
	let navigate = useNavigate();
	const [addContact] = useMutation(ADD_CONTACT);
	const [contactId, setContactId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addContact({ variables: { contactId, name, email, phone, address } });
		setContactId("");
		setName("");
		setEmail("");
		setPhone("");
		setAddress("");
		navigate("/contactlist");
	};

	return (
		<Container>
			<h2>Add Contact</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm={2}>
						Contact ID
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Contact ID"
							value={contactId}
							onChange={(e) => setContactId(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm={2}>
						Name
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm={2}>
						Email
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="email"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm={2}>
						Phone
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className="mb-3">
					<Form.Label column sm={2}>
						Address
					</Form.Label>
					<Col sm={10}>
						<Form.Control
							type="text"
							placeholder="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</Col>
				</Form.Group>

				<Button variant="primary" type="submit">
					Add Contact
				</Button>
			</Form>
		</Container>
	);
}

export default CreateContact;
