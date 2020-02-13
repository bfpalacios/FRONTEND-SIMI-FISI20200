package pe.edu.ceid.simi.operative.domain.programacion.model;

public class ProgramacionDTO {
	private int idprogramacionCurso;
	private int iddocProg;
	private int idaula;
	private int idgrupohorario;
	private int estadoprog;
	private String nomIdioma;
	private String nomNivel;
	private String nomDocente;
	private String appatDocente;
	private String apmatDocente;
	private String nomGrupoH;
	private String horaInicio;
	private String horaFin;
	
	public ProgramacionDTO(int idprogramacionCurso, int iddocProg, int idaula, int idgrupohorario, int estadoprog,
			String nomIdioma, String nomNivel, String nomDocente, String appatDocente, String apmatDocente,
			String nomGrupoH, String horaInicio, String horaFin) {
		super();
		this.idprogramacionCurso = idprogramacionCurso;
		this.iddocProg = iddocProg;
		this.idaula = idaula;
		this.idgrupohorario = idgrupohorario;
		this.estadoprog = estadoprog;
		this.nomIdioma = nomIdioma;
		this.nomNivel = nomNivel;
		this.nomDocente = nomDocente;
		this.appatDocente = appatDocente;
		this.apmatDocente = apmatDocente;
		this.nomGrupoH = nomGrupoH;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
	}

	public int getIdprogramacionCurso() {
		return idprogramacionCurso;
	}

	public void setIdprogramacionCurso(int idprogramacionCurso) {
		this.idprogramacionCurso = idprogramacionCurso;
	}

	public int getIddocProg() {
		return iddocProg;
	}

	public void setIddocProg(int iddocProg) {
		this.iddocProg = iddocProg;
	}

	public int getIdaula() {
		return idaula;
	}

	public void setIdaula(int idaula) {
		this.idaula = idaula;
	}

	public int getIdgrupohorario() {
		return idgrupohorario;
	}

	public void setIdgrupohorario(int idgrupohorario) {
		this.idgrupohorario = idgrupohorario;
	}

	public int getEstadoprog() {
		return estadoprog;
	}

	public void setEstadoprog(int estadoprog) {
		this.estadoprog = estadoprog;
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
