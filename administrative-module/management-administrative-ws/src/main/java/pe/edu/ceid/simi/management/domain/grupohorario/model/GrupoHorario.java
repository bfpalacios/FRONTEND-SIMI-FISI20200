package pe.edu.ceid.simi.management.domain.grupohorario.model;

public class GrupoHorario {

	private int cgrupoHorario;
	private int chorario;
	
	public GrupoHorario(int cgrupoHorario, int chorario) {
		super();
		this.cgrupoHorario = cgrupoHorario;
		this.chorario = chorario;
	}
	
	public int getCgrupoHorario() {
		return cgrupoHorario;
	}
	public void setCgrupoHorario(int cgrupoHorario) {
		this.cgrupoHorario = cgrupoHorario;
	}
	public int getChorario() {
		return chorario;
	}
	public void setChorario(int chorario) {
		this.chorario = chorario;
	}
	
}
