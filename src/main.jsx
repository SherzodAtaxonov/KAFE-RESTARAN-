import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Admin from './admin/Admin.jsx'

const sampleData = {
    cashTotal: 1520000,
    kasserUpdates: [
        { amount: 350000, note: 'Naqd pul tushdi', time: '09:15' },
        { amount: 275000, note: 'Onlayn to‘lov', time: '11:30' }
    ],
    waiterUpdates: [
        { message: 'Buyurtma olib ketildi', role: 'Ofitsiant', amount: 0, time: '10:20' },
        { message: 'Stol uchun choy xizmatiga buyurtma', role: 'Ofitsiant', amount: 0, time: '12:05' }
    ],
    menuItems: [
        { name: 'Osh', price: 25000, time: '08:00' },
        { name: 'Shashlik', price: 30000, time: '10:00' }
    ],
    activityLog: [
        { message: 'Mijoz to‘lovni amalga oshirdi', role: 'Kasser', amount: 25000, time: '09:50' },
        { message: 'Yangi buyurtma qabul qilindi', role: 'Ofitsiant', amount: 0, time: '10:00' }
    ]
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Admin
            cashTotal={sampleData.cashTotal}
            kasserUpdates={sampleData.kasserUpdates}
            waiterUpdates={sampleData.waiterUpdates}
            menuItems={sampleData.menuItems}
            activityLog={sampleData.activityLog}
            language="uz"
        />
    </StrictMode>
)
