import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './home.html';

Template.homeMobile.events ({
	'submit .location-form' : function (event, template) {
		event.preventDefault();

		var $form = $(event.currentTarget);
		var $cityInput = $form.find('.city-input').eq(0);
		var $stateInput = $form.find('.state-input').eq(0);
		var $zipcodeInput = $form.find('.zipcode-input').eq(0);

		var city = $cityInput.val() || '';
		var state = $stateInput.val() || '';
		var zipcode = $zipcodeInput.val() || '';

		city = city.replace(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, '');
		state = state.replace(/^[A-Z]{2}$/, '');
		zipcode = zipcode.replace(/\d{5}/, '');

		if (city==null || state==null || zipcode==null) {
			if(city==null) {
				console.log("city is null");
			}
			if(state==null) {
				console.log("state is null");
			}
			if(zipcode==null) {
				console.log("zipcode is null");
			} else {
				console.log("success");
			}
		}
	}
});