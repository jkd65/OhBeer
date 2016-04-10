//sets up basic app metadata
//completely optional

App.info({
	id: 'com.example.keevan.ohbeer',
	name: 'ohbeer',
	description: 'drink beer bruh',
	author: 'Keevan, JP, Cameron',
	email: 'keevandance@nau.edu',
	website: 'ohbeer.com'
});

//set up resources
App.icons({
	'android': ''
	//add platforms here
});

//set up launch screens
App.launchScreens({
	'android_ldpi_portrait': 'resources/splash/splash-200x320.png'
	//'android_ldpi_landscape': '',
	//'android_mdpi_portrait': '',
	//'android_mdpi_landscape': '',
	//'android_hdpi_portrait': '',
	//'android_hdpi_landscape': '',
	//'android_xhdpi_portrait': '',
	//'android_xhdpi_landscape': ''
});

//set up Cordova preferences
App.setPreference('HideKeyboardFromAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Fullscreen', true);

//set up preferences for a particular Cordova Plugin