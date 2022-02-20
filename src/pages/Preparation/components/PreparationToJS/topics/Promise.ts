import { Url } from 'url'

const topicPromise = () => {
  // Fetch
  {
    fetch('https://jsonplaceholder.typicode.com/todoss')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        } else return response.json()
      })
      .then((todos) => console.log('todos: ', todos))
      .catch((e) => console.log(e.message))
  }

  // Promise
  {
    const delay = function(ms: number) {
      return new Promise((resolve, reject) => setTimeout(resolve, ms))
    }
    const promise = new Promise(function(resolve, reject) {
      setTimeout(() => resolve('done!'), 1000)
    })
  }

  // Await
  {
    const getTodos = async function(url: string) {
      const response = await fetch(url)
      const todos = await response.json()
      return todos
    }
    // getTodos('https://jsonplaceholder.typicode.com/todos').then((todos) => console.log('todos: ', todos))
  }
}

export default topicPromise
