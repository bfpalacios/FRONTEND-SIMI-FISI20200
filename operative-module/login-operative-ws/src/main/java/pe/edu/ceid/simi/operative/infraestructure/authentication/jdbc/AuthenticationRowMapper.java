package pe.edu.ceid.simi.operative.infraestructure.authentication.jdbc;

import java.util.Map;

import org.springframework.stereotype.Component;

import pe.edu.ceid.simi.operative.domain.authentication.model.Authentication;


@Component
public class AuthenticationRowMapper {
	
	public Authentication mapRow(Map<String, Object> row){
		return Authentication.builder()
				.email(row.get("EMAIL").toString())
                .password(row.get("PASSWORD").toString()).build();
	}

}
