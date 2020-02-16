package pe.edu.ceid.simi.operative.domain.apertura.model;

public class Apertura {
	private int idApertura;
	private int codEstudiante;
	private int idCurso;
	private int idGrupohorario;
	
	public Apertura(int idApertura, int codEstudiante, int idCurso, int idGrupohorario) {
		super();
		this.idApertura = idApertura;
		this.codEstudiante = codEstudiante;
		this.idCurso = idCurso;
		this.idGrupohorario = idGrupohorario;
	}

	public int getIdApertura() {
		return idApertura;
	}

	public void setIdApertura(int idApertura) {
		this.idApertura = idApertura;
	}

	public int getCodEstudiante() {
		return codEstudiante;
	}

	public void setCodEstudiante(int codEstudiante) {
		this.codEstudiante = codEstudiante;
	}

	public int getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(int idCurso) {
		this.idCurso = idCurso;
	}

	public int getIdGrupohorario() {
		return idGrupohorario;
	}

	public void setIdGrupohorario(int idGrupohorario) {
		this.idGrupohorario = idGrupohorario;
	}

}
