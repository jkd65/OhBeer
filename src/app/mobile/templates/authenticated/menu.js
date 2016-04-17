if(Meteor.isCordova){

  Template.menuMobile.onCreated(() => {
    let bar = FlowRouter.getParam("id");
    Template.instance().subscribe("myMenu", bar);
  }),

  Template.menuMobile.helpers({
    menuItems() {
      return MenuItems.find();
    }
  })
}
