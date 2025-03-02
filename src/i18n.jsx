// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import en from './locales/en/translations.json';
// import vn from './locales/vn/translations.json';

// i18n.use(initReactI18next).init({
//     resources: {
//         en: {
//             translations: en,
//         },
//         vn: {
//             translations: vn,
//         },
//     },
//     fallbackLng: 'en',
//     interpolation: {
//         escapeValue: false,
//     },
//  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
// });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translations.json';
import vn from './locales/vn/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vn: { translation: vn }
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en', // Dùng tiếng Anh nếu không tìm thấy ngôn ngữ
    interpolation: { escapeValue: false }
  });

export default i18n;
