import React, { Component } from 'react'
import Budget from './Budget';
import Remaining from './Remaining';

export default class ControlBudget extends Component {
  render() {
    return (
      <div>
        <Budget
            budget={ this.props.budget }
        />
        <Remaining
            budget={ this.props.budget }
            remaining={ this.props.remaining }
        />
      </div>
    )
  }
}
