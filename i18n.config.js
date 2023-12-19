export default {
    defaultLocale: 'tw',
    locales: [
      { code: 'zh-TW', iso: 'zh-TW', name : '繁體中文', file: 'zh-TW.json' },
      { code: 'en-US', iso: 'en-US', name : 'English', file: 'en-US.json' }
    ],
    detectBrowserLanguage: {
        useCookie: true,              // 預設為 True，表示使用 setLocale 會保存語系代碼至 Cookie 之中
        cookieKey: 'i18n_redirected', // 保存的 Cookie Key 名稱
        alwaysRedirect: true,
        // fallbackLocale: 'zh-TW',
        // redirectOn: 'root',
    },
    lazy: true,
    langDir: 'lang/',
    strategy: "no_prefix"


    // defaultLocale: 'tw',
    // locales: [
    //     { code: 'tw', name: '繁體中文', iso: 'zh-TW', file: 'zh-TW.json' },
    //     { code: 'en', name: 'English', iso: 'en-US', file: 'en-US.json'},
    // ],
    // vueI18n: {
    //     fallbackLocale: 'tw',
    // },
    // detectBrowserLanguage: {
    //     useCookie: false,
    //     cookieKey: 'i18n_redirected',
    //     redirectOn: 'root',
    // },
    // lazy: true,
    // langDir: 'lang/',
    
};

