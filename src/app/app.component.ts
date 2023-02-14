import { Component } from '@angular/core';
import { CalculoCdbService } from './service/calculo-cdb.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	valorInicial: number = 0;
	quantidade: number = 0;
	valorRetornado: number = 0;

	constructor(private service: CalculoCdbService) { }

	getValorRetornado() {
		this.service.getValor(this.valorInicial, this.quantidade).subscribe((res: any) => {
			this.valorRetornado = res; // substitua "valor" pelo nome do campo que retorna o valor na sua API
		});
	}
}
