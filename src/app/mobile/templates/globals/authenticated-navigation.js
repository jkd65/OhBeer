if (Meteor.isCordova){

  Template.authenticatedNavigationMobile.onRendered( () => {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  });

}
