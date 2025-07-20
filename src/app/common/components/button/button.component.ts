import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() content = 'Button';
  @Input() disabled = false;
  @Input() severity: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Output() onclick = new EventEmitter<void>();

    getClasses() {
    const classes = ['p-2 rounded cursor-pointer w-full disabled:cursor-not-allowed,opacity-50 text-white font-semi-bold'];
    switch (this.severity) {
      case 'primary':
        classes.push(' bg-slate-700');
        break;
      case 'secondary':
        classes.push('bg-sky-800');
        break;
      case 'success':
        classes.push('bg-lime-600');
        break;
      case 'danger':
        classes.push('bg-red-600');
        break;
    }
    return classes;
  }

  handleClick() {
    if (!this.disabled) {
      this.onclick.emit();
    }
  }
}
