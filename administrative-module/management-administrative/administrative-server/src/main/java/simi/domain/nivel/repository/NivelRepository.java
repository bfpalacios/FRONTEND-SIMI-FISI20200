package simi.domain.nivel.repository;
import java.util.List;
import simi.domain.nivel.model.Nivel;

public interface NivelRepository {

	
	List<Nivel> getNiveles();
	Nivel getNivelById(int id);
	
}
