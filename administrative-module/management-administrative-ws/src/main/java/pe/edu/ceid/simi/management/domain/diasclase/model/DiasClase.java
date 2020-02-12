package pe.edu.ceid.simi.management.domain.diasclase.model;

public class DiasClase {

	private int cdia;
	private String nomDia;
	
	public DiasClase(int cdia, String nomDia) {
		super();
		this.cdia = cdia;
		this.nomDia = nomDia;
	}
	
	public int getCdia() {
		return cdia;
	}
	public void setCdia(int cdia) {
		this.cdia = cdia;
	}
	public String getNomDia() {
		return nomDia;
	}
	public void setNomDia(String nomDia) {
		this.nomDia = nomDia;
	}
	
}
