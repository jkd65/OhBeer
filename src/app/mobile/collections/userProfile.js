Meteor.users.allow({
  insert: () => false,
  update: () => true,
  remove: () => false
});

userProfile = new SimpleSchema({
  profilePicture: {
    type: String,
    optional: true
  },
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String
    optional: true
  },
  card: {
    type: String,
    optional: true
  },
  cvc: {
    type: String,
    optional: true
  },
  expiration: {
    type: String,
    optional: true
  },
})

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
  profile: {
    type: userProfile,
    optional: true
  }
});

Meteor.users.attachSchema(User);
