import React, { useState } from 'react'
import './admin.css'

const supportTranslations = {
  uz: {
    helpTitle: 'Yordam va Qo\'llab-quvvatlash',
    helpDesc: 'Restoran boshqaruv tizimi bo\'yicha ko\'mak va ma\'lumotlar',
    faqTab: 'Tez-tez Savollar',
    contactTab: 'Aloqalar',
    statusTab: 'Tizim Holati',
    guideTab: 'Qo\'llanma',
    faqTitle: 'Tez-tez Beriladigan Savollar',
    contactTitle: 'Aloqalar',
    statusTitle: 'Tizim Holati',
    guideTitle: 'Foydalanish Qo\'llanmasi',
    adminService: 'Admin Xizmat',
    techSupport: 'Texnik Qo\'llab-quvvatlash',
    available: 'Mavjud',
    systemName: 'Tizim Nomi',
    status: 'Holat',
    uptime: 'Faol Vaqti %',
    active: 'Faol',
    quickActions: 'Tez Harakatlar',
    callAdmin: '📞 Admin Chaqirish',
    sendEmail: '📧 Email Yuborish',
    reportBug: '🐛 Muammo Hisobot Qilish',
    documentation: '📚 To\'liq Dokumentatsiya',
    phone: 'Telefon',
    email: 'Email'
  },
  ru: {
    helpTitle: 'Помощь и поддержка',
    helpDesc: 'Справка и информация по системе управления рестораном',
    faqTab: 'Часто задаваемые вопросы',
    contactTab: 'Контакты',
    statusTab: 'Статус системы',
    guideTab: 'Руководство',
    faqTitle: 'Часто задаваемые вопросы',
    contactTitle: 'Контакты',
    statusTitle: 'Статус системы',
    guideTitle: 'Руководство пользователя',
    adminService: 'Служба администратора',
    techSupport: 'Техническая поддержка',
    available: 'Доступно',
    systemName: 'Название системы',
    status: 'Статус',
    uptime: 'Время безотказной работы %',
    active: 'Активно',
    quickActions: 'Быстрые действия',
    callAdmin: '📞 Позвонить администратору',
    sendEmail: '📧 Отправить письмо',
    reportBug: '🐛 Сообщить  ошибке',
    documentation: '📚 Полная документация',
    phone: 'Телефон',
    email: 'Электронная почта'
  },
  en: {
    helpTitle: 'Help and Support',
    helpDesc: 'Help and information on restaurant management system',
    faqTab: 'FAQ',
    contactTab: 'Contacts',
    statusTab: 'System Status',
    guideTab: 'Guide',
    faqTitle: 'Frequently Asked Questions',
    contactTitle: 'Contacts',
    statusTitle: 'System Status',
    guideTitle: 'User Guide',
    adminService: 'Admin Service',
    techSupport: 'Technical Support',
    available: 'Available',
    systemName: 'System Name',
    status: 'Status',
    uptime: 'Uptime %',
    active: 'Active',
    quickActions: 'Quick Actions',
    callAdmin: '📞 Call Admin',
    sendEmail: '📧 Send Email',
    reportBug: '🐛 Report Bug',
    documentation: '📚 Full Documentation',
    phone: 'Phone',
    email: 'Email'
  },
  ky: {
    helpTitle: 'Ёрдам ва Қўллаб-қувватлаш',
    helpDesc: 'Ресторан бошқаруви тизими бўйича қўллаб-қувватлаш ва маълумотлар',
    faqTab: 'Тез-тез Саволлар',
    contactTab: 'Aloқaлaр',
    statusTab: 'Тизим Холати',
    guideTab: 'Қўлланма',
    faqTitle: 'Тез-тез Берилади Ган Саволлар',
    contactTitle: 'Aloқaлар',
    statusTitle: 'Тизим Холати',
    guideTitle: 'Фойдаланиш Қўлланмаси',
    adminService: 'Admin Хизмат',
    techSupport: 'Техник Қўллаб-қувватлаш',
    available: 'Мавжуд',
    systemName: 'Тизим Номи',
    status: 'Холат',
    uptime: 'Фаол Вақти %',
    active: 'Фаол',
    quickActions: 'Тез Harakatlar',
    callAdmin: '📞 Admin Чақириш',
    sendEmail: '📧 Email Юбориш',
    reportBug: '🐛 Muammo Hisobot Қилиш',
    documentation: '📚 Тўлиқ Документация',
    phone: 'Телефон',
    email: 'Email'
  }
}

