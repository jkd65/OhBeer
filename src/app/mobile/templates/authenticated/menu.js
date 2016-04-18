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

    Session.set('currentItems',{})
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
      console.log(MenuItems.find().fetch())
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
  })

  Template.menuMobile.events({
    'click .add-drink' (event) {
      let itemId = event.currentTarget.parentElement.id
      let currentItems = Session.get('currentItems')

      if (currentItems[itemId]){
        currentItems[itemId] += 1
      } else {
        currentItems[itemId] = 1
      }

      Session.set('currentItems', currentItems)
    },
    'click .remove-drink' (event) {
      let itemId = event.currentTarget.parentElement.id
      let currentItems = Session.get('currentItems')

      if (currentItems[itemId] > 0){
        currentItems[itemId] -= 1
      }
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
          }
        }
      })
    }
  })
}
