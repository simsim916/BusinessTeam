package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QUserCart.userCart;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.repository.UserCartRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;



@Repository
@AllArgsConstructor
public class UserCartRepositoryImpl implements UserCartRepository {
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */

	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	public UserCart update(UserCart entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List<UserCart> selectAll(UserCartID entity) {
		List<UserCart> list =
				jpaQueryfactory.select(userCart).from(userCart).where().fetch();
		
		return list;
	}

}
