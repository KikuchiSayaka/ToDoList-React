import React from 'react';

const style = {
  backgroundColor: '#f7e1ea',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

export const CompleteTodos = (props) => {

  const {todos, onClickBack} = props;

  return (
    <div style={style}>
    <p className="title">未完了のToDo</p>
    <ul>
    {todos.map((todo, index) => {
      return(
      <div className="list-row">
        <li>uuuuuuu</li>
        <button  onClick={()=>onClickBack(index)}>未完了へ戻す</button>
      </div>
      );
    })}
    </ul>
  </div>
  )
}