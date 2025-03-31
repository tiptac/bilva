export const appRoutes = {
  bilva: {
    home: ['/'],
    about: ['/', 'about'],
    career: ['/', 'career'],
    contact: ['/', 'contact'],
    business: {
      realtySolution: {
        ownIt: ['/', 'business', 'realtysolution', 'ownit'],
        buySell: ['/', 'business', 'realtysolution', 'buy-sell'],
        homeConstruction: [
          '/',
          'business',
          'realtysolution',
          'home-construction',
        ],
        homeInteriors: ['/', 'business', 'realtysolution', 'home-interiors'],
        assetManagement: [
          '/',
          'business',
          'realtysolution',
          'asset-management',
        ],
        relocation: ['/', 'business', 'realtysolution', 'relocation'],
      },
      eventManagement: {
        theBigDay: ['/', 'business', 'eventmanagement', 'thebigday'],
      },
    },
  },
};
