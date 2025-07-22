import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi: true
    }
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent implements ControlValueAccessor {
  @Input() label ='Email';
  @Input() id = '';
  @Input() disabled = false;
  @Input() mail = '';
  @Input() name = '';
  @Input() placeholder = 'Enter your email-id';
  @Input() readonly = false;
  value = '';

   writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  
  onTouched: () => void = () => { return; };

  onChange: (value: string) => void = () => { return; };

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.onTouched();
  }
}
