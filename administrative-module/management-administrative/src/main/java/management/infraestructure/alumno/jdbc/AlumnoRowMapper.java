package management.infraestructure.alumno.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Component;

import management.domain.alumno.model.Alumno;

@Component
public class AlumnoRowMapper {

	public List<Alumno> getAlumnos(List<Map<String, Object>> rows){
		List<Alumno> alumnos = new ArrayList<Alumno>();
		for(Map<String, Object> row: rows) {
			//String dni = row.get("DNI").toString()
			//Alumno alumno = new Alumno(dni);
			//alumnos.add(alumno);
		}
		return alumnos;
	}
}
