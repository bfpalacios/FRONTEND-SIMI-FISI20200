package pe.edu.ceid.simi.management.domain.persona.model;

import java.sql.Date;

public class Persona {

	private int idPersona;
	private String nombre;
	private String apellidoPat;
	private String apellidoMat;
	private int dni;
	private int genero;
	private int edad;
	private Date fechaAlta;
	private Date fechaMod;
	
	public Persona(int idPersona, String nombre, String apellidoPat, String apellidoMat, int dni, int genero,
			int edad, Date fechaAlta, Date fechaMod) {
		super();
		this.idPersona = idPersona;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.dni = dni;
		this.genero = genero;
		this.edad = edad;
		this.fechaAlta = fechaAlta;
		this.fechaMod = fechaMod;
	}
	
	public int getIdPersona() {
		return idPersona;
	}
	public void setIdPersona(int idPersona) {
		this.idPersona = idPersona;
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
	public int getEdad() {
		return edad;
	}
	public void setEdad(int edad) {
		this.edad = edad;
	}
	public Date getFechaAlta() {
		return fechaAlta;
	}
	public void setFechaAlta(Date fechaAlta) {
		this.fechaAlta = fechaAlta;
	}
	public Date getFechaMod() {
		return fechaMod;
	}
	public void setFechaMod(Date fechaMod) {
		this.fechaMod = fechaMod;
	}
	
}
