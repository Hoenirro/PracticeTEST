// resolvers.js code for the resolvers of the GraphQL server
const Contact = require("../models/contact");
//
const resolvers = {
	Query: {
		contacts: async () => {
			try {
				const contacts = await Contact.find();
				return contacts.map((contact) => ({
					id: contact._id.toString(), // Convert MongoDB `_id` to GraphQL `id`
					...contact.toObject(),
				}));
			} catch (error) {
				console.error("Error fetching contacts:", error);
				throw new Error("Failed to fetch contacts");
			}
		},
		contact: async (_, { id }) => {
			try {
				const contact = await Contact.findById(id);
				if (!contact) {
					throw new Error(`Contact with ID ${id} not found`);
				}
				return {
					id: contact._id.toString(), // Convert MongoDB `_id` to GraphQL `id`
					...contact.toObject(),
				};
			} catch (error) {
				console.error("Error fetching contact by ID:", error);
				throw new Error("Failed to fetch contact");
			}
		},
	},
	Mutation: {
		createContact: async (_, args) => {
			try {
				const contact = new Contact(args);
				const newContact = await contact.save();
				return {
					id: newContact._id.toString(), // Convert MongoDB `_id` to GraphQL `id`
					...newContact.toObject(),
				};
			} catch (error) {
				console.error("Error adding contact:", error);
				throw new Error("Failed to add contact");
			}
		},
		updateContact: async (_, { id, ...update }) => {
			try {
				const updatedContact = await Contact.findByIdAndUpdate(id, update, {
					new: true,
				});
				if (!updatedContact) {
					throw new Error(`Contact with ID ${id} not found`);
				}
				return {
					id: updatedContact._id.toString(), // Convert MongoDB `_id` to GraphQL `id`
					...updatedContact.toObject(),
				};
			} catch (error) {
				console.error("Error updating contact:", error);
				throw new Error("Failed to update contacts");
			}
		},
		deleteContact: async (_, { id }) => {
			try {
				const deletedContact = await Contact.findByIdAndDelete(id);
				if (!deletedContact) {
					throw new Error(`Contact with ID ${id} not found`);
				}
				return {
					id: deletedContact._id.toString(), // Convert MongoDB `_id` to GraphQL `id`
					...deletedContact.toObject(),
				};
			} catch (error) {
				console.error("Error deleting contact:", error);
				throw new Error("Failed to delete contact");
			}
		},
		deleteContactByEmail: async (_, { email }) => {
			try {
				const deletedContact = await Contact.findOneAndDelete({ email });
				if (!deletedContact) {
					throw new Error(`Contact with email ${email} not found`);
				}
				return {
					id: deletedContact._id.toString(),
					...deletedContact.toObject(),
				};
			} catch (error) {
				console.error("Error deleting contact:", error);
				throw new Error("Failed to delete contact");
			}
		},
	},
};
//
module.exports = resolvers;
