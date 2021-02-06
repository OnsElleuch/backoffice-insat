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
      {
        name: 'Voir les actualités',
        url: '/news/list-news',
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
      {
        name: 'Voir les emplois',
        url: '/calendrier/list-calendriers',
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
      {
        name: 'Voir les notes',
        url: '/notes/list-notes',
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
      },
      {
        name: 'Voir les événements',
        url: '/event/list-events',
      },
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
      {
        name: 'Voir les rendez-vous',
        url: '/rendez-vous/rendez-vous-list',
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
    divider: true
  },
  {
    title: true,
    name: 'Relations externes'
  },
  {
    name: 'Partenariats',
    url: '/partenariats',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter une partenariat',
        url: '/partenariats/add-partenariat',
      },
      {
        name: 'Voir les partenariats',
        url: '/partenariats/list-partenariats',
      },
    ]
  },
  {
    name: 'Conventions',
    url: '/conventions',
    icon: 'icon-bell',
    children: [
      {
        name: 'Ajouter une convention',
        url: '/conventions/add-convention',
      },
      {
        name: 'Voir les conventions',
        url: '/conventions/list-conventions',
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