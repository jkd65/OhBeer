import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './login.html';
import './register.html';
import './home.html';

Template.registerMobile.events ({
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
				Materialize.toast('Invalid email address', 4000);
			}
			if(!isValidPassword) {
				console.log("error");
				Materialize.toast('Password must be at least 8 characters long', 4000);
			}
		} else {
			Accounts.createUser({
				email: emailAddress,
				password: password
			}, function (error) {
				if (error) {
					console.log("error");
					Materialize.toast('Account creation failed', 4000);
				} else {
					console.log('going home!');
					FlowRouter.go('login');
				}
			});
		}
	}
});

Template.loginMobile.events ({
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
        		Materialize.toast('Email address is incorrect', 4000);
      		}
      		if (!isValidPassword) {
      			console.log("error");
        		Materialize.toast('Password is incorrect', 4000);
      		}
    	} else {
  			Meteor.loginWithPassword(emailAddress, password, function (error) {
        		if (error) {
        			console.log("error");
          			Materialize.toast('Unknown Error', 4000);
        		} else {
        			Accounts.config({
   						loginExpirationInDays: null
					}) 
        			console.log('going home!');
          			FlowRouter.go('home');
        		}
      		});
    	}
	}
})