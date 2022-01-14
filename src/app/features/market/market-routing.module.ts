import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketsComponent } from './pages/markets/markets.component';
import { MarketsCreateComponent } from './pages/markets-create/markets-create.component';
import { MarketsEditComponent } from './pages/markets-edit/markets-edit.component';
import { MarketResolverService } from './market-resolver.service';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';

const routes: Routes = [
  { path: '', component: MarketsComponent },
  { path: 'create', component: MarketsCreateComponent },
  {
    path: 'edit/:id',
    component: MarketsEditComponent,
    resolve: {
      market: MarketResolverService,
    },
  },
  {
    path: 'details/:id',
    component: MarketDetailsComponent,
    resolve: {
      market: MarketResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
