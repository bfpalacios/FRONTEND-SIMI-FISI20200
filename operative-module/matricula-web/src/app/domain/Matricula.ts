export class Matricula {
    idMatricula: number;
    codEstudiante: number;
    idProgcurso: number;
    numvouvher: number;
    estadoMat: number;
    docNumber: number;
    fechaMat: string;

    public crearMatricula(programacion: any) {
        this.idProgcurso = programacion.idpProgramacionCurso;
        this.numvouvher = programacion.voucher.codVoucher;
        this.docNumber = programacion.voucher.dni;
    }
}