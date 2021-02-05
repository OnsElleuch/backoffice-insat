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
    name: 'Etudiants'
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
    name: 'Gérer les notes',
    url: '/notes',
    icon: 'icon-graph',
    children: [
      {
        name: 'Faire une délibération',
        url: '/notes/add-notes',
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
    divider: true
  },
  {
    title: true,
    name: 'Rendez-Vous'
  },
  {
    name: 'Gérer les Rendez-vous',
    url: '/rendez-vous',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter un rendez-vous',
        url: '/rendez-vous/add-rendez-vous',
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Services de Direction et Administratifs'
  },
  {
    name: 'Gérer les membres',
    url: '/direction',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter un membre',
        url: '/direction/add-member',
      },
      {
        name: 'Voir les membres',
        url: '/direction/members-list',
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Laboratoires'
  },
  {
    name: 'Gérer les laboratoires',
    url: '/laboratoire',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter une laboratoire',
        url: '/laboratoire/add-lab',
      },
      {
        name: 'Voir les laboratoire',
        url: '/laboratoire/lab-list',
      },
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Enseignant'
  },
  {
    name: 'Gérer les enseignants',
    url: '/enseignant',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter une enseignant',
        url: '/enseignant/add-enseignant',
      },
      {
        name: 'Voir les enseignants',
        url: '/enseignant/enseignants-list',
      },
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