import React, { useState } from 'react'
import { useStore } from 'react-redux'
import './LayoutBudget.scss'

const LayoutBudget: React.FC = () => {
  function showNavigation() {
    const body = document.querySelector('body')
    const navigation = document.querySelector('.nav') as HTMLElement
    navigation.style.top = window.scrollY + 'px'
    body?.classList.toggle('body--fixed')
    navigation?.classList.toggle('nav--show')
  }
  function toggleCalendar() {
    const body = document.querySelector('body')
    body?.classList.toggle('body--fixed')
    const calendar = document.querySelector('.calendar') as HTMLElement
    calendar.style.top = window.scrollY + 'px'
    calendar?.classList.toggle('calendar--show')
  }
  return (
    <div className="app-budget">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="showNavigation" onClick={showNavigation}>
          NavIcon
        </div>
        <div className="user">user</div>
      </header>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="">Расходы переменные</a>
          </li>
          <li className="nav__item">
            <a className="">Расходы постоянные</a>
          </li>
          <li className="nav__item">
            <a className="">Доходы переменные</a>
          </li>
          <li className="nav__item">
            <a className="">Доходы постоянные</a>
          </li>
          <li className="nav__item">
            <a className="">Настройки</a>
          </li>
        </ul>
        <button className="closeButton" onClick={showNavigation}>
          close nav
        </button>
      </nav>
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
          <div className="expense__label">Проезд</div>
          <div className="expense__sum">1 000</div>
        </li>
        <li className="expense">
          <div className="expense__label--totalDay" onClick={toggleCalendar}>
            13 августа
          </div>
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
      <div className="calendar">
        <input type="date" className="calendar__date" />
        <button className="closeButton" onClick={toggleCalendar}>
          Close button
        </button>
      </div>
      <footer className="footer">Footer</footer>
    </div>
  )
}

export default LayoutBudget
