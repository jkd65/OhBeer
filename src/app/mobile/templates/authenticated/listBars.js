if (Meteor.isCordova){

  Template.barsMobile.onCreated( () => {
      Template.instance().subscribe('allBars')
  })

  Template.barsMobile.helpers({
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

  Template.barsMobile.events({
    'click .setBarSession' (event) {
      Session.set('currentBar', Bars.findOne(event.currentTarget.id))
    }
  })

}
