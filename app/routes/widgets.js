import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this._super();

    this.render('config', {
      outlet: 'rightPane'
    });
  },

  actions: {
    selectWidget: function(widget) {
      this.controllerFor('config').set('model', widget);
    }
  }
});
