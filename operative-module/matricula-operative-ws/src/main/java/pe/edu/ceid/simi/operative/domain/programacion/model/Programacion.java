package pe.edu.ceid.simi.operative.domain.programacion.model;

public class Programacion {
	private int idprogramacionCurso;
	private int iddocProg;
	private int idaula;
	private int idgrupohorario;
	private int estadoprog;
	
	public Programacion(int idprogramacionCurso, int iddocProg, int idaula, int idgrupohorario, int estadoprog) {
		super();
		this.idprogramacionCurso = idprogramacionCurso;
		this.iddocProg = iddocProg;
		this.idaula = idaula;
		this.idgrupohorario = idgrupohorario;
		this.estadoprog = estadoprog;
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
	
}
