import React, { useState } from 'react';

export default function ProfileStatusWithHoks(props) {
  // let stateWithSetState = useState(true)
  // Hook useState возвращает массив из 2-х элементов
  // let editMode = stateWithSetState[0] // 1-й элемент это значение которое принимает useState
  // let setEditMode = stateWithSetState[1] // 2-й элемент это функция которая меняет 1-е значение

  // Запишем оба возврящаемых значения в переменные с помощью деструктуризации массива

  let [editMode, setEditMode] = useState(false);

  const activateEditmode = () => {
    setEditMode(true); // Передаем новое значение для editMode
  };
  let [Status, setStatus] = useState(props.status); // Если в стейте нужны еще переменные используем еще один useState
  const deActivateEditMode = () => {
    setEditMode(false); // Передаем новое значение для editMode
    props.updateStatus(Status);
  };

  const onStatusCheing = (e) => {
    setStatus(e.currentTarget.value)
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditmode}>{props.status}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            onBlur={deActivateEditMode}
            value={Status}
            autoFocus={true}
            onChange={onStatusCheing}
          />
        </div>
      )}
    </div>
  );
}
