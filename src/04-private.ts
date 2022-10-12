export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.addPadding(this.day)}/${this.addPadding(this.month)}/${
      this.year
    }`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());
console.log(myDate.getDay());
