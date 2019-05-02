import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('p');
  this.route('meet');
  this.route('page/homebrew-meet', { path: '/homebrew-meet'});
  this.route('404', { path: '/*path'});
});

export default Router;
