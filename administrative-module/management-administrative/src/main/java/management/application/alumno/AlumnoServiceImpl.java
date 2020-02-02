package management.application.alumno;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import management.domain.alumno.model.Alumno;
import management.domain.alumno.repository.AlumnoRepository;

@Service
public class AlumnoServiceImpl implements AlumnoService{

	@Autowired
	private AlumnoRepository repository;
	
	@Override
	public List<Alumno> getAlumnos() {
		return repository.getAlumno();
	}

}
