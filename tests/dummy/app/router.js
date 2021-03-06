import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo', {path: '/'});
  this.route('home', { path: 'test' });
  this.route('category', { path: '/category/:category' });
});

export default Router;
