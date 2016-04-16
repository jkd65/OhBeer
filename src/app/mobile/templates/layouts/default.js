if (Meteor.isCordova){

	const handleRedirect = ( routes, redirect ) => {
		let currentRoute = FlowRouter.getRouteName();
		if ( routes.indexOf( currentRoute ) > -1 ) {
			FlowRouter.go( redirect );
			return true;
		}
	};

	Template.defaultMobile.helpers({
		loggingIn() {
			return Meteor.loggingIn();
		},
		authenticated() {
			return !Meteor.loggingIn() && Meteor.user();
		},
		redirectAuthenticated() {
		 	return handleRedirect([
				'loginMobile',
				'signupMobile',
				'recover-passwordMobile',
				'reset-passwordMobile',
				'splashMobile'
			], '/' );
		},
		redirectPublic() {
			return handleRedirect([
				'indexMobile',
				'dashboardMobile'
			], '/splash' );
		}
	});

}
