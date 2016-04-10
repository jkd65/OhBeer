import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './login.html';
import './register.html';
import './home.html'

Template.registerMobile.events({
	'submit .sign-up-form' : function (event, template) {
		event.preventDefault();

		var $form = $(event.currentTarget);
		var $emailInput = $form.find('.email-address-input').eq(0);
		var $passwordInput = $form.find('.password-input').eq(0);

		var emailAddress = $emailInput.val() || '';
		var password = $passwordInput.val() || '';

		//trim entered email
		emailAddress = emailAddress.replace(/^\s*|\s*$/g, '');
		password = password.replace(/^\s*|\s*$/g, '');

		//validate email and password
		var isValidEmail = checkEmailIsValid(emailAddress);
		var isValidPassword = checkPasswordIsValid(password);

		if( !isValidEmail || !isValidPassword) {
			if(!isValidEmail) {
				console.log("error");
				sAlert.error('Invalid email address');
			}
			if(!isValidPassword) {
				console.log("error");
				sAlert.error('Your password must be at least 8 characters long');
			}
		} else {
			Accounts.createUser({
				email: emailAddress,
				password: password
			}, function (error) {
				if (error) {
					console.log("error");
					sAlert.error('Account creation failed');
				} else {
					console.log('going home!');
					FlowRouter.go('home');
				}
			});
		}
	}
});

Template.loginMobile.events({
	'submit .login-form': function(event, template) {
		event.preventDefault();

		var $form = $(event.currentTarget);
		var $emailInput = $form.find('.email-address-input').eq(0);
		var $passwordInput = $form.find('.password-input').eq(0);

		var emailAddress = $emailInput.val() || '';
		var password = $passwordInput.val() || '';

		//trim email/passord
		emailAddress = emailAddress.replace(/^\s*|\s*$/g, '');
		password = password.replace(/^\s*|\s*$/g, '');

		//validate email and password
		var isValidEmail = checkEmailIsValid(emailAddress);
		var isValidPassword = checkPasswordIsValid(password);

		if (!isValidEmail || !isValidPassword) {
      		if (!isValidEmail) {
      			console.log("error");
        		sAlert.error('Invalid email address');
      		}
      		if (!isValidPassword) {
      			console.log("error");
        		sAlert.error('Your password must be at least 8 characters long');
      		}
    	} else {
  			Meteor.loginWithPassword(emailAddress, password, function (error) {
        		if (error) {
        			console.log("error");
          			sAlert.error('Account login failed for unknown reasons :(');
        		} else {
          			Router.go('homeMobile');
        		}
      		});
    	}
	}
})