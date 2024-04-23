package com.example.demo.user.user.repository;

import javax.persistence.EntityManager;

import com.example.demo.user.user.entity.User;
import org.springframework.stereotype.Repository;
import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.user.user.entity.QUser.user;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserRepositoryImpl implements UserRepository {
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	@Override
	public User selectUser(User entity) {
		return jpaQueryfactory
				.selectFrom(user)
				.where(user.id.eq(entity.getId()))
				.fetchOne();
	}
	
	@Override
	public List<User> selectUserWhereString(SearchRequest searchRequest) {
		return jpaQueryfactory
				.selectFrom(user)
				.from(user)
				.where(Expressions.stringPath(searchRequest.getColumn())
						.contains(searchRequest.getKeyword()))
				.fetch();
	}
	
	@Override
	public List<User> selectUserWhereNumber(SearchRequest searchRequest) {
		return jpaQueryfactory
				.selectFrom(user)
				.from(user)
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
						.contains(searchRequest.getKeyword()))
				.fetch();
	}

}
