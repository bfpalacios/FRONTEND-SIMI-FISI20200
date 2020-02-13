package pe.edu.ceid.simi.management.domain.sede.model;

public class Sede {

	private int csede;
	private String descSede;
	private String nomSede;
	private String dirSede;
		
	public Sede(int csede, String descSede, String nomSede, String dirSede) {
		super();
		this.csede = csede;
		this.descSede = descSede;
		this.nomSede = nomSede;
		this.dirSede = dirSede;
	}
	
	public int getCsede() {
		return csede;
	}
	public void setCsede(int csede) {
		this.csede = csede;
	}
	public String getDescSede() {
		return descSede;
	}
	public void setDescSede(String descSede) {
		this.descSede = descSede;
	}
	public String getNomSede() {
		return nomSede;
	}
	public void setNomSede(String nomSede) {
		this.nomSede = nomSede;
	}
	public String getDirSede() {
		return dirSede;
	}
	public void setDirSede(String dirSede) {
		this.dirSede = dirSede;
	}
	
}
