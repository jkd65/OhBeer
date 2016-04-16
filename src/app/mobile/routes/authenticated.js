if (Meteor.isCordova){

  const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

  authenticatedRoutes.route( '/', {
    name: 'indexMobile',
    action() {
      BlazeLayout.render( 'default', { yield: 'index' } );
    }
  });

  authenticatedRoutes.route( '/dashboard', {
    name: 'dashboard',
    action() {
      BlazeLayout.render( 'default', { yield: 'dashboard' } );
    }
  });

}
