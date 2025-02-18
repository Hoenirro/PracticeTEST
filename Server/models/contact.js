// contact.js
// Load the module dependencies
const mongoose = require("mongoose"),
	Schema = mongoose.Schema;
// Define a new 'ContactSchema'
const ContactSchema = new Schema({
	contactId: { type: String, unique: true, required: true },
	name: String,
	email: String,
	phone: String,
	address: String,
});
// Create the 'Contact' model out of the 'ContactSchema'
const Contact = mongoose.model("Contact", ContactSchema);

// Export the 'Contact' model
module.exports = Contact;
