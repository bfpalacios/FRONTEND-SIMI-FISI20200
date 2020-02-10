package pe.edu.ceid.simi.management.application.grupohorario;

import java.util.List;

import pe.edu.ceid.simi.management.domain.grupohorario.model.GrupoHorario;


public interface GrupoHorarioService {

	GrupoHorario crearGrupoHorario(GrupoHorario grupoHorario);
	GrupoHorario editGrupoHorario(GrupoHorario grupoHorario, int id);
	List<GrupoHorario> getGrupoHorario();
	GrupoHorario getGrupoHorarioById(int id);
	boolean deleteGrupoHorario(int id);
	
}
