package pe.edu.ceid.simi.operative.domain.plan.model;

public class PlanDTO {
	private int idcurso;
	private int ididioma;
	private String nomIdioma;
	private int idnivel;
	private String nomNivel;
	private int ciclo;
	private int countCiclo;
	
	public PlanDTO(int idcurso, int ididioma, String nomIdioma, int idnivel, String nomNivel, int ciclo,
			int countCiclo) {
		super();
		this.idcurso = idcurso;
		this.ididioma = ididioma;
		this.nomIdioma = nomIdioma;
		this.idnivel = idnivel;
		this.nomNivel = nomNivel;
		this.ciclo = ciclo;
		this.countCiclo = countCiclo;
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

	public String getNomIdioma() {
		return nomIdioma;
	}

	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}

	public int getIdnivel() {
		return idnivel;
	}

	public void setIdnivel(int idnivel) {
		this.idnivel = idnivel;
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

	public int getCountCiclo() {
		return countCiclo;
	}

	public void setCountCiclo(int countCiclo) {
		this.countCiclo = countCiclo;
	}
	
}
