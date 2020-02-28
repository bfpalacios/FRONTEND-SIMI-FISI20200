import { Component, OnInit, Input } from '@angular/core';
import { PersonaUsuario } from 'src/app/models/PersonaUsuario';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrls: ['./informacion-personal.component.css']
})
export class InformacionPersonalComponent implements OnInit {

  @Input() public user: PersonaUsuario;
  constructor() { }

  ngOnInit(): void {
  }

}
