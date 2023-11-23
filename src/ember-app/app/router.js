import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya4-база-клиента-l');
  this.route('i-i-s-kursovaya4-база-клиента-e',
  { path: 'i-i-s-kursovaya4-база-клиента-e/:id' });
  this.route('i-i-s-kursovaya4-база-клиента-e.new',
  { path: 'i-i-s-kursovaya4-база-клиента-e/new' });
  this.route('i-i-s-kursovaya4-покупка-l');
  this.route('i-i-s-kursovaya4-покупка-e',
  { path: 'i-i-s-kursovaya4-покупка-e/:id' });
  this.route('i-i-s-kursovaya4-покупка-e.new',
  { path: 'i-i-s-kursovaya4-покупка-e/new' });
  this.route('i-i-s-kursovaya4-ценновая-стела-l');
  this.route('i-i-s-kursovaya4-ценновая-стела-e',
  { path: 'i-i-s-kursovaya4-ценновая-стела-e/:id' });
  this.route('i-i-s-kursovaya4-ценновая-стела-e.new',
  { path: 'i-i-s-kursovaya4-ценновая-стела-e/new' });
});

export default Router;
