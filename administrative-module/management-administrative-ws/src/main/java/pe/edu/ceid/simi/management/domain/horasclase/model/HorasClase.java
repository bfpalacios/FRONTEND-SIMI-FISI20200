package pe.edu.ceid.simi.management.domain.horasclase.model;

public class HorasClase {

	private int chora;
	private String horaInicio;
	private String horaSalida;
	
	public HorasClase(int chora, String horaInicio, String horaSalida) {
		super();
		this.chora = chora;
		this.horaInicio = horaInicio;
		this.horaSalida = horaSalida;
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
		this.horaSalida = horaSalida;
	}
	
	
	
}
