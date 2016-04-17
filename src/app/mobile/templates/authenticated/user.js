import faker from 'faker';

if (Meteor.isCordova) {

  Template.userMobile.onRendered( () => {
    Session.set("profilePicture", faker.image.avatar());
  })

  Template.userMobile.helpers({
    fakeData(){
      return Session.get("profilePicture");
    }
  })

  Template.userMobile.events({
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
