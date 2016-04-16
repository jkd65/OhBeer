if (Meteor.isCordova){

  Template.indexMobile.onCreated( () => {
    Template.instance().subscribe( 'index' );
  });

}
