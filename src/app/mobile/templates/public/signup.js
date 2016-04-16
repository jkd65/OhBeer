if (Meteor.isCordova){

  Template.signupMobile.onRendered( () => {
    Modules.client.signup({ form: '#signup', template: Template.instance() });
  });

  Template.signupMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
