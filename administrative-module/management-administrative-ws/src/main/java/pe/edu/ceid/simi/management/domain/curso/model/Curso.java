package pe.edu.ceid.simi.management.domain.curso.model;


public class Curso {

	private int ccurso;
	private int cidioma;
	private int cnivel;
	private int ciclo;
	
	public Curso(int ccurso, int cidioma, int cnivel, int ciclo) {
		super();
		this.ccurso = ccurso;
		this.cidioma = cidioma;
		this.cnivel = cnivel;
		this.ciclo = ciclo;
	}
	
	public int getCcurso() {
		return ccurso;
	}
	public void setCcurso(int ccurso) {
		this.ccurso = ccurso;
	}
	public int getCidioma() {
		return cidioma;
	}
	public void setCidioma(int cidioma) {
		this.cidioma = cidioma;
	}
	public int getCnivel() {
		return cnivel;
	}
	public void setCnivel(int cnivel) {
		this.cnivel = cnivel;
	}
	public int getCiclo() {
		return ciclo;
	}
	public void setCiclo(int ciclo) {
		this.ciclo = ciclo;
	}
	
	
}
