import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {Directive, Input} from "@angular/core";

@Directive({
  selector:'[appConfimEqualValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]

})

//Tso validate passwords identification
export class ConfirmEqualValidatorDirective implements Validator{
@Input() appConfimEqualValidator: string;
  validate(control: AbstractControl): {[key:string]:any} | null {
    const controleToCompare=control.parent.get(this.appConfimEqualValidator);

    if(controleToCompare && controleToCompare.value !== control.value){
      return{'notEqual':true};
    }
    return null;
  }

}
