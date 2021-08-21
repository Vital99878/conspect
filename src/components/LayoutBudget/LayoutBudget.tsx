import React, { useState } from 'react'
import { useStore } from 'react-redux'
import './LayoutBudget.scss'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

const LayoutBudget: React.FC = () => {
  const body = document.querySelector('body')
  window.addEventListener('scroll', hideSearchPanel)
  function showNavigation() {
    const navigation = document.querySelector('.nav') as HTMLElement
    navigation.style.top = window.scrollY + 'px'
    body?.classList.toggle('body--fixed')
    navigation?.classList.toggle('nav--show')
  }
  function toggleCalendar() {
    body?.classList.toggle('body--fixed')
    const calendar = document.querySelector('.calendar') as HTMLElement
    calendar.style.top = window.scrollY + 'px'
    calendar?.classList.toggle('calendar--show')
  }
  function hideSearchPanel() {
    const searchPanel = document.querySelector('.search-and-sort')
    searchPanel?.classList.toggle('search-and-sort--hidden')
  }
  function showExpenseSettings() {
    const expenseSettings = document.querySelector('.expense-settings') as HTMLElement
    // expenseSettings.style.top = window.scrollY + 'px'
    // body?.classList.toggle('body--fixed')
    expenseSettings?.classList.toggle('expense-settings--show')
  }
  function showAddForm() {
    const expenseAddForm = document.querySelector('.expense-add-form') as HTMLElement
    // expenseAddForm.style.top = window.scrollY + 'px'
    // body?.classList.toggle('body--fixed')
    expenseAddForm?.classList.toggle('expense-add-form--show')
  }

  return (
    <div className="app-budget">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="showNavigation" onClick={showNavigation}>
          NavIcon
        </div>
        <div className="searchTrigger" onClick={hideSearchPanel}>
          Search trigger
        </div>
        <div className="user">John Dow</div>
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
      <div className="expenses-component">
        <form className="search-and-sort">
          <input className="search" defaultValue="поиск" type="text" />
          <select className="sort">
            <option value="default">По частоте использования</option>
            <option value="a-z">По алфавиту</option>
            <option value="max-min">По убыванию</option>
            <option value="min-max">По возрастанию</option>
          </select>
        </form>
        <ul className="expenses">
          <li className="expense">
            <div className="expense__label" onClick={showExpenseSettings}>
              Проезд
            </div>
            <div className="expense__sum" onClick={showAddForm}>
              1 00
            </div>
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
            <div className="expense__label" onClick={showExpenseSettings}>
              Здесь обработчики
            </div>
            <div className="expense__sum" onClick={showAddForm}>
              1 000
            </div>
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
      </div>
      <button className="showStatistic">Статистика за месяц</button>
      <footer className="footer">Footer</footer>

      <article className="expense-settings">
        <h2 className="expense-settings__label">Expense lable</h2>
        <ul className="expense-settings__list">
          <li className="expense-settings__item">
            <button>Переименовать</button>
          </li>
          <li className="expense-settings__item">
            <button>Добавить категорию</button>
          </li>
          <li className="expense-settings__item">
            <button>Удалить</button>
          </li>
        </ul>
        <button className="closeButton" onClick={showExpenseSettings}>
          close settings
        </button>
      </article>
      <article className="expense-add-form">
        <h2 className="expense-add-form__label">Expense lable</h2>
        <div className="expense-add-form__total">1500</div>
        <input type="number" />
        <button className="closeButton" onClick={showAddForm}>
          close settings
        </button>
      </article>
      <div className="calendar">
        <DayPicker />
        <button className="closeButton" onClick={toggleCalendar}>
          Close button
        </button>
      </div>
    </div>
  )
}

export default LayoutBudget
