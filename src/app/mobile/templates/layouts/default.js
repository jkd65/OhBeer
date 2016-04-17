if (Meteor.isCordova){

	const handleRedirect = ( routes, redirect ) => {
		let currentRoute = FlowRouter.getRouteName();
		if ( routes.indexOf( currentRoute ) > -1 ) {
			FlowRouter.go( redirect );
			return true;
		}
	};

	Template.defaultMobile.onCreated(() => {
		Template.instance().subscribe('userMobile')
	})

	Template.defaultMobile.helpers({
		loggingIn() {
			return Meteor.loggingIn();
		},
		authenticated() {
			return !Meteor.loggingIn() && Meteor.user();
		},
		userProfilez() {
			if (typeof Meteor.user().profile.profilePicture == "undefined") {
				return true
			}
			return false
		},
		userPaymentz() {
			if (typeof Meteor.user().profile.payment == "undefined") {
				return true
			}
			return false
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
