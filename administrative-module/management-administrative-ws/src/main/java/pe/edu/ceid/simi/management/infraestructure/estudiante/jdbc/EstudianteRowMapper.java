package pe.edu.ceid.simi.management.infraestructure.estudiante.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.management.domain.estudiante.model.EstudianteDTO;

@Component
public class EstudianteRowMapper implements RowMapper {

	@Override
	public int[] getRowsForPaths(TreePath[] path) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<EstudianteDTO> mapRowEstudiante(List<Map<String, Object>> rows){
		List<EstudianteDTO> estudiantes = new ArrayList<EstudianteDTO>();
		
		for(Map<String, Object> row: rows) {
			int cestudiante = Integer.parseInt(row.get("CESTUDIANTE").toString());
			int cusuario = Integer.parseInt(row.get("CUSUARIO").toString());
			String nombre =row.get("NOMBRE").toString();
			String apellidoPat =row.get("APELLIDOPAT").toString();
			String apellidoMat =row.get("APELLIDOMAT").toString();
			int ctipoEstudiante = Integer.parseInt(row.get("CTIPO_ESTUDIANTE").toString());
			String nomTipoEstudiante = row.get("NOM_TIPO_ESTUDIANTE").toString();
			String facultad = row.get("FACULTAD").toString();
			EstudianteDTO e = new EstudianteDTO(cestudiante, cusuario, nombre, apellidoPat, apellidoMat,
					ctipoEstudiante, nomTipoEstudiante, facultad);
			estudiantes.add(e);
		}
		
		return estudiantes;
	}
}
