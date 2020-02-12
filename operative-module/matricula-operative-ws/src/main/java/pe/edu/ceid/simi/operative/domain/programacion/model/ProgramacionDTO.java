package pe.edu.ceid.simi.operative.domain.programacion.model;

public class ProgramacionDTO {
	private int idprogramacionCurso;
	private int iddocProg;
	private int idaula;
	private int idgrupohorario;
	private int estadoprog;
	private String nomCurso;
	private String nomNivel;
	private String nomDocente;
	
	public ProgramacionDTO(int idprogramacionCurso, int iddocProg, int idaula, int idgrupohorario, int estadoprog,
			String nomCurso, String nomNivel, String nomDocente) {
		super();
		this.idprogramacionCurso = idprogramacionCurso;
		this.iddocProg = iddocProg;
		this.idaula = idaula;
		this.idgrupohorario = idgrupohorario;
		this.estadoprog = estadoprog;
		this.nomCurso = nomCurso;
		this.nomNivel = nomNivel;
		this.nomDocente = nomDocente;
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
	public String getNomCurso() {
		return nomCurso;
	}
	public void setNomCurso(String nomCurso) {
		this.nomCurso = nomCurso;
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
	
	
}
