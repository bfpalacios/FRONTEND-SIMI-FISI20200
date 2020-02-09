package simi.domain.curso.repository;
import java.util.List;

import simi.domain.curso.model.Curso;
import simi.domain.curso.model.CursoDTO;

public interface CursoRepository {

	Curso crearCurso(Curso curso);
	Curso editCurso(Curso curso, int id);
	List<CursoDTO> getCursos();
	CursoDTO getCursoById(int id);
	boolean deleteCurso(int id);
	
}
