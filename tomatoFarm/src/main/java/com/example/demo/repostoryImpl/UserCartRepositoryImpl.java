package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QUserCart.userCart;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.repository.UserCartRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;



@Repository
@AllArgsConstructor
public class UserCartRepositoryImpl implements UserCartRepository {

	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	@Override
	public UserCart update(UserCart userCart) {
		return entityManager.merge(userCart);
	}

	@Override
	public List<UserCart> selectAll(UserCartID entity) {
		List<UserCart> list =
				jpaQueryfactory.select(userCart).from(userCart).where().fetch();
		
		return list;
	}

}
