import resetPassword from '../../modules/reset-password';

if (Meteor.isCordova){

  Template.resetPasswordMobile.onRendered( () => {
    resetPassword( { form: '#reset-password', template: Template.instance() } );
  });

  Template.resetPasswordMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
