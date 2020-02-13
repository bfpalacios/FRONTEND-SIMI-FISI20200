package pe.edu.ceid.simi.management.domain.progcurso.model;

public class ProgCurso {
	
	private int idProgCurso;
	private int idProgDocCur;
	private int idAula;
	private int idGrupoHorario;
	private int idEstadoProgCurso;
	
	public ProgCurso(int idProgCurso, int idProgDocCur, int idAula, int idGrupoHorario, int idEstadoProgCurso) {
		super();
		this.idProgCurso = idProgCurso;
		this.idProgDocCur = idProgDocCur;
		this.idAula = idAula;
		this.idGrupoHorario = idGrupoHorario;
		this.idEstadoProgCurso = idEstadoProgCurso;
	}
	
	public int getIdProgCurso() {
		return idProgCurso;
	}
	public void setIdProgCurso(int idProgCurso) {
		this.idProgCurso = idProgCurso;
	}
	public int getIdProgDocCur() {
		return idProgDocCur;
	}
	public void setIdProgDocCur(int idProgDocCur) {
		this.idProgDocCur = idProgDocCur;
	}
	public int getIdAula() {
		return idAula;
	}
	public void setIdAula(int idAula) {
		this.idAula = idAula;
	}
	public int getIdGrupoHorario() {
		return idGrupoHorario;
	}
	public void setIdGrupoHorario(int idGrupoHorario) {
		this.idGrupoHorario = idGrupoHorario;
	}
	public int getIdEstadoProgCurso() {
		return idEstadoProgCurso;
	}
	public void setIdEstadoProgCurso(int idEstadoProgCurso) {
		this.idEstadoProgCurso = idEstadoProgCurso;
	}
	
}
