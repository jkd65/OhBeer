  if (Meteor.isCordova){

  Template.indexMobile.onRendered( () => {
  })

  Template.indexMobile.helpers({
    getLocation() {
      let location = Session.get('currentLocation')
      return location
    }
  })

  Template.indexMobile.events({
    'click .location' (event){
      Session.set('currentLocation', Geolocation.latLng());
    }
  })


}
