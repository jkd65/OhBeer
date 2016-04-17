if (Meteor.isCordova){

  Template.authenticatedNavigationMobile.onRendered( () => {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  });

  Template.authenticatedNavigationMobile.events({
    'click .logout' (event) {
      event.preventDefault()
      Meteor.logout()
    }
  })

}
