import faker from 'faker';

if (Meteor.isCordova) {

  Template.userProfile.onRendered( () => {
    Session.set("profilePicture", faker.image.avatar());
  })

  Template.userProfile.helpers({
    fakeData(){
      return Session.get("profilePicture");
    }
  })

  Template.userProfile.events({
    'click .newImage' (event) {
      Session.set("profilePicture", faker.image.avatar());
    },

    'click .saveImage' (event) {
      Meteor.users.update(Meteor.userId(), {
        $set: {
          "profile.profilePicture": Session.get("profilePicture")
        }
      });
    }
  })

}
