if (Meteor.isCordova){

  const publicRoutes = FlowRouter.group({
    name: 'publicMobile'
  });

  publicRoutes.route( '/splashMobile', {
    name: 'splashMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'splashMobile' } );
    }
  });

  publicRoutes.route( '/signupMobile', {
    name: 'signupMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'signupMobile' } );
    }
  });

  publicRoutes.route( '/loginMobile', {
    name: 'loginMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'loginMobile' } );
    }
  });

  publicRoutes.route( '/recover-passwordMobile', {
    name: 'recover-passwordMobile',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'recoverPasswordMobile' } );
    }
  });

  publicRoutes.route( '/reset-passwordMobile/:token', {
    name: 'reset-password',
    action() {
      BlazeLayout.render( 'defaultMobile', { yield: 'resetPasswordMobile' } );
    }
  });

}
