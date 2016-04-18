if(Meteor.isCordova){

  Template.menuMobile.onRendered(() => {
    $('.collapsible').collapsible({
      accordion : true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
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
    }
  })
}
