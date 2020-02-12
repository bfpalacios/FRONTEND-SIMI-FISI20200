package pe.edu.ceid.simi.operative.infraestructure.authentication.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.authentication.model.Authentication;
import pe.edu.ceid.simi.operative.domain.authentication.repository.AuthenticationRepository;

@Component
public class AuthenticationRepositoryImpl implements AuthenticationRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private AuthenticationRowMapper row;
	
	@Override
	public Authentication signInWithEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Authentication signInInvited() {
		// TODO Auto-generated method stub
		return null;
	}

}
