package pe.edu.ceid.simi.management.infraestructure.docente.jdbc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.docente.model.Docente;
import pe.edu.ceid.simi.management.domain.docente.model.DocenteDTO;
import pe.edu.ceid.simi.management.domain.docente.repository.DocenteRepository;


@Component
public class DocenteRepositoryImpl implements DocenteRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private DocenteRowMapper row;

	@Override
	public Docente crearDocente(Docente docente) {
		String insertQuery = "INSERT INTO docente (CIDIOMA,CNIVEL,CICLO) values (?,?,?)";
		int success = this.jdbcTemplate.update(insertQuery,
				curso.getCidioma(), 
				curso.getCnivel(),
				curso.getCiclo() );
		if (success >= 0) {
			return curso;
		}
		return null;
	}

	@Override
	public Docente editDocente(Docente docente, int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteDocente(int id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<DocenteDTO> getDocente() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public DocenteDTO getDocenteById(int id) {
		// TODO Auto-generated method stub
		return null;
	}
	

}
