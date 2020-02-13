package pe.edu.ceid.simi.management.domain.aula.model;


public class AulaDTO {

	private int caula;
	private String nomAula;
	private String refAula;
	private int csede;
	private String nomSede;
	private int capacAula;
	
	public AulaDTO(int caula, String nomAula, String refAula, int csede, String nomSede, int capacAula) {
		super();
		this.caula = caula;
		this.nomAula = nomAula;
		this.refAula = refAula;
		this.csede = csede;
		this.nomSede = nomSede;
		this.capacAula = capacAula;
	}
		
	public AulaDTO(int caula, String nomAula, String refAula, int csede, int capacAula) {
		super();
		this.caula = caula;
		this.nomAula = nomAula;
		this.refAula = refAula;
		this.csede = csede;
		this.capacAula = capacAula;
	}

	public int getCaula() {
		return caula;
	}
	public void setCaula(int caula) {
		this.caula = caula;
	}
	public String getNomAula() {
		return nomAula;
	}
	public void setNomAula(String nomAula) {
		this.nomAula = nomAula;
	}
	public String getRefAula() {
		return refAula;
	}
	public void setRefAula(String refAula) {
		this.refAula = refAula;
	}
	public int getCsede() {
		return csede;
	}
	public void setCsede(int csede) {
		this.csede = csede;
	}
	public String getNomSede() {
		return nomSede;
	}
	public void setNomSede(String nomSede) {
		this.nomSede = nomSede;
	}
	public int getCapacAula() {
		return capacAula;
	}
	public void setCapacAula(int capacAula) {
		this.capacAula = capacAula;
	}
	
}
