import Ember from 'ember';

export default Ember.View.extend({
  configPanel: function() {
    var componentName = this.get('controller.configPanel');

    return this.container.lookupFactory('component:' + componentName).create({
      widget: this.get('controller.model')
    });
  }.property('controller.configPanel')
});
