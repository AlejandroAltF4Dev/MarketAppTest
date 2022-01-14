import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Market } from '../../state/market.model';

@Component({
  selector: 'app-markets-form',
  templateUrl: './markets-form.component.html',
  styleUrls: ['./markets-form.component.scss'],
})
export class MarketsFormComponent implements OnInit {
  form: FormGroup;
  @Input() market: Market;
  @Output() saved = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      id: ['', []],
      symbol: ['', [Validators.required]],
      name: ['', [Validators.required]],
      country: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      ipoYear: ['', [Validators.required]],
      marketCap: ['', [Validators.required]],
      sector: ['', [Validators.required]],
      volume: ['', [Validators.required]],
      netChange: ['', [Validators.required]],
      netChangePercent: ['', [Validators.required]],
      lastPrice: ['', [Validators.required]],
    });
    if (this.market) {
      this.form.patchValue(this.market);
    }
  }

  save() {
    if (this.form.invalid) {
      return;
    }
    const market = this.form.value;
    this.saved.emit(market);
  }
}
