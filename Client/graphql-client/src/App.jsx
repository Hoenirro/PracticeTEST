import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import ContactList from "./components/ContactList";
import CreateContact from "./components/createContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";

function App() {
	return (
		<Router>
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="home">React Client For GraphQL API</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to="/home">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/createcontact">
								Create Contact
							</Nav.Link>
							<Nav.Link as={Link} to="/contactlist">
								Contact List
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<div>
				<Routes>
					<Route index element={<Home />} />
					<Route path="home" element={<Home />} />
					<Route path="contactlist" element={<ContactList />} />
					<Route path="createcontact" element={<CreateContact />} />
					<Route path="editcontact/:id" element={<EditContact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
