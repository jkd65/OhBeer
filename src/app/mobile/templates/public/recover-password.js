if (Meteor.isCordova){

  Template.recoverPasswordMobile.onRendered( () => {
    Modules.client.recoverPassword( { form: '#recover-password', template: Template.instance() } );
  });

  Template.recoverPasswordMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
