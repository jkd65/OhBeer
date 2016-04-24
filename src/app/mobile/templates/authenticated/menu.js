import lodash from 'lodash'
let _ = lodash

//let currentOrder = new Meteor.Collection(null)

if(Meteor.isCordova){

  Template.menuMobile.onRendered(() => {

    Session.set('currentOrder', {
      owner: Meteor.userId(),
      barId: FlowRouter.getParam('id'),
      order: [],
      tipTotal: 0
    })

    Session.set('itemList',[])
    Session.set('currentItems',{})
    Session.set('currentTotal',0)
  })

  Template.menuMobile.onCreated(() => {
    let bar = FlowRouter.getParam("id");
    Template.instance().subscribe("myMenu", bar);
  }),

  Template.menuMobile.helpers({
    barName() {
      return Session.get('currentBar')
    },
    menuItems() {
      return MenuItems.find();
    },
    categoryItems() {
      let categoryArray = [];
      MenuItems.find().forEach((item) => {
        if(categoryArray.indexOf(item.category) == -1){
          categoryArray.push(item.category);
        }
      })
      return categoryArray;
    },
    sortedItems(category) {
      return MenuItems.find({
        category: category
      })
    },
    currentQuantity(id) {
      let currentItems = Session.get('currentItems')
      if (typeof currentItems[id] != "undefined"){
        return currentItems[id]
      }
      return 0
    }
  }),

  Template.checkoutFooter.helpers({
    orderTotal() {
      return Session.get('currentTotal')
    }
  }),

  Template.currentOrder.helpers({
    itemList() {
      return Session.get('itemList')
    },
    orderTotal() {
      return Session.get('currentTotal')
    }
  }),

  Template.menuMobile.events({
    'click .add-drink' (event) {
      let itemId = event.currentTarget.parentElement.id
      let currentItems = Session.get('currentItems')
      let orderTotal = Session.get('currentTotal')
      let listItem = Session.get('itemList')

      if (currentItems[itemId]){
        currentItems[itemId] += 1
        orderTotal += parseInt(MenuItems.findOne({_id: itemId}).price)
        listItem.push(MenuItems.findOne({_id: itemId}))
      } else {
        currentItems[itemId] = 1
        orderTotal += parseInt(MenuItems.findOne({_id: itemId}).price)
        listItem.push(MenuItems.findOne({_id: itemId}))
      }

      Session.set('itemList', listItem)
      Session.set('currentTotal', orderTotal)
      Session.set('currentItems', currentItems)
    },
    'click .remove-drink' (event) {
      let itemId = event.currentTarget.parentElement.id
      let currentItems = Session.get('currentItems')
      let orderTotal = Session.get('currentTotal')
      let listItem = Session.get('itemList')

      if (currentItems[itemId] > 0){
        currentItems[itemId] -= 1
        orderTotal -= parseInt(MenuItems.findOne({_id: itemId}).price)
        listItem.pop(MenuItems.findOne({_id: itemId}))
      }

      Session.set('itemList', listItem)
      Session.set('currentTotal', orderTotal)
      Session.set('currentItems', currentItems)
    }
  })

  Template.checkoutFooter.events({
    'click .checkout-bottom' (event) {
      MaterializeModal.display({
        bodyTemplate: "currentOrder",
        submitLabel: "Submit",
        bottomSheet: true,
        callback: (err, rtn) => {
          if (rtn.submit){
            FlowRouter.go('orderConfirmation')
            let quantities = Session.get('currentItems')
            let insertDrinks = []

            _.forEach(quantities, function(value, key){
              insertDrinks.push({
                'item': key,
                'quantity': value
              })
            })
            
            Tickets.insert({
              'owner': Meteor.userId(),
              'barId': Session.get('currentBar')._id,
              'order': insertDrinks,
              'orderTotal': Session.get('currentTotal'),
              'tipTotal': 0,
              'status': 'pending',
              'orderNum': 123
            })
          }
        }
      })
    }
  })
}
