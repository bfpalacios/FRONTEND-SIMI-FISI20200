package pe.edu.ceid.simi.operative.domain.plan.model;

public class PlanDTO {
	private int idCurso;
	private int idIdioma;
	private String nomIdioma;
	private int idNivel;
	private String nomNivel;
	private int ciclo;
	private int countCiclo;
	
	public PlanDTO(int idCurso, int idIdioma, String nomIdioma, int idNivel, String nomNivel, int ciclo,
			int countCiclo) {
		super();
		this.idCurso = idCurso;
		this.idIdioma = idIdioma;
		this.nomIdioma = nomIdioma;
		this.idNivel = idNivel;
		this.nomNivel = nomNivel;
		this.ciclo = ciclo;
		this.countCiclo = countCiclo;
	}

	public int getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(int idCurso) {
		this.idCurso = idCurso;
	}

	public int getIdIdioma() {
		return idIdioma;
	}

	public void setIdIdioma(int idIdioma) {
		this.idIdioma = idIdioma;
	}

	public String getNomIdioma() {
		return nomIdioma;
	}

	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}

	public int getIdNivel() {
		return idNivel;
	}

	public void setIdNivel(int idNivel) {
		this.idNivel = idNivel;
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
