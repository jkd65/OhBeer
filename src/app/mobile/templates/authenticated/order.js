if(Meteor.isCordova){

  Template.orderConfirmation.onRendered(() => {
    //Session.set('orderNumber', Tickets)
  })

  Template.orderConfirmation.onCreated(() => {
    Template.instance().subscribe("barTickets", Session.get("currentBar")._id)
  })

  Template.orderConfirmation.helpers({
    orderNum() {
      return Tickets.findOne().orderNum
    },
    orderStatus() {
      return Tickets.findOne().status
    },
    orderComplete() {
      if (Tickets.findOne().status == "complete") {
        return true
      }
      return false
    }
  })
}
