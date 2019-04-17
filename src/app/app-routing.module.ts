import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				loadChildren: './index/index.module#IndexModule'
			}
		]
	}
];