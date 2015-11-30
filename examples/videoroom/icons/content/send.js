'use strict';

var React = require('react/addons');
var PureRenderMixin = React.addons.PureRenderMixin;
var SvgIcon = require('material-ui/lib/svg-icon');

var ContentSend = React.createClass({
  displayName: 'ContentSend',

  mixins: [PureRenderMixin],

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: 'M2.01 21L23 12 2.01 3 2 10l15 2-15 2z' })
    );
  }

});

module.exports = ContentSend;