let count = 0
const topicEventLoop = () => {
  setTimeout(function timeout() {
    console.log('Таймаут')
  }, 0)
  setTimeout(function timeout() {
    console.log('Таймаут 2')
  }, 500)

  console.log('first')

  const p = new Promise(function (resolve, reject) {
    console.log('Создание промиса 1') // почему-то это выведется как синхронный код
    resolve('')
  })

  const inMicroTask = () => console.log(`added in Micro Task ${++count}`)

  queueMicrotask(inMicroTask)

  p.then(() => console.log(`promise ${++count}`))
    .then(() => console.log(`promise ${++count}`))
    .then(() => console.log(`promise ${++count}`))

  queueMicrotask(inMicroTask)
  queueMicrotask(inMicroTask)

  console.log('Конец скрипта')
}

// topicEventLoop()
export default topicEventLoop
