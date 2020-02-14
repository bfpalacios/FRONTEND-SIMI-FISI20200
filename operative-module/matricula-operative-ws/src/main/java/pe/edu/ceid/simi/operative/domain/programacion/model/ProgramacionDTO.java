package pe.edu.ceid.simi.operative.domain.programacion.model;

public class ProgramacionDTO {
	private int idpProgramacionCurso;
	private int idDocProg;
	private int idAula;
	private int idGrupohorario;
	private int estadoProg;
	private String nomIdioma;
	private String nomNivel;
	private int ciclo;
	private String nomDocente;
	private String appatDocente;
	private String apmatDocente;
	private String nomGrupoH;
	private String horaInicio;
	private String horaFin;
	
	public ProgramacionDTO(int idpProgramacionCurso, int idDocProg, int idAula, int idGrupohorario, int estadoProg,
			String nomIdioma, String nomNivel, int ciclo, String nomDocente, String appatDocente, String apmatDocente,
			String nomGrupoH, String horaInicio, String horaFin) {
		super();
		this.idpProgramacionCurso = idpProgramacionCurso;
		this.idDocProg = idDocProg;
		this.idAula = idAula;
		this.idGrupohorario = idGrupohorario;
		this.estadoProg = estadoProg;
		this.nomIdioma = nomIdioma;
		this.nomNivel = nomNivel;
		this.ciclo = ciclo;
		this.nomDocente = nomDocente;
		this.appatDocente = appatDocente;
		this.apmatDocente = apmatDocente;
		this.nomGrupoH = nomGrupoH;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
	}

	public int getIdpProgramacionCurso() {
		return idpProgramacionCurso;
	}

	public void setIdpProgramacionCurso(int idpProgramacionCurso) {
		this.idpProgramacionCurso = idpProgramacionCurso;
	}

	public int getIdDocProg() {
		return idDocProg;
	}

	public void setIdDocProg(int idDocProg) {
		this.idDocProg = idDocProg;
	}

	public int getIdAula() {
		return idAula;
	}

	public void setIdAula(int idAula) {
		this.idAula = idAula;
	}

	public int getIdGrupohorario() {
		return idGrupohorario;
	}

	public void setIdGrupohorario(int idGrupohorario) {
		this.idGrupohorario = idGrupohorario;
	}

	public int getEstadoProg() {
		return estadoProg;
	}

	public void setEstadoProg(int estadoProg) {
		this.estadoProg = estadoProg;
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

	public int getCiclo() {
		return ciclo;
	}

	public void setCiclo(int ciclo) {
		this.ciclo = ciclo;
	}

	public String getNomDocente() {
		return nomDocente;
	}

	public void setNomDocente(String nomDocente) {
		this.nomDocente = nomDocente;
	}

	public String getAppatDocente() {
		return appatDocente;
	}

	public void setAppatDocente(String appatDocente) {
		this.appatDocente = appatDocente;
	}

	public String getApmatDocente() {
		return apmatDocente;
	}

	public void setApmatDocente(String apmatDocente) {
		this.apmatDocente = apmatDocente;
	}

	public String getNomGrupoH() {
		return nomGrupoH;
	}

	public void setNomGrupoH(String nomGrupoH) {
		this.nomGrupoH = nomGrupoH;
	}

	public String getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}

	public String getHoraFin() {
		return horaFin;
	}

	public void setHoraFin(String horaFin) {
		this.horaFin = horaFin;
	}
	
	
	
}
