import { useState } from 'react'
import Admin from './admin/Admin'
import Support from './admin/support'

// Tarjimalar
const translations = {
  uz: {
    admin: 'Admin',
    kasser: 'Kasser',
    afitsant: 'Ofitsiant',
    oshpaz: 'Oshpaz',
    support: 'Yordam',
    cash: 'Kassa',
    operations: 'Operatsiya',
    cashInput: 'Pul kirimini yozish',
    cashDescription: 'Har bir pul kirimni va izohni kiriting. Admin ko\'radi.',
    menuUpdate: 'Menyu yangilash',
    menuDescription: 'Yangi taomlar va narxlarni kiriting. Admin ko\'radi.',
    dishNote: 'Taom nomi yoki eslatma',
    dishPlaceholder: 'Masalan: Lavash 10 dona qo\'shildi',
    send: 'Yuborish',
    explanation: 'Izoh',
    explanationPlaceholder: '10 ta buyurtma, davlat buyurtmasi',
    amount: 'Summa (so\'m)',
    amountPlaceholder: '50000',
    write: 'Yozish',
    dishName: 'Taom nomi',
    dishNamePlaceholder: 'Lavash, Somsa, Palov',
    price: 'Narx (so\'m)',
    pricePlaceholder: '25000',
    add: 'Qo\'shish',
    dailyRecords: 'Kunlik pul kirimlar',
    menuList: 'Menyu ro\'yxati',
    dishRecords: 'Oshpaz yozuvlari',
    noRecords: 'Hozircha yozuv yo\'q',
    menuNotUpdated: 'Menyu hali yangilanmagan',
    nothingAdded: 'Hali hech narsa qo\'shilmagan'
  },
  ru: {
    admin: 'Админ',
    kasser: 'Кассир',
    afitsant: 'Официант',
    oshpaz: 'Повар',
    support: 'Помощь',
    cash: 'Касса',
    operations: 'Операции',
    cashInput: 'Запись денежного поступления',
    cashDescription: 'Введите каждый денежный поступ и примечание. Администратор увидит.',
    menuUpdate: 'Обновление меню',
    menuDescription: 'Введите новые блюда и цены. Администратор увидит.',
    dishNote: 'Название блюда или заметка',
    dishPlaceholder: 'Например: Лаваш добавлено 10 штук',
    send: 'Отправить',
    explanation: 'Пояснение',
    explanationPlaceholder: '10 заказов, государственный заказ',
    amount: 'Сумма (сум)',
    amountPlaceholder: '50000',
    write: 'Записать',
    dishName: 'Название блюда',
    dishNamePlaceholder: 'Лаваш, Самса, Плов',
    price: 'Цена (сум)',
    pricePlaceholder: '25000',
    add: 'Добавить',
    dailyRecords: 'Дневные денежные поступления',
    menuList: 'Список меню',
    dishRecords: 'Записи повара',
    noRecords: 'Пока нет записей',
    menuNotUpdated: 'Меню еще не обновлено',
    nothingAdded: 'Пока ничего не добавлено'
  },
  en: {
    admin: 'Admin',
    kasser: 'Cashier',
    afitsant: 'Waiter',
    oshpaz: 'Chef',
    support: 'Support',
    cash: 'Cash',
    operations: 'Operations',
    cashInput: 'Record Cash Income',
    cashDescription: 'Enter each cash transaction and note. Admin will see it.',
    menuUpdate: 'Update Menu',
    menuDescription: 'Enter new dishes and prices. Admin will see it.',
    dishNote: 'Dish name or note',
    dishPlaceholder: 'E.g.: Lavash added 10 pieces',
    send: 'Send',
    explanation: 'Explanation',
    explanationPlaceholder: '10 orders, government order',
    amount: 'Amount (sum)',
    amountPlaceholder: '50000',
    write: 'Record',
    dishName: 'Dish name',
    dishNamePlaceholder: 'Lavash, Samsa, Pilaf',
    price: 'Price (sum)',
    pricePlaceholder: '25000',
    add: 'Add',
    dailyRecords: 'Daily cash income',
    menuList: 'Menu list',
    dishRecords: 'Chef records',
    noRecords: 'No records yet',
    menuNotUpdated: 'Menu has not been updated yet',
    nothingAdded: 'Nothing added yet'
  },
  ky: {
    admin: 'Админ',
    kasser: 'Кассир',
    afitsant: 'Офиціант',
    oshpaz: 'Ошпаз',
    support: 'Ёрдам',
    cash: 'Касса',
    operations: 'Операциялар',
    cashInput: 'Пул киритишни ёзиш',
    cashDescription: 'Har bir pul kirimni va izohni kiriting. Admin ko\'radi.',
    menuUpdate: 'Меню янгилаш',
    menuDescription: 'Yangi taomlar va narxlarni kiriting. Admin ko\'radi.',
    dishNote: 'Taom nomi yoki eslatma',
    dishPlaceholder: 'Масалан: Лавош 10 та қўшилди',
    send: 'Юбориш',
    explanation: 'Изох',
    explanationPlaceholder: '10 та buyurtma, давлат buyurtmasi',
    amount: 'Сумма (сўм)',
    amountPlaceholder: '50000',
    write: 'Ёзиш',
    dishName: 'Taom nomi',
    dishNamePlaceholder: 'Лавош, Самса, Палов',
    price: 'Нарх (сўм)',
    pricePlaceholder: '25000',
    add: 'Қўшиш',
    dailyRecords: 'Kunlik pul kirimlar',
    menuList: 'Меню рўйхати',
    dishRecords: 'Oshpaz yozuvlari',
    noRecords: 'Hozircha yozuv yo\'q',
    menuNotUpdated: 'Меню hali янгиланмаган',
    nothingAdded: 'Hali hech narsa qo\'shilmagan'
  }
}

