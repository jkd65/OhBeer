import recoverPassword from '../../modules/recover-password';

  if (Meteor.isCordova){

  Template.recoverPassword.onRendered( () => {
    recoverPassword( { form: '#recover-password', template: Template.instance() } );
  });

  Template.recoverPassword.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
