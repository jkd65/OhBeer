if (Meteor.isCordova){

  Template.resetPasswordMobile.onRendered( () => {
    Modules.client.resetPassword( { form: '#reset-password', template: Template.instance() } );
  });

  Template.resetPasswordMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
