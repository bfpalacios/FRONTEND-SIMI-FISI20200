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
			String nomIdioma= row.get("NOM_IDIOMA").toString();
			String nomNivel= row.get("NOM_NIVEL").toString();
			String nomDocente= row.get("NOMBRE").toString();
			String appatDocente= row.get("APELLIDO_PAT").toString();
			String apmatDocente= row.get("APELLIDO_MAT").toString();
			String nomGrupoH = row.get("NOM_GRUPOHORARIO").toString();
			String horaInicio = row.get("HORA_INICIO").toString();
			String horaFin = row.get("HORA_SALIDA").toString();
			
			
			ProgramacionDTO i = new ProgramacionDTO(idprogramacionCurso, iddocProg, idaula, idgrupohorario, estadoprog, nomIdioma, nomNivel, nomDocente, appatDocente, apmatDocente, nomGrupoH, horaInicio, horaFin);
			
			programacion.add(i);
		}
		return programacion;
	}

}
