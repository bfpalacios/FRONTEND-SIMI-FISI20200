package simi.domain.idioma.model;

public class Idioma {

	private int cidioma;
	private String descIdioma;
	private String nomIdioma;
	
	
	public Idioma(int cidioma, String descIdioma, String nomIdioma) {
		super();
		this.cidioma = cidioma;
		this.descIdioma = descIdioma;
		this.nomIdioma = nomIdioma;
	}
	
	public int getCidioma() {
		return cidioma;
	}
	public void setCidioma(int cidioma) {
		this.cidioma = cidioma;
	}
	public String getDescIdioma() {
		return descIdioma;
	}
	public void setDescIdioma(String descIdioma) {
		this.descIdioma = descIdioma;
	}
	public String getNomIdioma() {
		return nomIdioma;
	}
	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}
	
	
}
