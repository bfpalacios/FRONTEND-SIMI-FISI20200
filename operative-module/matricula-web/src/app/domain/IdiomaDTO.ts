import { PlanEstudioComponent } from '../modules/centro-idiomas/plan-estudio/plan-estudio.component';
import { DetalleNota } from 'src/app/domain/DetalleNota';

export class IdiomaDTO{
    idIdioma : number;
    nom_Idioma : string;
    planes:DetalleNota[];
}