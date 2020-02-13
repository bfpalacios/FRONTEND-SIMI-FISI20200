package pe.edu.ceid.simi.management.domain.idioma.model;

public class Idioma {

	private int idIdioma;
	private String nomIdioma;
	private String descIdioma;
	
	public Idioma(int cidioma, String nomIdioma, String descIdioma) {
		super();
		this.idIdioma = cidioma;
		this.nomIdioma = nomIdioma;
		this.descIdioma = descIdioma;
	}
	
	
	public Idioma() {
		super();
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
	public String getDescIdioma() {
		return descIdioma;
	}
	public void setDescIdioma(String descIdioma) {
		this.descIdioma = descIdioma;
	}
	
}
