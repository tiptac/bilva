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
        homeConstruction: {
          default: ['/', 'business', 'realtysolution', 'home-construction'],
          ourProjects: [
            '/',
            'business',
            'realtysolution',
            'home-construction',
            'our-projects',
          ],
          contractComparision: [
            '/',
            'business',
            'realtysolution',
            'home-construction',
            'contract-comparision',
          ],
          testimonials: [
            '/',
            'business',
            'realtysolution',
            'home-construction',
            'testimonials',
          ],
        },
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
