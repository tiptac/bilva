export const appRoutes = {
  bilva: {
    home: ['/'],
    about: ['/', 'about'],
    career: ['/', 'career'],
    contact: ['/', 'contact'],
    business: {
      ownIt: ['/', 'business', 'realtysolution', 'ownit'],
      theBigDay: ['/', 'business', 'eventmanagement', 'thebigday'],
    },
    user: {
      login: ['/', 'user', 'login'],
      signup: ['/', 'user', 'signup'],
    },
  },
  ownIt: {
    home: ['/', 'ownit'],
  },
  theBigDay: {
    home: ['/', 'thebigday'],
  },
};
