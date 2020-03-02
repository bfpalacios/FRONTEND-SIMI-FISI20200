export class EstudianteUP {

    idPersona: number;
    nombre: string; 
    apellidoPat: string; 
    apellidoMat: string; 

    dni: number; 
    genero: number; 
    edad: number; 
    fechaNacimiento: string; 
    
            lugarNacDist: string; 
            lugarNacProv: string; 
            lugarNacDep: string; 
    nacionalidad: string; 
    address: string; 
    phone: string;

    fechaAltaP: Date; //-crea registro
    fechaModP: Date; //-modif registro
    
    university: string; 

    idUsuario: number; 
    email: string;
    contrasenia: string; 
    idRol: number; 
    nomRol: string; 
         estado: number; 
    fechaAltaU: Date; 
    fechaBajaU: Date; 
    idUsuarioMod: number; 

    codEstudiante: string; 
    idTipoEstudiante: number; 
    nomTipoEstudiante: string; 

}
