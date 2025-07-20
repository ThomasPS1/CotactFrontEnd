import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-text',
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true
    }
  ],
  templateUrl: './text.component.html',
  styleUrl: './text.component.scss'
})
export class TextComponent implements ControlValueAccessor {

  @Input() label = 'Text';
  @Input() id = '';
  @Input() disabled = false;
  @Input() name = '';
  @Input() placeholder = 'Enter your text';
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
