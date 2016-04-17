if (Meteor.isCordova){

  FlowRouter.notFound = {
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'notFound' } );
    }
  };

}
