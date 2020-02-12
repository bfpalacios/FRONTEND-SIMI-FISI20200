package pe.edu.ceid.simi.operative.infraestructure.programacion.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.programacion.model.ProgramacionDTO;

public class ProgramacionRowMapper implements RowMapper{
	
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<ProgramacionDTO> mapRowProgramacion(List<Map<String, Object>> rows){
		List<ProgramacionDTO> programacion = new ArrayList<ProgramacionDTO>();
		for(Map<String, Object> row: rows) {
			int idprogramacionCurso = Integer.parseInt(row.get("ID_PROGCURSO").toString());
			int iddocProg =Integer.parseInt(row.get("FK_ID_PROG_DOC_CUR").toString());
			int idaula = Integer.parseInt(row.get("FK_ID_AULA").toString());
			int idgrupohorario = Integer.parseInt(row.get("FK_ID_GRUPOHORARIO").toString());
			int estadoprog = Integer.parseInt(row.get("FK_ID_ESTADO_PROGCURSO").toString());
			String nomCurso= row.get("NOM_CURSO").toString();
			String nomNivel= row.get("NOM_NIVEL").toString();
			String nomDocente= row.get("NOM_DOCENTE").toString();
			
			
			ProgramacionDTO i = new ProgramacionDTO(idprogramacionCurso, iddocProg, idaula, estadoprog, idgrupohorario, nomCurso, nomNivel, nomDocente);
			
			programacion.add(i);
		}
		return programacion;
	}

}
