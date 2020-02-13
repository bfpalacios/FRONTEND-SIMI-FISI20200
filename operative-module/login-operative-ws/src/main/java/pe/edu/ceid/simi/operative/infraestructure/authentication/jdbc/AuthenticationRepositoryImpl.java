package pe.edu.ceid.simi.operative.infraestructure.authentication.jdbc;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.authentication.model.Authentication;
import pe.edu.ceid.simi.operative.domain.authentication.repository.AuthenticationRepository;

@Component
public class AuthenticationRepositoryImpl implements AuthenticationRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private AuthenticationRowMapper row;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	@Override
	public Authentication findUserByEmail(String email) {
		StringBuilder sql = new StringBuilder("SELECT EMAIL, PASSWORD FROM TMUSUARIO ").append("WHERE EMAIL = ? ");
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql.toString(), new Object[]{email});
    	Authentication auth = rows.isEmpty() ? null : row.mapRow(rows.get(0));
		if(auth != null) {
			auth.setEmail(email);
			return auth;
		}
		return null;
	}
	
	
	@Override
	public Authentication signInWithEmailAndPassword(String email, String password) {
		StringBuilder sql = new StringBuilder("SELECT EMAIL, PASSWORD FROM TMUSUARIO ").append("WHERE EMAIL = ? ");
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(sql.toString(), new Object[]{email});
		Authentication authentication = rows.isEmpty() ? null : row.mapRow(rows.get(0));
		if(authentication != null) {
			String email_real = authentication.getEmail();
			String password_auth = password;
			if(email.equalsIgnoreCase(email_real)) {
				boolean isPasswordMatches=this.passwordEncoder.matches(password_auth, authentication.getPassword());
				if(isPasswordMatches) {
					return Authentication.builder().email(email).password(password).build();
				}else {
					return null;
				}
			} else {
				return null;
			}
		}
		return null;
	}

	@Override
	public Authentication signInInvited() {
		// TODO Auto-generated method stub
		return null;
	}

}
