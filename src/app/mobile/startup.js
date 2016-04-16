Meteor.startup(() => {
  if (Meteor.isCordova) {
    FlowRouter.go('splashMobile')
  }
})
