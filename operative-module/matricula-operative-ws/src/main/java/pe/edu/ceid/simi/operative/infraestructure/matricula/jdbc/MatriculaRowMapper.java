package pe.edu.ceid.simi.operative.infraestructure.matricula.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.matricula.model.MatriculaDTO;

public class MatriculaRowMapper implements RowMapper {
	@Override
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<MatriculaDTO> mapRowMatricula(List<Map<String, Object>> rows){
		List<MatriculaDTO> matriculas = new ArrayList<MatriculaDTO>();
		
		for(Map<String, Object> row: rows) {
			int idmatricula = Integer.parseInt(row.get("ID_MATRICULA").toString());
			int codEstudiante = Integer.parseInt(row.get("FK_COD_ESTUDIANTE_CI").toString());
			int idprogcurso = Integer.parseInt(row.get("FK_ID_PROGCURSO").toString());
			int numvouvher = Integer.parseInt(row.get("FK_NUM_VOUCHER").toString());
			int estadoMat = Integer.parseInt(row.get("FK_ID_ESTADO_MATRICULA").toString());
			String nomEstado = row.get("NOM_ESTADO_MATRICULA").toString();
			
			MatriculaDTO i = new MatriculaDTO(idmatricula, codEstudiante, idprogcurso, numvouvher, estadoMat, nomEstado);
			
			matriculas.add(i);
		}
		return matriculas;
	}
	
}
