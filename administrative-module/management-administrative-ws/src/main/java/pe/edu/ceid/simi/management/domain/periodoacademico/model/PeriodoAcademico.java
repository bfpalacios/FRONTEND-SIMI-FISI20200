package pe.edu.ceid.simi.management.domain.periodoacademico.model;

public class PeriodoAcademico {

	private int cperiodo;
	private int anioPeriodo;
	private int mesPeriodo;
	
	public PeriodoAcademico(int cperiodo, int anioPeriodo, int mesPeriodo) {
		super();
		this.cperiodo = cperiodo;
		this.anioPeriodo = anioPeriodo;
		this.mesPeriodo = mesPeriodo;
	}
	
	public PeriodoAcademico() {
		super();
	}

	public int getCperiodo() {
		return cperiodo;
	}
	public void setCperiodo(int cperiodo) {
		this.cperiodo = cperiodo;
	}
	public int getAnioPeriodo() {
		return anioPeriodo;
	}
	public void setAnioPeriodo(int anioPeriodo) {
		this.anioPeriodo = anioPeriodo;
	}
	public int getMesPeriodo() {
		return mesPeriodo;
	}
	public void setMesPeriodo(int mesPeriodo) {
		this.mesPeriodo = mesPeriodo;
	}
	
}
