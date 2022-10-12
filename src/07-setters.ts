export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    return `${this.addPadding(this._day)}/${this.addPadding(this._month)}/${
      this.year
    }`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(value: number) {
    if (value <= 12 && value >= 1) {
      this._month = value;
    } else {
      throw new Error('month out of range');
    }
  }
}

const myDate = new MyDate();
