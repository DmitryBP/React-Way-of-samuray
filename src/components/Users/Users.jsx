import React from 'react';
import s from './Users.module.css';
import axios from 'axios';

export default function Users(props) {
  if (props.users.length === 0) {
    // debugger;
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then((respons) => {
      props.setUsers(respons.data.items);
    });
  }

  return (
    <div>
      {props.users.map((u) => (
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
                <button onClick={() => props.unFollow(u.id)}>Follow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Unfollow</button>
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
