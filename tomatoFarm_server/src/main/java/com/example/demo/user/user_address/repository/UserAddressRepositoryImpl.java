package com.example.demo.user.user_address.repository;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.user.user_address.entity.UserAddress;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.user.user_address.entity.QUserAddress.userAddress;

import java.util.List;

@Repository
@AllArgsConstructor
public class UserAddressRepositoryImpl implements UserAddressRepository {

	JPAQueryFactory factory;
	EntityManager entityManager;
	
	@Override
	public List<UserAddress> selectAddressWhereId(String id) {
		return factory.selectFrom(userAddress)
				.from(userAddress)
				.where(userAddress.userId.eq(id))
				.fetch();
	}
	
	@Override
	public UserAddress insertUserAddress(UserAddress entity) {
		return entityManager.merge(entity);
	}
	
	@Transactional
	@Override
	public void deleteAddress(UserAddress entity) {
		UserAddress test = entityManager.merge(entity);
		entityManager.remove(test);
	}
}
