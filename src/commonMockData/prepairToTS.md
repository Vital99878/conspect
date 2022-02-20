# ?, ! = Optional chaining operator

     ? = Необязательно свойство.

    ! = non-null assertion operator.
    Используется при конфликте типов.

    example
    type A = string | null
    type B = string
    const stingA: A = null
    const stingB: B = stingA!
