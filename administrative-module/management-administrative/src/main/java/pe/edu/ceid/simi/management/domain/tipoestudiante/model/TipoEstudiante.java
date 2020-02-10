package pe.edu.ceid.simi.management.domain.tipoestudiante.model;

public class TipoEstudiante {
	
	private int ctipoEstudiante;
	private String nomTipoEstudiante;
	private float precioMatricula;
	
	public TipoEstudiante(int ctipoEstudiante, String nomTipoEstudiante, float precioMatricula) {
		super();
		this.ctipoEstudiante = ctipoEstudiante;
		this.nomTipoEstudiante = nomTipoEstudiante;
		this.precioMatricula = precioMatricula;
	}
	
	public int getCtipoEstudiante() {
		return ctipoEstudiante;
	}
	public void setCtipoEstudiante(int ctipoEstudiante) {
		this.ctipoEstudiante = ctipoEstudiante;
	}
	public String getNomTipoEstudiante() {
		return nomTipoEstudiante;
	}
	public void setNomTipoEstudiante(String nomTipoEstudiante) {
		this.nomTipoEstudiante = nomTipoEstudiante;
	}
	public float getPrecioMatricula() {
		return precioMatricula;
	}
	public void setPrecioMatricula(float precioMatricula) {
		this.precioMatricula = precioMatricula;
	}
	
}
