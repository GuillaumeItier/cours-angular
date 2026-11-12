import { booleanAttribute, Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-signal-exercice',
  styleUrl: './signal-exercice.css',
  templateUrl: './signal-exercice.html',
})
export class SignalExercice {

  quantity = signal<number>(1);
  unitPrice = signal<number>(35) ;
  discountPercent = signal<0 | 10 | 20>(0);
  isExpressShipping = signal<boolean>(false) ;

  subTotal = computed<number>(() =>
    this.quantity() * this.unitPrice()
  )

  discountAmount = computed<number>(() => {
    const result = (this.subTotal() / 100) * this.discountPercent();
    return Number(result.toFixed(2));
  });

  shippingFee = computed<number>(() => {
    if(this.quantity() === 0 ){
      return 0 ;
    }else if(this.subTotal() >= 100){
      return 0 ; 
    }else if(this.isExpressShipping()){
      return 12 ;
    }
    return 5 ;
  })

  total = computed<number>(() =>{
    return this.subTotal() + this.shippingFee() - this.discountAmount()
  })
  constructor() {
    effect(() => {
      // 1. Création de l'objet avec vos 4 données
      const cart = {
        quantity: this.quantity(),
        unitPrice: this.unitPrice(),
        discountPercent: this.discountPercent(),
        isExpressShipping: this.isExpressShipping()
      };
      localStorage.setItem('cart_demo_signals', JSON.stringify(cart));
      console.log('État courant du panier :', cart);
    });
  }

  incrementQuantity(): void {
  this.quantity.update(q => q + 1);
  }

  decrementQuantity(): void {
    if(this.quantity() > 0 ){
      this.quantity.update(q => q - 1);
    }
  }

  setDiscount(Percent: 0 | 10 | 20): void {
  this.discountPercent.set(Percent);
  }

  toggleExpressShipping(): void {
    this.isExpressShipping.update( b => !b);
  }

  resetCart(): void {
    this.quantity.set(1);
    this.unitPrice.set(35);
    this.discountPercent.set(0);
    this.isExpressShipping.set(false);
  }

}
