package pe.edu.ceid.simi.management.domain.estudiante.model;

public class Estudiante {
	
	private int codEstudiante;
	private int idUsuario;
	private int idTipoEstudiante;
	private int codEstudianteAsm;
	
	public Estudiante(int cestudiante, int cusuario, int ctipoEsudiante, int codEstudianteAsm) {
		super();
		this.codEstudiante = cestudiante;
		this.idUsuario = cusuario;
		this.idTipoEstudiante = ctipoEsudiante;
		this.codEstudianteAsm = codEstudianteAsm;
	}
	
	public int getCestudiante() {
		return codEstudiante;
	}
	public void setCestudiante(int cestudiante) {
		this.codEstudiante = cestudiante;
	}
	public int getCusuario() {
		return idUsuario;
	}
	public void setCusuario(int cusuario) {
		this.idUsuario = cusuario;
	}
	public int getCtipoEsudiante() {
		return idTipoEstudiante;
	}
	public void setCtipoEsudiante(int ctipoEsudiante) {
		this.idTipoEstudiante = ctipoEsudiante;
	}
	public int getCodEstudianteAsm() {
		return codEstudianteAsm;
	}
	public void setCodEstudianteAsm(int codEstudianteAsm) {
		this.codEstudianteAsm = codEstudianteAsm;
	}
	
}
