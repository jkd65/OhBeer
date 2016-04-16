import login from '../../modules/login';

if (Meteor.isCordova){

  Template.loginMobile.onRendered( () => {
    login( { form: '#login', template: Template.instance() } );
  });

  Template.loginMobile.events({
    'submit form': ( event ) => event.preventDefault()
  });

}
