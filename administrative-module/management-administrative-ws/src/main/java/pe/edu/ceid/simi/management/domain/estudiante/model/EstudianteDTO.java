package pe.edu.ceid.simi.management.domain.estudiante.model;

public class EstudianteDTO {
	
	private int cestudiante;
	private int cusuario;
	private String nombre;				// cusuario
	private String apellidoPat;			// cusuario
	private String apellidoMat;			// cusuario
	private int ctipoEsudiante;
	private String nomTipoEstudiante;	// ctipoEsudiante
	private String facultad;
	
	public EstudianteDTO(int cestudiante, int cusuario, String nombre, String apellidoPat, String apellidoMat,
			int ctipoEsudiante, String nomTipoEstudiante, String facultad) {
		super();
		this.cestudiante = cestudiante;
		this.cusuario = cusuario;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.ctipoEsudiante = ctipoEsudiante;
		this.nomTipoEstudiante = nomTipoEstudiante;
		this.facultad = facultad;
	}
	
	public EstudianteDTO(int cestudiante, int cusuario, int ctipoEsudiante, String facultad) {
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
	public int getCtipoEsudiante() {
		return ctipoEsudiante;
	}
	public void setCtipoEsudiante(int ctipoEsudiante) {
		this.ctipoEsudiante = ctipoEsudiante;
	}
	public String getNomTipoEstudiante() {
		return nomTipoEstudiante;
	}
	public void setNomTipoEstudiante(String nomTipoEstudiante) {
		this.nomTipoEstudiante = nomTipoEstudiante;
	}
	public String getFacultad() {
		return facultad;
	}
	public void setFacultad(String facultad) {
		this.facultad = facultad;
	}
	
}
