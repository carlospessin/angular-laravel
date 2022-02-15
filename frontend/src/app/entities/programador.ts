import { Sexo } from './../enums/sexo.enum';
import { Nivel } from './nivel';

export interface Programador {
    id: number;
    nome: string;
    endereco: string;
    sexo: Sexo;
    data_nascimento: Date;
    idade: number;
    hobby: string;
    nivel_id: number;
    nivel: Nivel;
}
