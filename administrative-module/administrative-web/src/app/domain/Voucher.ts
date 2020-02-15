export class Voucher {
    codigo: number;
    secuencia: number;
    descripcion;
    t: number;
    nroDocumento: string;
    nr: number;
    importe: number;
    estado: number;
    fecha: string;
    hora: string;
    c: number;
    agencia: number;
    cajero: number;
    filler: number;
    mod_manual: number;

    public transformatVoucher(v: any) {
        this.codigo = v.cod;
        this.secuencia = v.sec;
        this.descripcion = v.descripcion;
        this.t = v.t;
        this.nroDocumento = v.nrodocumento;
        this.nr = v.nr;
        this.importe = v.importe;
        this.estado = v.comilla;
        this.fecha = v.fecha;
        this.hora = v.hora;
        this.c = v.c;
        this.agencia = v.agencia;
        this.cajero = v.cajero;
        this.filler = v.filler;
        this.mod_manual = v. mod_manual;
    }
}