export default function Support({ language = 'uz' }) {
  const t = supportTranslations[language] || supportTranslations.uz
  const [activeTab, setActiveTab] = useState('faq')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = {
    uz: [
      { id: 1, question: "Pul qanday kirish mumkin?", answer: "Kasse panelida 'Pul qo'shish' tugmasini bosing va miqdorni kiriting. Har bir operatsiya avtomatik qayd etiladi." },
      { id: 2, question: "Ofitsiant buyurtmasini qanday kiritish kerak?", answer: "Ofitsiant bo'limiga o'ting, buyurtma raqamini va taomlarni tanlang, so'ng 'Saqlash' tugmasini bosing." },
      { id: 3, question: "Menyu qanday tahrirlash mumkin?", answer: "Admin panelidan menyu bo'limiga o'ting, taom nomini, qiymati va ta'rifini kiritib saqlang." },
      { id: 4, question: "Kunlik hisobot qanday olamаn?", answer: "Admin panelida 'So'nggi faoliyat' bo'limida barcha operatsiyalar ko'rinadi. PDF sifatida chiqarish mumkin." },
      { id: 5, question: "Parolni qanday o'zgartirish kerak?", answer: "Profil sozlamalari bo'limida 'Parol o'zgartirish' bo'limiga o'ting va yangi parolni kiriting." }
    ],
    ru: [
      { id: 1, question: "Как внести деньги?", answer: "Нажмите кнопку «Добавить деньги» на панели кассира и введите сумму. Каждая операция записывается автоматически." },
      { id: 2, question: "Как ввести заказ официанта?", answer: "Перейдите в раздел официанта, выберите номер заказа и блюда, затем нажмите «Сохранить»." },
      { id: 3, question: "Как редактировать меню?", answer: "Перейдите в раздел меню на панели администратора, введите название блюда, цену и описание." },
      { id: 4, question: "Как получить дневной отчет?", answer: "На панели администратора в разделе «Последняя активность» отображаются все операции. Можно экспортировать в PDF." },
      { id: 5, question: "Как изменить пароль?", answer: "В разделе параметров профиля перейдите в раздел «Изменить пароль» и введите новый пароль." }
    ],
    en: [
      { id: 1, question: "How to deposit cash?", answer: "Click the 'Add Cash' button on the cashier panel and enter the amount. Each operation is recorded automatically." },
      { id: 2, question: "How to enter a waiter order?", answer: "Go to the waiter section, select order number and dishes, then click 'Save'." },
      { id: 3, question: "How to edit menu?", answer: "Go to the menu section on the admin panel, enter dish name, price and description." },
      { id: 4, question: "How to get daily report?", answer: "On the admin panel in the 'Recent Activity' section, all operations are displayed. Can be exported to PDF." },
      { id: 5, question: "How to change password?", answer: "In the profile settings section, go to 'Change password' and enter the new password." }
    ],
    ky: [
      { id: 1, question: "Пул қандай кириш мумкин?", answer: "Кассир панелида 'Пул қў'шиш' тугмасини босинг ва миқдорни киритинг. Har bir operatsiya avtomatik qayd etiladi." },
      { id: 2, question: "Офіціант buyurtmasini қандай киритиш керак?", answer: "Офіціант бўлимига ўтинг, buyurtma рақамини ва taomlarni танланг, сўнг 'Сақлаш' тугмасини босинг." },
      { id: 3, question: "Меню қандай tahrirlash мумкин?", answer: "Admin панелидан меню бўлимига ўтинг, taom номини, қиймати ва та'рифини киритиб сақланг." },
      { id: 4, question: "Kunlik hisobot қандай olamаn?", answer: "Admin панелида 'So'nggi faoliyat' бўлимида barча operatsiyalar кўринади. PDF сифатида чиқариш мумкин." },
      { id: 5, question: "Parol қандай ўзгартириш керак?", answer: "Profil sozlamalari бўлимида 'Parol ўзгартириш' бўлимига ўтинг ва янги parolni киритинг." }
    ]
  }

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const faqList = faqs[language] || faqs.uz

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h2>{t.helpTitle}</h2>
        <p>{t.helpDesc}</p>
      </div>

      {/* Tabs */}
      <div className="support-tabs">
        <button 
          className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => setActiveTab('faq')}
        >
          {t.faqTab}
        </button>
        <button 
          className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          {t.contactTab}
        </button>
        <button 
          className={`tab-button ${activeTab === 'status' ? 'active' : ''}`}
          onClick={() => setActiveTab('status')}
        >
          {t.statusTab}
        </button>
        <button 
          className={`tab-button ${activeTab === 'guide' ? 'active' : ''}`}
          onClick={() => setActiveTab('guide')}
        >
          {t.guideTab}
        </button>
      </div>

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <section className="admin-section">
          <h3>{t.faqTitle}</h3>
          <div className="faq-list">
            {faqList.map((item) => (
              <div 
                key={item.id} 
                className="faq-item"
                onClick={() => toggleFaq(item.id)}
              >
                <div className="faq-question">
                  <span className="faq-icon">{expandedFaq === item.id ? '▼' : '▶'}</span>
                  <h4>{item.question}</h4>
                </div>
                {expandedFaq === item.id && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Tab */}
      {activeTab === 'contact' && (
        <section className="admin-section">
          <h3>{t.contactTitle}</h3>
          <div className="contact-list">
            <div className="contact-card">
              <h4>{t.adminService}</h4>
              <div className="contact-info">
                <p><strong>{t.phone}:</strong> <a href="tel:+998951234567">+998 95 123 45 67</a></p>
                <p><strong>{t.email}:</strong> <a href="mailto:admin@kafe.uz">admin@kafe.uz</a></p>
                <p><strong>{t.available}:</strong> 24/7</p>
              </div>
            </div>
            <div className="contact-card">
              <h4>{t.techSupport}</h4>
              <div className="contact-info">
                <p><strong>{t.phone}:</strong> <a href="tel:+998957654321">+998 95 765 43 21</a></p>
                <p><strong>{t.email}:</strong> <a href="mailto:support@kafe.uz">support@kafe.uz</a></p>
                <p><strong>{t.available}:</strong> 9:00 - 18:00</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* System Status Tab */}
      {activeTab === 'status' && (
        <section className="admin-section">
          <h3>{t.statusTitle}</h3>
          <table className="activity-table">
            <thead>
              <tr>
                <th>{t.systemName}</th>
                <th>{t.status}</th>
                <th>{t.uptime}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kassa tizimi</td>
                <td><span className="status-badge status-active">{t.active}</span></td>
                <td>99.9%</td>
              </tr>
              <tr>
                <td>Ofitsiant tizimi</td>
                <td><span className="status-badge status-active">{t.active}</span></td>
                <td>99.8%</td>
              </tr>
              <tr>
                <td>Menyu baza</td>
                <td><span className="status-badge status-active">{t.active}</span></td>
                <td>99.95%</td>
              </tr>
              <tr>
                <td>Hisobot tizimi</td>
                <td><span className="status-badge status-active">{t.active}</span></td>
                <td>99.7%</td>
              </tr>
            </tbody>
          </table>
        </section>
      )}

      {/* Guide Tab */}
      {activeTab === 'guide' && (
        <section className="admin-section">
          <h3>{t.guideTitle}</h3>
          <div className="guide-content">
            <div className="guide-section">
              <h4>1. Admin Paneli</h4>
              <p>Admin panelida kunlik kassa, ofitsiant va menyu ma'lumotlarini ko'rishingiz mumkin. Barcha operatsiyalar avtomatik qayd etiladi.</p>
            </div>
            <div className="guide-section">
              <h4>2. Kasser Paneli</h4>
              <p>Kassa panelida qabul qilingan pulli qayd eting. Qo'shilgan summalar avtomatik ravishda bugungi kassa balansiga qo'shiladi.</p>
            </div>
            <div className="guide-section">
              <h4>3. Ofitsiant Paneli</h4>
              <p>Ofitsiant bo'limida yangi buyurtmalar kiritishingiz, menyu taomlarini tanlashingiz va buyurtmani saqlashingiz mumkin.</p>
            </div>
            <div className="guide-section">
              <h4>4. Oshpaz Paneli</h4>
              <p>Oshpaz buyurtmalarni ko'radi va tayyorlash holatini yangilaydi. Tayyor buyurtmalar avtomatik ravishda ofitsiantga o'tkaziladi.</p>
            </div>
            <div className="guide-section">
              <h4>5. Kerakli Maslahatlar</h4>
              <ul>
                <li>Har kun ishning boshida balansni tekshiring</li>
                <li>Barcha operatsiyalarni to'g'ri qayd eting</li>
                <li>Kunning oxirida hisobot chiqaring</li>
                <li>Menyu o'zgartirishlari haqida admin-ni xabardor eting</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="admin-section">
        <h3>{t.quickActions}</h3>
        <div className="quick-actions">
          <button className="action-button">{t.callAdmin}</button>
          <button className="action-button">{t.sendEmail}</button>
          <button className="action-button">{t.reportBug}</button>
          <button className="action-button">{t.documentation}</button>
        </div>
      </section>
    </div>
  )
}
