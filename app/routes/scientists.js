import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Bill Nye', 'Mae Jemison', 'Neils Bohr']
  }
});
