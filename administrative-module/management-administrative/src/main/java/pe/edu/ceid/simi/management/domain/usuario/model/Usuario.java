package pe.edu.ceid.simi.management.domain.usuario.model;

public class Usuario {
	
	private int cusuario;
	private String nombre;
	private String apellidoPat;
	private String apellidoMat;
	private String email;
	private String contrasenia;
	private int cdni;
	private int genero;
	private String rol;
	
	public Usuario(int cusuario, String nombre, String apellidoPat, String apellidoMat, String email,
			String contrasenia, int cdni, int genero, String rol) {
		super();
		this.cusuario = cusuario;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.email = email;
		this.contrasenia = contrasenia;
		this.cdni = cdni;
		this.genero = genero;
		this.rol = rol;
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
	public int getCdni() {
		return cdni;
	}
	public void setCdni(int cdni) {
		this.cdni = cdni;
	}
	public int getGenero() {
		return genero;
	}
	public void setGenero(int genero) {
		this.genero = genero;
	}
	public String getRol() {
		return rol;
	}
	public void setRol(String rol) {
		this.rol = rol;
	}

}
