  if (Meteor.isCordova){

  Template.indexMobile.onCreated( () => {
      Template.instance().subscribe('allBars')
  })

  Template.indexMobile.helpers({
    getLocation() {
      let location = Session.get('currentLocation')
      return location
    },
    findBars() {
      let singleBar = Bars.findOne()
      console.log(singleBar)
      return Bars.find()
    }
  })

  Template.indexMobile.events({
    'click .location' (event){
      Session.set('currentLocation', Geolocation.latLng());
    }
  })


}
