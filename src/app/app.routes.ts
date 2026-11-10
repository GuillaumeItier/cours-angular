import { Routes } from '@angular/router';
//!/! Import de la classe  Route classique pour définir les routes de l'application
import { About } from './pages/about/about';
import { TextInterpolationLesson } from './pages/lessons/text-interpolation-lesson/text-interpolation-lesson';


export const routes: Routes = [
  //! Route pour la page À propos (classique)
  { path: 'about', component: About },
  //? Route par défaut pour rediriger vers la page Home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //? Route en Lazy loading pour la page Home (module)
  //? La route sera chargée uniquement lorsque l'utilisateur naviguera vers cette route
  {
    path: 'home',
    // Lazy Loading du composant
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  { path: 'text-interpolation-lesson', component: TextInterpolationLesson },
  
];