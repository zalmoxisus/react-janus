'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var SvgIcon = require('material-ui/lib/svg-icon');

var ActionViewStream = React.createClass({
  displayName: 'ActionViewStream',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M4 18h17v-6H4v6zM4 5v6h17V5H4z' })
    );
  }

});

module.exports = ActionViewStream;