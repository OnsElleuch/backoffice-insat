import { INavData } from '@coreui/angular';
import { User } from './shared/models/user.model';
let user= new User();
if(JSON.parse(localStorage.getItem('user'))){
user= new User(JSON.parse(localStorage.getItem('user')).id,JSON.parse(localStorage.getItem('user')).name, JSON.parse(localStorage.getItem('user')).privilege,JSON.parse(localStorage.getItem('user')).email,JSON.parse(localStorage.getItem('user')).password,JSON.parse(localStorage.getItem('user')).profile_picture,JSON.parse(localStorage.getItem('user')).description,JSON.parse(localStorage.getItem('user')).president);
} 
export let navItems: INavData[];
if (user.privilege == 1) {
  navItems = [

    {
      title: true,
      name: 'Actualités',
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
          name: 'Ajouter un évènement',
          url: '/event/add-event'
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
    }
  ];
}
if (user.privilege == 2) {
  navItems = [


    {
      title: true,
      name: 'Etudiants'
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
    }
  ];
}
if (user.privilege == 3) {
  navItems = [


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
          name: 'Ajouter un évènement',
          url: '/event/add-event'
        },
        {
          name: 'Voir les événements',
          url: '/event/list-events',
        },
      ]
    }
  ];
}
