import Route from '@ember/routing/route';

export default Route.extend({
  init() {
    this._super(...arguments);

    var meet = this.get('hombrew-meet');
    this.set('meetId', `compontnet-id${hombrew-meet}`);
  }
});
