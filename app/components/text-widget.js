import layout from '../templates/components/text-widget';
import BaseWidgetComponent from './base-widget';

export default BaseWidgetComponent.extend({
  layout: layout,
  configPanel: function() {
    return 'text-config';
  }.property(),
  myText: 'some text'
});
