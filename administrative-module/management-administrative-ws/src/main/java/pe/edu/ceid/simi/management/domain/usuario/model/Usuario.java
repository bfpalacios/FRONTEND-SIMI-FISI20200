package pe.edu.ceid.simi.management.domain.usuario.model;

public class Usuario {
	
	private int cusuario;
	private String nombre;
	private String apellidoPat;
	private String apellidoMat;
	private String email;
	private String contrasenia;
	private int dni;
	private int genero;
	private int crol;
	
	public Usuario(int cusuario, String nombre, String apellidoPat, String apellidoMat, String email,
			String contrasenia, int dni, int genero, int crol) {
		super();
		this.cusuario = cusuario;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.email = email;
		this.contrasenia = contrasenia;
		this.dni = dni;
		this.genero = genero;
		this.crol = crol;
	}

	public Usuario() {
		super();
	}
	
	public int getCusuario() {
		return cusuario;
	}
	public void setCusuario(int cusuario) {
		this.cusuario = cusuario;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellidoPat() {
		return apellidoPat;
	}
	public void setApellidoPat(String apellidoPat) {
		this.apellidoPat = apellidoPat;
	}
	public String getApellidoMat() {
		return apellidoMat;
	}
	public void setApellidoMat(String apellidoMat) {
		this.apellidoMat = apellidoMat;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContrasenia() {
		return contrasenia;
	}
	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	public int getDni() {
		return dni;
	}
	public void setDni(int dni) {
		this.dni = dni;
	}
	public int getGenero() {
		return genero;
	}
	public void setGenero(int genero) {
		this.genero = genero;
	}
	public int getCrol() {
		return crol;
	}
	public void setCrol(int crol) {
		this.crol = crol;
	}

}
