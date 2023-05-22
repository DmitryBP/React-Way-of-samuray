import React from 'react';
import { NavLink } from 'react-router-dom';
import { followRequestedUser, unfollowRequestedUser} from '../../api/api';
import s from './Users.module.css';

export default function Users(props) {
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {/* Пагинация */}
      <div className={s.pagination}>
        {pages.map((p) => {
          return p === props.currentPage ? (
            <div className={`${s.carentPage} ${s.pageNumber}`}>{p}</div>
            ) : (
              <div onClick={() => props.onPageRender(p)} className={s.pageNumber}>
              {p}
            </div>
          );
        })}
      </div>
      {/* Рендеринг Юзеров */}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  className={s.photo}
                  src={
                    u.photos.small
                    ? u.photos.small
                    : 'https://www.super-parrain.com/images/users/2021/03/21/jipem-94cfc61a0a537369748a409a8587df46.png'
                  }
                  alt="box"
                  />
              </NavLink>
            </div>
            <div>
              {/* Кнопка Followed / Unfollowed */}
              {u.followed ? (
                <button
                onClick={() => {
                  unfollowRequestedUser(u.id).then((respons) => {
                      if (respons.data.resultCode === 0) {
                        props.unFollow(u.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  onClick={() => {
                      followRequestedUser(u.id).then((respons) => {
                        if (respons.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
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
