import { Component } from '@angular/core';
import { signal, computed, effect, WritableSignal } from '@angular/core';

// Expressions régulières de validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!\%*?&]{8,}$/;
const PHONE_REGEX = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/;

const HAS_LOWERCASE = /[a-z]/;
const HAS_UPPERCASE = /[A-Z]/;
const HAS_NUMBER = /[0-9]/;
const HAS_SPECIAL = /[@$!%*?&]/;


@Component({
  imports: [],
  selector: 'app-signals-form-exercice',
  styleUrl: './signals-form-exercice.css',
  templateUrl: './signals-form-exercice.html',
})


export class SignalsFormExercice {

  email = signal<string>("");
  password = signal<string>("");
  phone = signal<string>("");

  //  Affichage du mot de pass
  showPassword = signal<boolean>(false);

  //  Suivi des intéractions 
  emailTouched = signal<boolean>(false);
  passwordTouched = signal<boolean>(false);
  phoneTouched = signal<boolean>(false);

  // Etat de soumission du formulaire
  isSubmitted = signal<boolean>(false);

  // COMPUTED VALIDATION DU FORMULAIRE 
  isEmailValid = computed<boolean>(() => {
    return EMAIL_REGEX.test(this.email()) 
  })
  isPasswordValid = computed<boolean>(() => {
    return PASSWORD_REGEX.test(this.password()) 
  })
  isPhoneValid = computed<boolean>(() => {
    return PHONE_REGEX.test(this.phone()) 
  })


  isFormValid = computed<boolean>(() => {
    return this.isEmailValid() && this.isPasswordValid() && this.isPhoneValid();
  });


  //COMPUTED SCORE PASSWORD
  passwordScore = computed<number>(() => {
  const password = this.password() ;
  let score = 0 ;

  if (password.length >= 8) {
    score ++ ;
  }
  if (HAS_LOWERCASE.test(password) && HAS_UPPERCASE.test(password)) {
    score ++ ;
  }
  if (HAS_NUMBER.test(password)) {
    score ++ ;
  }
  if (HAS_SPECIAL.test(password)) {
    score ++ ;
  }
  return score ;
});

passwordStrengthLabel = computed(() => {
  const score = this.passwordScore() ;

  if (score === 4){
     return { text: 'Très fort', 
              class: 'progress-success' } ;
  }
  if (score === 3){
     return { text: 'Fort',
              class: 'progress-info' } ;
  } 
  if (score === 2){
     return { text: 'Moyen', 
              class: 'progress-warning' } ;
  }
  return { text: 'Invalide', 
           class: 'progress-error' } ;
});

//CONSTRUCTOR
constructor() {
  effect(() => {
    console.log('État de validité du formulaire :', this.isFormValid());
  });
}

//METHODES
onInput(targetSignal: WritableSignal<string>, touchedSignal: WritableSignal<boolean>, event: Event,): void {
  const input = event.target as HTMLInputElement;
  targetSignal.set(input.value);
  touchedSignal.set(true);
}

toggleShowPassword() : void {
  this.showPassword.set(!this.showPassword()) ;
}

submitForm(event : Event) : void {
  event.preventDefault() ; 
  this.emailTouched.set(true);
  this.passwordTouched.set(true);
  this.phoneTouched.set(true);

  if (this.isFormValid()) {
    this.isSubmitted.set(true);
  }
}

resetForm() : void {
  this.email.set("") ;
  this.phone.set("") ;
  this.password.set("") ;
  this.emailTouched.set(false) ;
  this.phoneTouched.set(false) ;
  this.passwordTouched.set(false) ; 
  this.isSubmitted.set(false) ;
}

}


