package pe.edu.ceid.simi.management.domain.curso.model;


public class Curso {

	private int idCurso;
	private int idIdioma;
	private int idNivel;
	private int ciclo;
	
	public Curso(int ccurso, int cidioma, int cnivel, int ciclo) {
		super();
		this.idCurso = ccurso;
		this.idIdioma = cidioma;
		this.idNivel = cnivel;
		this.ciclo = ciclo;
	}
	
	public Curso() {
		super();
	}

	public int getCcurso() {
		return idCurso;
	}
	public void setCcurso(int ccurso) {
		this.idCurso = ccurso;
	}
	public int getCidioma() {
		return idIdioma;
	}
	public void setCidioma(int cidioma) {
		this.idIdioma = cidioma;
	}
	public int getCnivel() {
		return idNivel;
	}
	public void setCnivel(int cnivel) {
		this.idNivel = cnivel;
	}
	public int getCiclo() {
		return ciclo;
	}
	public void setCiclo(int ciclo) {
		this.ciclo = ciclo;
	}
	
	
}
