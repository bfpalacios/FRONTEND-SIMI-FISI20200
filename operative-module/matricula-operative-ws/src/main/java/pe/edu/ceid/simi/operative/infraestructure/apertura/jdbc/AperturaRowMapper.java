package pe.edu.ceid.simi.operative.infraestructure.apertura.jdbc;

import org.springframework.stereotype.Component;
import org.springframework.util.LinkedCaseInsensitiveMap;


import pe.edu.ceid.simi.operative.domain.apertura.model.AperturaDTO;

@Component
public class AperturaRowMapper {
	
	@SuppressWarnings("rawtypes")
	public AperturaDTO mapRow(LinkedCaseInsensitiveMap row){
		int idApertura = Integer.parseInt(row.get("ID_SOLICITUD").toString());
		int codEstudiante = Integer.parseInt(row.get("FK_COD_ESTUDIANTE_CI").toString());
		int idCurso = Integer.parseInt(row.get("FK_ID_CURSO").toString());
		int idGrupohorario = Integer.parseInt(row.get("FK_ID_GRUPOHORARIO").toString());
		int idIdioma = Integer.parseInt(row.get("FK_ID_IDIOMA").toString());
		int idNivel = Integer.parseInt(row.get("FK_ID_NIVEL").toString());
		String nomIdioma = row.get("NOM_IDIOMA").toString();
		String nomNivel = row.get("NOM_NIVEL").toString();
		int ciclo = Integer.parseInt(row.get("CICLO").toString());
		String nomGrupoHorario = row.get("NOM_GRUPOHORARIO").toString();
		String hora = row.get("HORA").toString();
		int solicitantes = Integer.parseInt(row.get("SOLICTANTES").toString());

		 AperturaDTO i = new AperturaDTO(idApertura, codEstudiante, idCurso, idGrupohorario, 
				 idIdioma, idNivel, nomIdioma, nomNivel, ciclo, nomGrupoHorario, hora, solicitantes);
		 
		return i;	
		}

}
