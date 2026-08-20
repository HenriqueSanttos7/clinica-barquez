import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Clínica Barquez | Saúde e Bem-Estar',
    loadComponent: () => import('./pages/home/home').then((component) => component.Home),
  },
  {
    path: 'servicos',
    title: 'Serviços | Clínica Barquez',
    loadComponent: () =>
      import('./pages/services/services').then((component) => component.Services),
  },
  {
    path: 'servicos/:slug',
    loadComponent: () =>
      import('./pages/service-detail/service-detail').then(
        (m) => m.ServiceDetail
      ),
  },
  {
    path: 'sobre',
    title: 'Sobre Nós | Clínica Barquez',
    loadComponent: () => import('./pages/about/about').then((component) => component.About),
  },
  {
    path: 'equipe',
    title: 'Nossa Equipe | Clínica Barquez',
    loadComponent: () => import('./pages/team/team').then((component) => component.Team),
  },
  {
    path: 'contato',
    title: 'Contato | Clínica Barquez',
    loadComponent: () => import('./pages/contact/contact').then((component) => component.Contact),
  },
  {
    path: 'politica-de-privacidade',
    title: 'Política de Privacidade | Clínica Barquez',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy').then((m) => m.PrivacyPolicy),
  },
  {
    path: '**',
    title: 'Página não encontrada | Clínica Barquez',
    loadComponent: () =>
      import('./pages/not-found/not-found').then((component) => component.NotFound),
  },
];
