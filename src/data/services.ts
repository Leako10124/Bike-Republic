import { Service } from '@/lib/index';

export const services: Service[] = [
  {
    id: 'bike-fitting',
    name: 'Bike Fitting 專業調校',
    description: '透過專業的身體測量與動態分析，為您量身打造最適合的騎乘姿勢。我們的 Bike Fitting 服務包含完整的身高對應表分析、動態騎乘評估、座艙優化調整，確保您在長途騎乘中保持最佳舒適度與效率。',
    priceRange: 'HK$1,200 - HK$2,500',
    duration: '2-3 小時',
    bookingUrl: '/contact',
    icon: 'ruler',
    features: [
      '專業身體測量與柔軟度評估',
      '動態騎乘姿勢分析',
      '座艙高度與前伸距離優化',
      '踏板與鞋釘位置調整',
      '詳細調校報告與建議',
      '三個月內免費微調服務'
    ]
  },
  {
    id: 'maintenance',
    name: '原廠保養維修',
    description: '由原廠認證技師提供專業的保養維修服務。我們使用原廠零件與專業工具，確保您的愛車保持最佳狀態。服務範圍涵蓋定期保養、變速系統調整、輪組校正、煞車系統檢查等全方位維護。',
    priceRange: 'HK$300 - HK$1,500',
    duration: '1-3 小時',
    bookingUrl: '/contact',
    icon: 'wrench',
    features: [
      '定期保養檢查（每 1,000 公里）',
      '變速系統精密調整',
      '輪組校正與張力檢測',
      '煞車系統檢查與更換',
      '傳動系統清潔與潤滑',
      '車架與零件安全檢查'
    ]
  },
  {
    id: 'geometry-consultation',
    name: '車架幾何諮詢',
    description: '專業的車架幾何諮詢服務，協助您選擇最適合的車架尺寸與幾何設定。我們根據您的身高、體型、騎乘風格與目標，提供詳細的尺寸建議，並安排試車體驗，確保您找到完美契合的公路車。',
    priceRange: '免費',
    duration: '30-60 分鐘',
    bookingUrl: '/contact',
    icon: 'settings',
    features: [
      '身高與體型分析',
      '騎乘風格評估',
      '車架尺寸建議',
      'Stack 與 Reach 數據解析',
      '試車預約安排',
      '多款車型比較分析'
    ]
  }
];
