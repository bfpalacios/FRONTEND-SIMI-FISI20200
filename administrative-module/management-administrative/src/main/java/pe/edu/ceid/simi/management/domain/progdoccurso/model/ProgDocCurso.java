package pe.edu.ceid.simi.management.domain.progdoccurso.model;

public class ProgDocCurso {

	private int cprogDocCur;
	private int cdocente;
	private int ccurso;
	private int cperiodo;
	
	public ProgDocCurso(int cprogDocCur, int cdocente, int ccurso, int cperiodo) {
		super();
		this.cprogDocCur = cprogDocCur;
		this.cdocente = cdocente;
		this.ccurso = ccurso;
		this.cperiodo = cperiodo;
	}
	
	public int getCprogDocCur() {
		return cprogDocCur;
	}
	public void setCprogDocCur(int cprogDocCur) {
		this.cprogDocCur = cprogDocCur;
	}
	public int getCdocente() {
		return cdocente;
	}
	public void setCdocente(int cdocente) {
		this.cdocente = cdocente;
	}
	public int getCcurso() {
		return ccurso;
	}
	public void setCcurso(int ccurso) {
		this.ccurso = ccurso;
	}
	public int getCperiodo() {
		return cperiodo;
	}
	public void setCperiodo(int cperiodo) {
		this.cperiodo = cperiodo;
	}
	
}
