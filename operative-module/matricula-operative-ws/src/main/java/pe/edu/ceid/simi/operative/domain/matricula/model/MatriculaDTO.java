package pe.edu.ceid.simi.operative.domain.matricula.model;

public class MatriculaDTO {
	private int idmatricula;
	private int codEstudiante;
	private int idprogcurso;
	private int numvouvher;
	private int estadoMat;
	private String nomEstado;
	
	public MatriculaDTO(int idmatricula, int codEstudiante, int idprogcurso, int numvouvher, int estadoMat,
			String nomEstado) {
		super();
		this.idmatricula = idmatricula;
		this.codEstudiante = codEstudiante;
		this.idprogcurso = idprogcurso;
		this.numvouvher = numvouvher;
		this.estadoMat = estadoMat;
		this.nomEstado = nomEstado;
	}

	public int getIdmatricula() {
		return idmatricula;
	}

	public void setIdmatricula(int idmatricula) {
		this.idmatricula = idmatricula;
	}

	public int getCodEstudiante() {
		return codEstudiante;
	}

	public void setCodEstudiante(int codEstudiante) {
		this.codEstudiante = codEstudiante;
	}

	public int getIdprogcurso() {
		return idprogcurso;
	}

	public void setIdprogcurso(int idprogcurso) {
		this.idprogcurso = idprogcurso;
	}

	public int getNumvouvher() {
		return numvouvher;
	}

	public void setNumvouvher(int numvouvher) {
		this.numvouvher = numvouvher;
	}

	public int getEstadoMat() {
		return estadoMat;
	}

	public void setEstadoMat(int estadoMat) {
		this.estadoMat = estadoMat;
	}

	public String getNomEstado() {
		return nomEstado;
	}

	public void setNomEstado(String nomEstado) {
		this.nomEstado = nomEstado;
	}
	
	
}
