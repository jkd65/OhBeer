const publicRoutes = FlowRouter.group({
	name: 'public'
});

publicRoutes.route( '/', {
	name: 'login',
	action() {
		BlazeLayout.render("mainLayout", {content: "loginMobile"});
	}
});

publicRoutes.route( '/register', {
	name: 'register',
	action() {
		BlazeLayout.render("mainLayout", {content: "registerMobile"})
	}
})

publicRoutes.route('/home', {
	name: 'home',
	action() {
		BlazeLayout.render("mainLayout", {content: "homeMobile"});
	}
});

publicRoutes.route('/profile', {
	name: 'profile',
	action() {
		BlazeLayout.render("mainLayout", {content: "profileMobile"});
	}
});

publicRoutes.route('/order', {
	name: 'order',
	action() {
		BlazeLayout.render("mainLayout", {content: "orderMobile"});
	}
});

FlowRouter.notFound = {
	action() {
		BlazeLayout.render( 'mainLayout', { yield: 'notFound' })
	}
};