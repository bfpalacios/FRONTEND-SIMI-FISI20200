package pe.edu.ceid.simi.operative.infraestructure.autenticacion.jdbc;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.autorizacion.model.Autorizacion;
import pe.edu.ceid.simi.operative.domain.autorizacion.repository.AutorizacionRepository;

@Component
public class AutenticacionRepositoryImpl implements AutorizacionRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private AutenticacionRowMapper row;
	 
	public Autorizacion buscarCodigo(String codigo, String tipo) {
		 StringBuilder sql = new StringBuilder("SELECT CCODIGO, CTIPOUSUARIO FROM TMUSUARIO ")
	                .append("WHERE CCODIGO = ? AND CTIPOUSUARIO = ? ");
	        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql.toString(), new Object[]{codigo, tipo});
	        return rows.isEmpty() ? null : row.mapRow(rows.get(0));
	}
	
	@Override
	public Autorizacion validarParametrosAutorizacion(String codigo, String tipo) {
		Autorizacion autorizacion = this.buscarCodigo(codigo, tipo);
		return autorizacion;
	}

}
