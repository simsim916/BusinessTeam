package com.example.demo.repostoryImpl;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;
import com.example.demo.domain.UserDTO;
import com.example.demo.repository.UserRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QUser.user;

@Repository
@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository {
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	
	
	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	@Override
	public UserDTO selectUser(UserDTO dto) {
		jpaQueryfactory.selectFrom(user)
		.where(user.id.eq(dto.getId()))
		.fetchOne();
		return null;
	}
	
	@Override
	public int insertUser(UserDTO dto) {
		return entityManager
		.createNativeQuery("INSERT INTO USER(id,password,name,phonenumber"
								+ ",address2,email,email2,gender,birthdate)")
			.setParameter(1, dto.getId())
			.setParameter(2, dto.getPassword())
			.setParameter(3, dto.getName())
			.setParameter(4, dto.getPhonenumber())
			.setParameter(5, dto.getAddress2())
			.setParameter(6, dto.getEmail())
			.setParameter(7, dto.getEmail2())
			.setParameter(8, dto.getGender())
			.setParameter(9, dto.getBirthdate())
			.executeUpdate();
	}

	
	
	

}
