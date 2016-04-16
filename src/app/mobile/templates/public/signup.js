import signup from '../../modules/signup';

if (Meteor.isCordova){

  Template.signupMobile.onRendered( () => {
    signup({ form: '#signup', template: Template.instance() });
  });

  Template.signupMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
