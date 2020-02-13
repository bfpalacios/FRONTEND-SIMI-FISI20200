package pe.edu.ceid.simi.management.domain.periodoacademico.model;

public class PeriodoAcademico {

	private int cperiodo;
	private int anioPeriodo;
	private int mesPeriodo;
	private String nomPeriodo;
	private String fechaInicio;
	private String fechaFin;
	
	public PeriodoAcademico(int cperiodo, int anioPeriodo, int mesPeriodo, String nomPeriodo, String fechaInicio, String fechaFin) {
		super();
		this.cperiodo = cperiodo;
		this.anioPeriodo = anioPeriodo;
		this.mesPeriodo = mesPeriodo;
		this.fechaInicio = fechaInicio;
		this.fechaFin = fechaFin;
		this.nomPeriodo = nomPeriodo;
	}
	
	public String getNomPeriodo() {
		return nomPeriodo;
	}

	public void setNomPeriodo(String nomPeriodo) {
		this.nomPeriodo = nomPeriodo;
	}


	public String getFechaInicio() {
		return fechaInicio;
	}



	public void setFechaInicio(String fechaInicio) {
		this.fechaInicio = fechaInicio;
	}



	public String getFechaFin() {
		return fechaFin;
	}



	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
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
