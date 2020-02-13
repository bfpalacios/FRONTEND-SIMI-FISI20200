package pe.edu.ceid.simi.management.domain.tipocontrato.model;

public class TipoContrato {
	
	private int ctipoContrato;
	private String nomTipoContrato;
	private float salario;
	
	public TipoContrato(int ctipoContrato, String nomTipoContrato, float salario) {
		super();
		this.ctipoContrato = ctipoContrato;
		this.nomTipoContrato = nomTipoContrato;
		this.salario = salario;
	}
	
	public int getCtipoContrato() {
		return ctipoContrato;
	}
	public void setCtipoContrato(int ctipoContrato) {
		this.ctipoContrato = ctipoContrato;
	}
	public String getNomTipoContrato() {
		return nomTipoContrato;
	}
	public void setNomTipoContrato(String nomTipoContrato) {
		this.nomTipoContrato = nomTipoContrato;
	}
	public float getSalario() {
		return salario;
	}
	public void setSalario(float salario) {
		this.salario = salario;
	}
	
}
