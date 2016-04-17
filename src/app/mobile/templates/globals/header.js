if (Meteor.isCordova){

  Template.headerMobile.helpers({
      brandLink() {
          let login = FlowRouter.path('splashMobile'),
              index = FlowRouter.path('indexMobile');
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

  Template.headerMobile.onRendered( () => {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  });

}
