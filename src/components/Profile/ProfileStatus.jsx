import React, { Component } from 'react';
// import s from './ProfileStatus.module.css'

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusCheing = (e) => {
    this.setState({ status: e.currentTarget.value });
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusCheing}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}
