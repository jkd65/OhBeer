if(Meteor.isCordova){

  Template.orderConfirmation.onRendered(() => {
    //Session.set('orderNumber', Tickets)
  })

  Template.orderConfirmation.onCreated(() => {
    Template.instance().subscribe("barTickets", Session.get("currentBar")._id)
  })

  Template.orderConfirmation.helpers({
    orderNum() {
      console.log(Session.get('orderNumber'))
      let order = Session.get('orderNumber')
      return Tickets.findOne().orderNum
    }
  })
}
