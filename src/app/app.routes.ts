import { Routes } from '@angular/router';
//!/! Import de la classe  Route classique pour définir les routes de l'application
import { About } from './pages/about/about';
import { TextInterpolationLesson } from './pages/lessons/text-interpolation-lesson/text-interpolation-lesson';
import { AttributesBindingLesson } from './pages/lessons/attributes-binding-lesson/attributes-binding-lesson';
import { EventBindingLesson } from './pages/lessons/event-binding-lesson/event-binding-lesson'
import { TwoWayBindingLesson } from './pages/lessons/two-way-binding-lesson/two-way-binding-lesson';
import { ConditionalRenderingLesson } from './pages/lessons/conditional-rendering-lesson/conditional-rendering-lesson';
import { TextInterpolationExercice } from './pages/exercices/text-interpolation-exercice/text-interpolation-exercice';
import { PropertyBindingExercice } from './pages/exercices/property-binding-exercice/property-binding-exercice';
import { EventBindingExercice } from './pages/exercices/event-binding-exercice/event-binding-exercice';
import { ConditionalRenderingExercice } from './pages/exercices/conditional-rendering-exercice/conditional-rendering-exercice';
import { TwoWayDataBindingExercice } from './pages/exercices/two-way-data-binding-exercice/two-way-data-binding-exercice';
import { SignalExercice } from './pages/exercices/signal-exercice/signal-exercice';
import { EnvironmentInjector } from '@angular/core';

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
  { path: 'two-way-binding-lesson', component: TwoWayBindingLesson},
  { path: 'conditional-rendering-lesson', component: ConditionalRenderingLesson},
  { path: 'text-interpolation-exercice', component: TextInterpolationExercice },
  { path: 'property-binding-exercice', component: PropertyBindingExercice },
  { path: 'event-binding-exercice', component: EventBindingExercice},
  { path: 'conditional-rendering-exercice', component: ConditionalRenderingExercice},
  { path: 'two-way-data-binding-exercice', component: TwoWayDataBindingExercice},
  { path: 'signal-exercice', component: SignalExercice},

   //! ---------- Le système page Not Found ---------------------------------------------------------------------
  // Dans Angular il faut placer à la fin le path:'**'
  // ! check la doc si ya meilleure manière de faire ou plus simple ? aller explorer analog ?
  {
    path:'**',
    loadComponent:()=>import('./shared/not-found/not-found').then(m=>m.NotFound)
  }
  
  
];