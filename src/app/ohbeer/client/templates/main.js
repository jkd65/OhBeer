import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.mainLayout.onRendered(function(){
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});