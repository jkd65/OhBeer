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

  authenticatedRoutes.route( '/bars', {
    name: 'barsMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'barsMobile' } );
    }
  });

  authenticatedRoutes.route( '/bars/:id', {
    name: 'menuMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', {yield: 'menuMobile', fixedFooter: 'checkoutFooter' } );
    }
  })

  authenticatedRoutes.route('/order-confirmation', {
    name: 'orderConfirmation',
    action() {
      BlazeLayout.render('defaultMobile', {yield: 'orderConfirmation'})
    }
  })

}
