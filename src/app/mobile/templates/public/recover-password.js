import recoverPassword from '../../modules/recover-password';

  if (Meteor.isCordova){

  Template.recoverPasswordMobile.onRendered( () => {
    recoverPassword( { form: '#recover-password', template: Template.instance() } );
  });

  Template.recoverPasswordMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
