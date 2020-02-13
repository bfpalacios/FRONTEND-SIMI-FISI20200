package pe.edu.ceid.simi.management.domain.progdoccurso.model;

public class ProgDocCursoDTO {

	private int idProgDocCur;
	private int idDocente;
	private String nombre;			// cusuario
	private String apellidoPat;		// cusuario
	private String apellidoMat;		// cusuario
	private int idCurso;
	private String nomIdioma;		// cidioma;
	private String nomNivel ;		// cnivel;
	private int idPeriodo;
	private String nomPeriodo;		// cperiodo
	
	public ProgDocCursoDTO(int cprogDocCur, int cdocente, String nombre, String apellidoPat, String apellidoMat,
			int ccurso, String nomIdioma, String nomNivel, int cperiodo, String nomPeriodo) {
		super();
		this.idProgDocCur = cprogDocCur;
		this.idDocente = cdocente;
		this.nombre = nombre;
		this.apellidoPat = apellidoPat;
		this.apellidoMat = apellidoMat;
		this.idCurso = ccurso;
		this.nomIdioma = nomIdioma;
		this.nomNivel = nomNivel;
		this.idPeriodo = cperiodo;
		this.nomPeriodo = nomPeriodo;
	}

	public ProgDocCursoDTO(int cprogDocCur, int cdocente, int ccurso, int cperiodo) {
		super();
		this.idProgDocCur = cprogDocCur;
		this.idDocente = cdocente;
		this.idCurso = ccurso;
		this.idPeriodo = cperiodo;
	}
	
	public int getCprogDocCur() {
		return idProgDocCur;
	}
	public void setCprogDocCur(int cprogDocCur) {
		this.idProgDocCur = cprogDocCur;
	}
	public int getCdocente() {
		return idDocente;
	}
	public void setCdocente(int cdocente) {
		this.idDocente = cdocente;
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
	public int getCcurso() {
		return idCurso;
	}
	public void setCcurso(int ccurso) {
		this.idCurso = ccurso;
	}
	public String getNomIdioma() {
		return nomIdioma;
	}
	public void setNomIdioma(String nomIdioma) {
		this.nomIdioma = nomIdioma;
	}
	public String getNomNivel() {
		return nomNivel;
	}
	public void setNomNivel(String nomNivel) {
		this.nomNivel = nomNivel;
	}
	public int getCperiodo() {
		return idPeriodo;
	}
	public void setCperiodo(int cperiodo) {
		this.idPeriodo = cperiodo;
	}
	public String getAnioPeriodo() {
		return nomPeriodo;
	}
	public void setAnioPeriodo(String nomPeriodo) {
		this.nomPeriodo = nomPeriodo;
	}
}