export default function App() {
  const [activeRole, setActiveRole] = useState('admin')
  const [language, setLanguage] = useState('uz')
  const [cashTotal, setCashTotal] = useState(0)
  const [kasserUpdates, setKasserUpdates] = useState([])
  const [waiterUpdates, setWaiterUpdates] = useState([])
  const [menuItems, setMenuItems] = useState([])
  const [activityLog, setActivityLog] = useState([])

  const t = translations[language]

  const getCurrentTime = () => {
    const now = new Date()
    return now.toLocaleTimeString('uz-UZ', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    })
  }

  const addKasserUpdate = (note, amount) => {
    if (!note.trim() || !amount) return
    
    const newUpdate = {
      amount: parseInt(amount),
      note,
      time: getCurrentTime()
    }
    
    setKasserUpdates([newUpdate, ...kasserUpdates])
    setCashTotal(prev => prev + parseInt(amount))
    
    addActivityLog('Pul kiritish', 'Kasser', parseInt(amount))
  }

  const addMenuItem = (name, price) => {
    if (!name.trim() || !price) return
    
    const newItem = {
      name,
      price: parseInt(price),
      time: getCurrentTime()
    }
    
    setMenuItems([newItem, ...menuItems])
    setWaiterUpdates([...waiterUpdates, newItem])
    
    addActivityLog('Menyu yangilash', 'Ofitsiant', 0)
  }

  const addActivityLog = (message, role, amount = 0) => {
    const logEntry = {
      message,
      role,
      amount,
      time: getCurrentTime()
    }
    
    setActivityLog([logEntry, ...activityLog])
  }

  const handleOshpazAdd = (role, message) => {
    addActivityLog(message, 'Oshpaz', 0)
  }

  const roles = [
    { id: 'admin', label: t.admin, icon: '📊' },
    { id: 'kasser', label: t.kasser, icon: '💰' },
    { id: 'afitsant', label: t.afitsant, icon: '👨‍💼' },
    { id: 'oshpaz', label: t.oshpaz, icon: '👨‍🍳' },
    { id: 'support', label: t.support, icon: '❓' }
  ]

  return (
    <div className="app-shell">
      {/* Language Selector */}
      <div className="language-selector">
        {Object.keys(translations).map(lang => (
          <button
            key={lang}
            className={`lang-button ${language === lang ? 'active' : ''}`}
            onClick={() => setLanguage(lang)}
          >
            {lang === 'uz' && '🇺🇿 O\'zbekcha'}
            {lang === 'ru' && '🇷🇺 Русский'}
            {lang === 'en' && '🇬🇧 English'}
            {lang === 'ky' && '🇰🇬 Kirilcha'}
          </button>
        ))}
      </div>

      {/* Navigation Sidebar */}
      <aside className="app-nav">
        <h1>🍴 KAFE</h1>
        <nav>
          {roles.map(role => (
            <button
              key={role.id}
              className={`nav-button ${activeRole === role.id ? 'active' : ''}`}
              onClick={() => setActiveRole(role.id)}
              title={role.label}
            >
              {role.icon} {role.label}
            </button>
          ))}
        </nav>
        
        <div className="nav-footer">
          <div className="stat">
            <span className="stat-label">{t.cash}:</span>
            <span className="stat-value">{cashTotal} so'm</span>
          </div>
          <div className="stat">
            <span className="stat-label">{t.operations}:</span>
            <span className="stat-value">{activityLog.length}</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="page-container">
        {activeRole === 'admin' && (
          <Admin 
            cashTotal={cashTotal}
            kasserUpdates={kasserUpdates}
            waiterUpdates={waiterUpdates}
            menuItems={menuItems}
            activityLog={activityLog}
            language={language}
          />
        )}

        {activeRole === 'kasser' && (
          <Kasser 
            kasserUpdates={kasserUpdates}
            addKasserUpdate={addKasserUpdate}
            language={language}
            t={t}
          />
        )}

        {activeRole === 'afitsant' && (
          <Afitsant 
            menuItems={menuItems}
            addMenuItem={addMenuItem}
            language={language}
            t={t}
          />
        )}

        {activeRole === 'oshpaz' && (
          <Oshpaz 
            onAdd={handleOshpazAdd}
            updates={activityLog.filter(log => log.role === 'Oshpaz')}
            language={language}
            t={t}
          />
        )}

        {activeRole === 'support' && (
          <Support 
            language={language}
          />
        )}
      </main>
    </div>
  )
}

