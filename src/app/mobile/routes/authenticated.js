if (Meteor.isCordova){

  const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

  authenticatedRoutes.route( '/Mobile', {
    name: 'indexMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'indexMobile' } );
    }
  });

  authenticatedRoutes.route( '/user', {
    name: 'userMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'userMobile' } );
    }
  });

  authenticatedRoutes.route( '/payment', {
    name: 'paymentMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'paymentMobile' } );
    }
  });

  authenticatedRoutes.route( '/dashboardMobile', {
    name: 'dashboardMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'dashboardMobile' } );
    }
  });

}
