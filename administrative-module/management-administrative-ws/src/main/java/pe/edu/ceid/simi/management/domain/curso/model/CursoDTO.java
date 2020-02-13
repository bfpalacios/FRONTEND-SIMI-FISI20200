package pe.edu.ceid.simi.management.domain.curso.model;



public class CursoDTO {
	
	private int idCurso;
	private int idIdioma;
	private String nomIdioma;	// idIdioma;
	private int idNivel;
	private String nomNivel;	//idNivel;
	private int ciclo;
	
	public CursoDTO(int ccurso, int cidioma, String nomIdioma, int cnivel, String nomNivel, int ciclo) {
		super();
		this.idCurso = ccurso;
		this.idIdioma = cidioma;
		this.nomIdioma = nomIdioma;
		this.idNivel = cnivel;
		this.nomNivel = nomNivel;
		this.ciclo = ciclo;
	}

	public CursoDTO() {
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
	public String getNomIdioma() {
		return nomIdioma;
	}
	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}
	public int getCnivel() {
		return idNivel;
	}
	public void setCnivel(int cnivel) {
		this.idNivel = cnivel;
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
