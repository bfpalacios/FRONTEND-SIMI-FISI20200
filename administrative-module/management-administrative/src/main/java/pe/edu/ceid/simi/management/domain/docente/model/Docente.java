package pe.edu.ceid.simi.management.domain.docente.model;

public class Docente {
	
	private int cusuario;
	private int cdocente;
	private int tipoContrato;
	
	public Docente(int cusuario, int cdocente, int tipoContrato) {
		super();
		this.cusuario = cusuario;
		this.cdocente = cdocente;
		this.tipoContrato = tipoContrato;
	}
	
	public int getCusuario() {
		return cusuario;
	}
	public void setCusuario(int cusuario) {
		this.cusuario = cusuario;
	}
	public int getCdocente() {
		return cdocente;
	}
	public void setCdocente(int cdocente) {
		this.cdocente = cdocente;
	}
	public int getTipoContrato() {
		return tipoContrato;
	}
	public void setTipoContrato(int tipoContrato) {
		this.tipoContrato = tipoContrato;
	}
	
}
