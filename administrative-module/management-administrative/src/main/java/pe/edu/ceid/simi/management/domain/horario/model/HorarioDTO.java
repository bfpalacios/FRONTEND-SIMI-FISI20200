package pe.edu.ceid.simi.management.domain.horario.model;

public class HorarioDTO {

	private int chorario;
	private int cdia;
	private String nomDia;	//cdia
	private int chora;
	private String horaInicio;	//chora
	private String horaSalida;	//chora
	
	public HorarioDTO(int chorario, int cdia, String nomDia, int chora, String horaInicio, String horaSalida) {
		super();
		this.chorario = chorario;
		this.cdia = cdia;
		this.nomDia = nomDia;
		this.chora = chora;
		this.horaInicio = horaInicio;
		this.horaSalida = horaSalida;
	}
	
	public HorarioDTO(int chorario, int cdia, int chora) {
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
	public String getNomDia() {
		return nomDia;
	}
	public void setNomDia(String nomDia) {
		this.nomDia = nomDia;
	}
	public int getChora() {
		return chora;
	}
	public void setChora(int chora) {
		this.chora = chora;
	}
	public String getHoraInicio() {
		return horaInicio;
	}
	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}
	public String getHoraSalida() {
		return horaSalida;
	}
	public void setHoraSalida(String horaSalida) {
		this.horaInicio = horaSalida;
	}
	
	
}
