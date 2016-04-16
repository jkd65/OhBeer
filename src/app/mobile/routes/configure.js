if (Meteor.isCordova){

  FlowRouter.notFound = {
    action() {
      BlazeLayout.render( 'default', { yield: 'notFound' } );
    }
  };

}
