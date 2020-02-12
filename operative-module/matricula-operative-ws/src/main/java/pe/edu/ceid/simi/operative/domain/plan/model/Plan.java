package pe.edu.ceid.simi.operative.domain.plan.model;

public class Plan {
	private int idcurso;
	private int ididioma;
	private int idnivel;
	private int ciclo;
	
	public Plan(int idcurso, int ididioma, int idnivel, int ciclo) {
		super();
		this.idcurso = idcurso;
		this.ididioma = ididioma;
		this.idnivel = idnivel;
		this.ciclo = ciclo;
	}

	public int getIdcurso() {
		return idcurso;
	}

	public void setIdcurso(int idcurso) {
		this.idcurso = idcurso;
	}

	public int getIdidioma() {
		return ididioma;
	}

	public void setIdidioma(int ididioma) {
		this.ididioma = ididioma;
	}

	public int getIdnivel() {
		return idnivel;
	}

	public void setIdnivel(int idnivel) {
		this.idnivel = idnivel;
	}

	public int getCiclo() {
		return ciclo;
	}

	public void setCiclo(int ciclo) {
		this.ciclo = ciclo;
	}
	
	
}
