if (Meteor.isCordova){

  Template.loginMobile.onRendered( () => {
    Modules.client.login( { form: '#login', template: Template.instance() } );
  });

  Template.loginMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
