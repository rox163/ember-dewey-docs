import Ember from 'ember'
import ControlsPane from 'ember-folio/components/controls-pane'
import layout from '../templates/components/property-control'

export default Ember.Component.extend({
  layout,
  classNames: ['property-control'],

  init () {
    this._super(...arguments)
    this.set('_controlsPane', this.nearestOfType(ControlsPane))
  },

  actions: {
    onButtonClick (val) {
      this.get('_controlsPane').onChange({ 'id' : this.get('label'), 'value': val})
    },
    onTextChange (event) {
      this.get('_controlsPane').onChange({'id' : this.get('label'), 'value' : event.target.value})
    }
  }
})