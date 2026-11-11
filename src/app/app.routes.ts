import { Routes } from '@angular/router';
//!/! Import de la classe  Route classique pour définir les routes de l'application
import { About } from './pages/about/about';
import { TextInterpolationLesson } from './pages/lessons/text-interpolation-lesson/text-interpolation-lesson';
import { AttributesBindingLesson } from './pages/lessons/attributes-binding-lesson/attributes-binding-lesson';
import { EventBindingLesson } from './pages/lessons/event-binding-lesson/event-binding-lesson'
import { TextInterpolationExercice } from './pages/exercices/text-interpolation-exercice/text-interpolation-exercice';
import { PropertyBindingExercice } from './pages/exercices/property-binding-exercice/property-binding-exercice';
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
  { path: 'attributes-binding-lesson', component: AttributesBindingLesson },
  { path: 'event-binding-lesson', component: EventBindingLesson },
  { path: 'text-interpolation-exercice', component: TextInterpolationExercice },
  { path: 'property-binding-exercice', component: PropertyBindingExercice },
  
  
];