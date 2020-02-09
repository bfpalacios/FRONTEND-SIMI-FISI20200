package simi.domain.nivel.model;

public class Nivel {

	private int cnivel;
	private String descNivel;
	private String nomNivel;
	
	
	public Nivel(int cnivel, String descNivel, String nomNivel) {
		super();
		this.cnivel = cnivel;
		this.descNivel = descNivel;
		this.nomNivel = nomNivel;
	}


	public int getCnivel() {
		return cnivel;
	}


	public void setCnivel(int cnivel) {
		this.cnivel = cnivel;
	}


	public String getDescNivel() {
		return descNivel;
	}


	public void setDescNivel(String descNivel) {
		this.descNivel = descNivel;
	}


	public String getNomNivel() {
		return nomNivel;
	}


	public void setNomNivel(String nomNivel) {
		this.nomNivel = nomNivel;
	}
	
	
}
