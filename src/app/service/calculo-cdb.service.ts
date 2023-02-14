import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CalculoCdbService {

	apiUrl = 'http://localhost:5177/api/CDB/'; // substitua pelo endpoint da sua API

	constructor(private http: HttpClient) { }

	getValor(valorInicial: number, quantidade: number) {
		return this.http.get(`${this.apiUrl}?VI=${valorInicial}&months=${quantidade}`);
	}
}
