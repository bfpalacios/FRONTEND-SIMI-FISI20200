package management.domain.alumno.model;

public class Alumno {

	private String dni;
	private String type;
	public Alumno(String dni, String type) {
		super();
		this.dni = dni;
		this.type = type;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
