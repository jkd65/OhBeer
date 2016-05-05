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
    },
    orderPending() {
      if(Tickets.findOne().status == "pending") {
        return true
      }
      return false
    },
    orderStarted() {
      if (Tickets.findOne().status == "started") {
        return true
      }
      return false
    },
    orderDelivering() {
      if (Tickets.findOne().status == "delivering") {
        return true
      }
      return false
    },
    orderRejected() {
      if (Tickets.findOne().status == "rejected") {
        return true
      }
      return false
    },
    orderOos() {
      if (Tickets.findOne().status == "oos") {
        return true
      }
      return false
    }
  })
}

//'pending', 'started', 'delivering', 'complete', 'rejected', 'oos'
