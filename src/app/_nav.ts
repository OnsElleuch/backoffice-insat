import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'Actualités'
  },
  {
    name: 'Gérer les actualités',
    url: '/news',
    icon: 'icon-star',
    children: [
      {
        name: 'Ajouter une actualité',
        url: '/news/add-news',
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Emplois de temps'
  },
  {
    name: 'Gérer les emplois',
    url: '/calendrier',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter un emploi',
        url: '/calendrier/add-calendrier',
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Formulaires Club'
  },
  {
    name: 'Evènement',
    url: '/event',
    icon: 'icon-puzzle',
    children: [
      {
        name:'Ajouter un évènement',
        url:'/event/add-event'
      }
    ]
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: { disabled: true },
  // },
];
