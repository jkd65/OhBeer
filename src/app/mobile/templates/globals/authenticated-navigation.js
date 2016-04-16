if (Meteor.isCordova){

  Template.authenticatedNavigationMobile.onRendered( () => {
    $(".dropdown-button").dropdown({
      beloworigin: true
    });
  });

}
