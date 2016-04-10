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

FlowRouter.notFound = {
	action() {
		BlazeLayout.render( 'mainLayout', { yield: 'notFound' })
	}
};