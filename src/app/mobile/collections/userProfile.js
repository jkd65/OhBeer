Meteor.users.allow({
  insert: () => false,
  update: () => true,
  remove: () => false
});

User = new SimpleSchema({
	// username: {
	// 	type: String,
	// 	regEx: /[a-z0-9A-Z_.]{3,20}/,
	// 	optional: true
	// },
	emails: {
		type: [Object],
		optional: true
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date
	},
	profilePicture: {
    type: String,
    optional: true
  },
  payment: {
    type: String,
    optional: true
  }
});
Meteor.users.attachSchema(User);
