package pe.edu.ceid.simi.management.domain.horario.model;


public class Horario {

	private int chorario;
	private int cdia;
	private int chora;
	
	
	public Horario(int chorario, int cdia, int chora) {
		super();
		this.chorario = chorario;
		this.cdia = cdia;
		this.chora = chora;
	}
	
	public int getChorario() {
		return chorario;
	}
	public void setChorario(int chorario) {
		this.chorario = chorario;
	}
	public int getCdia() {
		return cdia;
	}
	public void setCdia(int cdia) {
		this.cdia = cdia;
	}
	public int getChora() {
		return chora;
	}
	public void setChora(int chora) {
		this.chora = chora;
	}
	
	
}
