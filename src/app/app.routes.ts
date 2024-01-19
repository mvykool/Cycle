import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'products',
		loadComponent: () => import('./components/products/products.component').then((m) => m.ProductsComponent)
	}
];
