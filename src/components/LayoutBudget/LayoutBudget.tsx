import React from 'react'
import './LayoutBudget.scss'

const LayoutBudget: React.FC = () => {
  return (
    <div className="app-budget">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="showNavigation">NavIcon</div>
        <div className="user">user</div>
        {/* <div className="date">13 августа 2021</div> */}
      </header>
      <ul className="expenses">
        <li className="expense">
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label--totalDay">13 августа</div>
          <div className="expense__sum--totalDay">6 000</div>
        </li>
        <li className="expense">
          <div className="expense__label--totalWeek">За неделю</div>
          <div className="expense__sum--totalWeek">10 500</div>
        </li>
        <li className="expense">
          <div className="expense__label--totalWeek">За месяц</div>
          <div className="expense__sum--totalWeek">30 500</div>
        </li>
      </ul>
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
