import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { MarketsComponent } from './pages/markets/markets.component';
import { MarketsCreateComponent } from './pages/markets-create/markets-create.component';
import { MarketsEditComponent } from './pages/markets-edit/markets-edit.component';
import { MarketsTableComponent } from './components/markets-table/markets-table.component';
import { MarketsFormComponent } from './components/markets-form/markets-form.component';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../../layout/core.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { DetailsItemComponent } from './components/details-item/details-item.component';
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {EffectsNgModule} from "@ngneat/effects-ng";
import {MarketEffects} from "./market.effects";

@NgModule({
  declarations: [
    MarketsComponent,
    MarketsCreateComponent,
    MarketsEditComponent,
    MarketsFormComponent,
    MarketsTableComponent,
    MarketDetailsComponent,
    DetailsItemComponent,
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    MatTableModule,
    CoreModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatCardModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    EffectsNgModule.forFeature([MarketEffects])
  ],
})
export class MarketModule {}
