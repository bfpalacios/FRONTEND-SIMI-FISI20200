package pe.edu.ceid.simi.management.domain.docente.model;

public class DocenteDTO {
	
	private int cusuario;
	private String nombre;
	private String apellidoPat;
	private String apellidoMat;
	private int cdocente;
	private int tipoContrato;
	private String nomTipoContrato;
	
	public DocenteDTO(int cusuario, String nombre, String apellidoPat, String apellidoMat, int cdocente,
			int tipoContrato, String nomTipoContrato) {
		super();
		this.cusuario = cusuario;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.cdocente = cdocente;
		this.tipoContrato = tipoContrato;
		this.nomTipoContrato = nomTipoContrato;
	}
	
	public DocenteDTO(int cusuario, int cdocente, int tipoContrato) {
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
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidoPat() {
		return apellidoPat;
	}
	public void setApellidoPat(String apellidoPat) {
		this.apellidoPat = apellidoPat;
	}
	public String getApellidoMat() {
		return apellidoMat;
	}
	public void setApellidoMat(String apellidoMat) {
		this.apellidoMat = apellidoMat;
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
	public String getNomTipoContrato() {
		return nomTipoContrato;
	}
	public void setNomTipoContrato(String nomTipoContrato) {
		this.nomTipoContrato = nomTipoContrato;
	}
	
}
