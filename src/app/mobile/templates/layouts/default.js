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
		userProfilez() {
			console.log(JSON.stringify(Meteor.user().profilePicture))
			if (!Meteor.user().profilePicture) {
				FlowRouter.go('userMobile')
			}
		},
		userPaymentz() {
			if (!Meteor.user().payment) {
				FlowRouter.go('paymentMobile')
			}
		},
		redirectAuthenticated() {
		 	return handleRedirect([
				'loginMobile',
				'signupMobile',
				'recover-passwordMobile',
				'reset-passwordMobile',
				'splashMobile'
			], '/Mobile' );
		},
		redirectPublic() {
			return handleRedirect([
				'indexMobile',
				'dashboardMobile'
			], '/splashMobile' );
		}
	});

}
