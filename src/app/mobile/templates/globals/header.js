if (Meteor.isCordova){

  Template.headerMobile.helpers({
      brandLink() {
          let login = FlowRouter.path('splash'),
              index = FlowRouter.path('index');
          return !Meteor.loggingIn() && !Meteor.userId() ? login : index;
      }
  });

  Template.headerMobile.events({
      'click .logout' (event) {
          event.preventDefault();

          Meteor.logout((error) => {
              if (error) {
                  Bert.alert(error.reason, 'warning');
              } else {
                  Bert.alert('Logged out!', 'success');
              }
          });
      }
  });

}
