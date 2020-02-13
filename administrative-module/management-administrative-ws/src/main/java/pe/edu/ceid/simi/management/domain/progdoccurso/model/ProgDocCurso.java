package pe.edu.ceid.simi.management.domain.progdoccurso.model;

public class ProgDocCurso {

	private int idProgDocCur;
	private int idDocente;
	private int idCurso;
	private int idPeriodo;
	
	public ProgDocCurso(int idProgDocCur, int idDocente, int idCurso, int idPeriodo) {
		super();
		this.idProgDocCur = idProgDocCur;
		this.idDocente = idDocente;
		this.idCurso = idCurso;
		this.idPeriodo = idPeriodo;
	}
	
	public int getCprogDocCur() {
		return idProgDocCur;
	}
	public void setCprogDocCur(int cprogDocCur) {
		this.idProgDocCur = cprogDocCur;
	}
	public int getCdocente() {
		return idDocente;
	}
	public void setCdocente(int cdocente) {
		this.idDocente = cdocente;
	}
	public int getCcurso() {
		return idCurso;
	}
	public void setCcurso(int ccurso) {
		this.idCurso = ccurso;
	}
	public int getCperiodo() {
		return idPeriodo;
	}
	public void setCperiodo(int cperiodo) {
		this.idPeriodo = cperiodo;
	}
	
}
