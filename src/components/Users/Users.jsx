import React, { Component } from 'react';
import s from './Users.module.css';
import axios from 'axios';

export default class Users extends Component {
  
  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((respons) => {
      this.props.setUsers(respons.data.items);
    });
  }
  render() {
    return (
      <div>
        {/* <button onClick={() => this.getUsers()}>getUsers</button> */}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.photo}
                  src={
                    u.photos.small
                      ? u.photos.small
                      : 'https://www.super-parrain.com/images/users/2021/03/21/jipem-94cfc61a0a537369748a409a8587df46.png'
                  }
                  alt="box"
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unFollow(u.id)}>Follow</button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>Unfollow</button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                {/* <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div> */}
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
