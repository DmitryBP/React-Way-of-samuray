import React, { Component } from 'react';
import s from '../Music.module.css';

export default class MusicTag extends Component {
  state = {
    editMode: false,
    tag: this.props.tag,
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.upDateTag(this.state.tag)
  };
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input
            onChange={(e) => this.setState({ tag: e.target.value })}
            value={this.state.teg}
            onBlur={this.deactivateEditMode}
            autoFocus={true}
            type="text"
          />
        ) : (
          <span className={s.tag} onDoubleClick={this.activateEditMode}>
            {this.state.tag}
          </span>
        )}
      </div>
    );
  }
}
