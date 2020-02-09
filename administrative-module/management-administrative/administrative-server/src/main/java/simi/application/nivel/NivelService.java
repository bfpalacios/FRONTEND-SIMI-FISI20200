package simi.application.nivel;

import java.util.List;

import simi.domain.nivel.model.Nivel;

public interface NivelService {

	List<Nivel> getNiveles();
	Nivel getNivelById(int id);
}
