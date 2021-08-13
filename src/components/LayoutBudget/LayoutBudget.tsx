import React from 'react'
import './LayoutBudget.scss'

const LayoutBudget: React.FC = () => {
  return (
    <div className="app-budget">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="showNavigation">show Navigation</div>
        <div className="user">user</div>
        <div className="date">13 августа 2021</div>
      </header>
      <ul className="expenses">
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">Проезд</div>
            <div className="expense__currentDay">1 000</div>
          </div>

          <div className="expense__actions">
            <button className="expense__settings">Наст</button>
            <button className="expense__plus">+</button>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">Проезд</div>
            <div className="expense__currentDay">1 000</div>
          </div>

          <div className="expense__actions">
            <button className="expense__settings">Наст</button>
            <button className="expense__plus">+</button>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">Проезд</div>
            <div className="expense__currentDay">1 000</div>
          </div>

          <div className="expense__actions">
            <button className="expense__settings">Наст</button>
            <button className="expense__plus">+</button>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">Проезд</div>
            <div className="expense__currentDay">1 000</div>
          </div>

          <div className="expense__actions">
            <button className="expense__settings">Наст</button>
            <button className="expense__plus">+</button>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">Проезд</div>
            <div className="expense__currentDay">1 000</div>
          </div>

          <div className="expense__actions">
            <button className="expense__settings">Наст</button>
            <button className="expense__plus">+</button>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">За день</div>
            <div className="expense__sum">6 000</div>
          </div>
        </li>
        <li className="expense">
          <div className="expense__total">
            <div className="expense__label">За неделю</div>
            <div className="expense__sum">1500</div>
          </div>
        </li>
      </ul>
      <div className="showStatistic">Всего за день</div>
      <button className="showStatistic">Статистика за месяц</button>
      {/* <div className="calendar">Calendar</div> */}
      {/* <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="">Rpe</a>
            <a className="">Rpo</a>
            <a className="">Dpe</a>
            <a className="">Dpo</a>
          </li>
        </ul>
      </nav> */}
      <footer className="footer">Footer</footer>
    </div>
  )
}

export default LayoutBudget
