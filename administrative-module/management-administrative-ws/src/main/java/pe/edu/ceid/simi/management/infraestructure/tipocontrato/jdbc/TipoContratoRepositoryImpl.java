package pe.edu.ceid.simi.management.infraestructure.tipocontrato.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.tipocontrato.model.TipoContrato;
import pe.edu.ceid.simi.management.domain.tipocontrato.repository.TipoContratoRepository;

@Component
public class TipoContratoRepositoryImpl implements TipoContratoRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private TipoContratoRowMapper row;

	@Override
	public TipoContrato crearTipoContrato(TipoContrato tipoContrato) {
		String insertQuery = "INSERT INTO tmtipo_contrato (NOM_TIPO_CONTRATO, SALARIO) values (?, ?)";
		
		int success = this.jdbcTemplate.update(insertQuery, tipoContrato.getNomTipoContrato(), tipoContrato.getSalario());
		if (success >= 0) {
			return tipoContrato;
		}
		
		return null;
	}

	@Override
	public TipoContrato editTipoContrato(TipoContrato tipoContrato, int id) {
		String query = "UPDATE tmtipo_contrato SET NOM_TIPO_CONTRATO = ?, SALARIO = ? WHERE CTIPO_CONTRATO = "+ id;
		int update = this.jdbcTemplate.update(query, tipoContrato.getNomTipoContrato(), tipoContrato.getSalario());
		
		if (update == 1) {
			return tipoContrato;
		}
		
		return null;
	}

	@Override
	public boolean deleteTipoContrato(int ctipoContrato) {
		String query = "DELETE FROM tmtipo_contrato WHERE CTIPO_CONTRATO = ?";
		int success = this.jdbcTemplate.update(query, ctipoContrato);
		
		if (success >= 0) {
			return true;
		}
		
		return false;
	}

	@Override
	public List<TipoContrato> getTiposContrato() {
		String query = "SELECT * FROM tmtipo_contrato";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<TipoContrato> tipoContrato = row.mapRowTipoContrato(rows);
		return tipoContrato;
	}

	@Override
	public TipoContrato getTipoContratoById(int id) {
		String query = "SELECT * FROM tmtipo_contrato WHERE CTIPO_CONTRATO  = " + id;
		List<TipoContrato> tipoContrato = this.row.mapRowTipoContrato(this.jdbcTemplate.queryForList(query));
		
		if (tipoContrato.size() > 0) {
			return tipoContrato.get(0);
		}
		
		return null;
	}

}
