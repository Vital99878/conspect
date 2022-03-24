import React, { useEffect, useLayoutEffect } from 'react'
import { TodoStatus } from '../../../../components/Todos/models/index.model'
import { Singleton } from './singleton'
import '../../../../index.scss'
import { SingletonMethods } from './SingletonMethods'
import { useSingletonMethods } from './useSingletonMethods'

const t = { id: Math.random(), label: 'todo 5', status: TodoStatus.Done, order: 5 }

const Todo = (todo: typeof t) => {
  const { deleteTodo, addTodo } = SingletonMethods.getMethods('todo')
  return (
    <div>
      <button onClick={() => addTodo(t)}>Add todo</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <li key={todo.id}>{todo.label}</li>
    </div>
  )
}

const Todos = () => {
  const todoList = useSingletonMethods()

  console.log('todoList: ', todoList)
  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return <Todo key={todo.id} {...todo} />
        })}
      </ul>
    </div>
  )
}

export const SingletonTest = () => {
  useEffect(() => {
    return Singleton.destroyInstance
  }, [])

  return (
    <div className="SingletonTest">
      <Todos />
      {/* <div className={'my-buttons'}> */}
      {/*   <button onClick={() => Singleton.createInstance([1, 2, 3])}>Create instance</button> */}
      {/*   <button onClick={Singleton.getInstance}>Get instance</button> */}
      {/*   <button onClick={Singleton.destroyInstance}>Destroy instance</button> */}
      {/* </div> */}
    </div>
  )
}

export default SingletonTest
