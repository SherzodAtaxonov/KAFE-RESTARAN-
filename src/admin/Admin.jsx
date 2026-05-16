import React, { useMemo } from 'react'
import './admin.css'

const translations = {
  uz: {
    adminDashboard: 'Admin Asbabi',
    adminDescription: 'Kasse, ofitsiant va menyu holatini kuzatasiz.',
    todayCash: 'Bugungi kassa',
    kasserRecords: 'Kasser yozuvlari',
    waiterRecords: 'Ofitsiant yozuvlari',
    menuValue: 'Menyu qiymati',
    recentActivity: 'So\'nggi faoliyat',
    task: 'Vazifa',
    role: 'Rol',
    amount: 'Summa',
    time: 'Vaqt',
    noRecords: 'Hozircha hech qanday yozuv yo\'q',
    kasserReport: 'Kasser kunlik xabarnomasi',
    cashNotReceived: 'Kasser hozircha pul kiritmadi',
    menu: 'Menyu',
    menuNotUpdated: 'Menyu hali yangilanmagan'
  },
  ru: {
    adminDashboard: 'Панель администратора',
    adminDescription: 'Отслеживайте состояние кассы, официанта и меню.',
    todayCash: 'Касса сегодня',
    kasserRecords: 'Записи кассира',
    waiterRecords: 'Записи официанта',
    menuValue: 'Стоимость меню',
    recentActivity: 'Последняя активность',
    task: 'Задача',
    role: 'Роль',
    amount: 'Сумма',
    time: 'Время',
    noRecords: 'Пока нет записей',
    kasserReport: 'Дневной отчет кассира',
    cashNotReceived: 'Кассир пока не получил денежные средства',
    menu: 'Меню',
    menuNotUpdated: 'Меню еще не обновлено'
  },
  en: {
    adminDashboard: 'Admin Dashboard',
    adminDescription: 'Monitor cash register, waiter, and menu status.',
    todayCash: 'Today\'s Cash',
    kasserRecords: 'Cashier Records',
    waiterRecords: 'Waiter Records',
    menuValue: 'Menu Value',
    recentActivity: 'Recent Activity',
    task: 'Task',
    role: 'Role',
    amount: 'Amount',
    time: 'Time',
    noRecords: 'No records yet',
    kasserReport: 'Cashier Daily Report',
    cashNotReceived: 'Cashier has not received cash yet',
    menu: 'Menu',
    menuNotUpdated: 'Menu has not been updated yet'
  },
  ky: {
    adminDashboard: 'Админ Панели',
    adminDescription: 'Касса, офиціант ва меню холатини кузатасиз.',
    todayCash: 'Бугунги касса',
    kasserRecords: 'Кассир ёзувлари',
    waiterRecords: 'Офиціант ёзувлари',
    menuValue: 'Меню қиймати',
    recentActivity: 'Охирги фаолият',
    task: 'Вазифа',
    role: 'Роль',
    amount: 'Сумма',
    time: 'Вақт',
    noRecords: 'Hozircha hech qanday yozuv yo\'q',
    kasserReport: 'Кассир кунлик хабарномаси',
    cashNotReceived: 'Кассир hozircha pul kiritmadi',
    menu: 'Меню',
    menuNotUpdated: 'Меню hali янгиланмаган'
  }
}

export default function Admin({ cashTotal, kasserUpdates, waiterUpdates, menuItems, activityLog, language }) {
  const t = translations[language] || translations.uz
  
  const menuTotal = useMemo(
    () => menuItems.reduce((sum, item) => sum + item.price, 0),
    [menuItems]
  )
 
  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>{t.adminDashboard}</h2>
        <p>{t.adminDescription}</p>
      </div>

      <div className="admin-summary">
        <div className="summary-card">
          <h3>{t.todayCash}</h3>
          <p className="amount">{cashTotal} so'm</p>
        </div>
        <div className="summary-card">
          <h3>{t.kasserRecords}</h3>
          <p className="count">{kasserUpdates.length} ta</p>
        </div>
        <div className="summary-card">
          <h3>{t.waiterRecords}</h3>
          <p className="count">{waiterUpdates.length} ta</p>
        </div>
        <div className="summary-card">
          <h3>{t.menuValue}</h3>
          <p className="amount">{menuTotal} so'm</p>
        </div>
      </div>

      <section className="admin-section">
        <h3>{t.recentActivity}</h3>
        {activityLog.length > 0 ? (
          <table className="activity-table">
            <thead>
              <tr>
                <th>{t.task}</th>
                <th>{t.role}</th>
                <th>{t.amount}</th>
                <th>{t.time}</th>
              </tr>
            </thead>
            <tbody>
              {activityLog.slice(0, 10).map((item, index) => (
                <tr key={index}>
                  <td>{item.message}</td>
                  <td>{item.role}</td>
                  <td>{item.amount > 0 ? `${item.amount} so'm` : '-'}</td>
                  <td>{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="empty-state">{t.noRecords}</p>
        )}
      </section>

      <section className="admin-section">
        <h3>{t.kasserReport}</h3>
        {kasserUpdates.length > 0 ? (
          <ul className="update-list">
            {kasserUpdates.map((item, index) => (
              <li key={index}>
                <strong>{item.amount} so'm</strong> — {item.note} <span>{item.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">{t.cashNotReceived}</p>
        )}
      </section>

      <section className="admin-section">
        <h3>{t.menu}</h3>
        {menuItems.length > 0 ? (
          <ul className="update-list">
            {menuItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> — {item.price} so'm <span>{item.time}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-state">{t.menuNotUpdated}</p>
        )}
      </section>
    </div>
  )
}
