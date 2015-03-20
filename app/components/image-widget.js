import BaseWidgetComponent from './base-widget';
import layout from '../templates/components/image-widget';

export default BaseWidgetComponent.extend({
  layout: layout,
  configPanel: function() {
    return 'image-config';
  }.property(),
  srcUrl: 'http://cdn.shopify.com/s/files/1/0154/2777/products/ember-hamster-detail-eb_1024x1024.png?v=1398710813'
});
