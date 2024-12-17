import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Calculator';
  calVal: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;
  onClickValue(val: string, type: any) {
    if (type == 'number') {
      this.onNumberClick(val);
    } else if (type == 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;
    } else {
      this.calNumber = val;
    }
    this.calVal = parseFloat(this.calNumber);
  }
  onFunctionClick(val: string) {
    if (val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'NoFunction') {
      this.firstNumber = this.calVal;
      this.calVal = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    } else if (this.funcT !== 'NoFunction') {
      this.secondNumber = this.calVal;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val: string) {
    if (this.funcT == '+') {
      const total = this.firstNumber + this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == '-') {
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == '*') {
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total, val);
    }
    if (this.funcT == '/') {
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total, val);
      if (val == '=') {
        this.onEqualPress();
      }
    }
    if (this.funcT == '%') {
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total, val);
    }
  }
  totalAssignValues(total: number, val: string) {
    this.calVal = total;
    this.firstNumber = total;
    this.secondNumber = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
    if (val == '=') {
      this.onEqualPress();
    }
  }
  onEqualPress() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
  clearAll() {
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.calVal = 0;
    this.funcT = 'NoFunction';
    this.calNumber = 'noValue';
  }
}
