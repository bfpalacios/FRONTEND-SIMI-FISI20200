package pe.edu.ceid.simi.management.infraestructure.docente.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.docente.model.DocenteDTO;


@Component
public class DocenteRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<DocenteDTO> mapRowDocente(List<Map<String, Object>> rows){
		List<DocenteDTO> docentes = new ArrayList<DocenteDTO>();
		for(Map<String, Object> row: rows) {
			int cusuario = Integer.parseInt(row.get("CUSUARIO").toString());
			String nombre =row.get("NOMBRE").toString();
			String apellidoPat =row.get("APELLIDOPAT").toString();
			String apellidoMat =row.get("APELLIDOMAT").toString();
			int cdocente = Integer.parseInt(row.get("CDOCENTE").toString());
			int tipoContrato = Integer.parseInt(row.get("CTIPO_CONTRATO").toString());
			String nomTipoContrato = row.get("NOM_TIPO_CONTRATO").toString();
			DocenteDTO d = new DocenteDTO(cusuario, nombre, apellidoPat, apellidoMat, cdocente, tipoContrato, nomTipoContrato);
			
			docentes.add(d);
		}
		return docentes;
	}
}
