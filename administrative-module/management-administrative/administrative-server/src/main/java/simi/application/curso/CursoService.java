package simi.application.curso;

import java.util.List;

import simi.domain.curso.model.Curso;
import simi.domain.curso.model.CursoDTO;

public interface CursoService {

	Curso crearCurso(Curso curso);
	Curso editCurso(Curso curso, int id);
	List<CursoDTO> getCursos();
	CursoDTO getCursoById(int id);
	boolean deleteCurso(int id);
}
