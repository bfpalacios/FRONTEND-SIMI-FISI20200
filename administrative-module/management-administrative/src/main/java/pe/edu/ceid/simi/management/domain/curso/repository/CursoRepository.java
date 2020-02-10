package pe.edu.ceid.simi.management.domain.curso.repository;
import java.util.List;

import pe.edu.ceid.simi.management.domain.curso.model.Curso;
import pe.edu.ceid.simi.management.domain.curso.model.CursoDTO;

public interface CursoRepository {

	Curso crearCurso(Curso curso);
	Curso editCurso(Curso curso, int id);
	List<CursoDTO> getCursos();
	CursoDTO getCursoById(int id);
	boolean deleteCurso(int id);
	
}
