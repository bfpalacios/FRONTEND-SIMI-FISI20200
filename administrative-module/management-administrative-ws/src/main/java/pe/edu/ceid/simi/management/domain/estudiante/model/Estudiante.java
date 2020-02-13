package pe.edu.ceid.simi.management.domain.estudiante.model;

public class Estudiante {
	
	private int cestudiante;
	private int cusuario;
	private int ctipoEsudiante;
	private String facultad;
	
	public Estudiante(int cestudiante, int cusuario, int ctipoEsudiante, String facultad) {
		super();
		this.cestudiante = cestudiante;
		this.cusuario = cusuario;
		this.ctipoEsudiante = ctipoEsudiante;
		this.facultad = facultad;
	}
	
	public int getCestudiante() {
		return cestudiante;
	}
	public void setCestudiante(int cestudiante) {
		this.cestudiante = cestudiante;
	}
	public int getCusuario() {
		return cusuario;
	}
	public void setCusuario(int cusuario) {
		this.cusuario = cusuario;
	}
	public int getCtipoEsudiante() {
		return ctipoEsudiante;
	}
	public void setCtipoEsudiante(int ctipoEsudiante) {
		this.ctipoEsudiante = ctipoEsudiante;
	}
	public String getFacultad() {
		return facultad;
	}
	public void setFacultad(String facultad) {
		this.facultad = facultad;
	}
	
}
