package pe.edu.ceid.simi.management.domain.curso.model;



public class CursoDTO {
	
	private int ccurso;
	private int cidioma;
	private String nomIdioma ; // cidioma;
	private int cnivel;
	private String nomNivel ; //cnivel;
	private int ciclo;
	
	public CursoDTO(int ccurso, int cidioma, String nomIdioma, int cnivel, String nomNivel, int ciclo) {
		super();
		this.ccurso = ccurso;
		this.cidioma = cidioma;
		this.nomIdioma = nomIdioma;
		this.cnivel = cnivel;
		this.nomNivel = nomNivel;
		this.ciclo = ciclo;
	}
	
	public CursoDTO(int ccurso, int cidioma,  int cnivel,int ciclo) {
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
	public String getNomIdioma() {
		return nomIdioma;
	}
	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}
	public int getCnivel() {
		return cnivel;
	}
	public void setCnivel(int cnivel) {
		this.cnivel = cnivel;
	}
	public String getNomNivel() {
		return nomNivel;
	}
	public void setNomNivel(String nomNivel) {
		this.nomNivel = nomNivel;
	}
	public int getCiclo() {
		return ciclo;
	}
	public void setCiclo(int ciclo) {
		this.ciclo = ciclo;
	}
	
	

}
