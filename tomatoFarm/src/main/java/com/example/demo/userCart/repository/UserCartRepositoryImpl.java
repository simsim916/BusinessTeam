package com.example.demo.userCart.repository;

import static com.example.demo.entity.QUserCart.userCart;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.userCart.domain.UserCartDTO;
import com.example.demo.userCart.entity.UserCart;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QItem.item;
import static com.example.demo.entity.Qitem_event.item_event;

@Repository
@AllArgsConstructor
public class UserCartRepositoryImpl implements UserCartRepository {

	private final JPAQueryFactory jpaQueryfactory;
	private final EntityManager entityManager;

	public List<UserCart> mergeAll(List<UserCart> list) {
		List<UserCart> result = new ArrayList<UserCart>();
		for (UserCart e : list) {
			result.add(entityManager.merge(e));
		}
		return result;
	}
	
	public UserCart merge(UserCart entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List<UserCartDTO> selectItemListWhereUserID(UserCart entity) {
		return jpaQueryfactory
				.select(Projections.bean(UserCartDTO.class, userCart.code, userCart.id, userCart.amount,
						item.name.as("item_name"), item.price, item.delivery, item.vat, item.stock,
						item_event.code.as("event_code"), item_event.discount))
				.from(userCart).leftJoin(item).on(userCart.code.eq(item.code))
				.leftJoin(item_event).on(item.event_code.eq(item_event.code))
				.where(userCart.id.eq(entity.getId()).and(userCart.amount.gt(0)))
				.fetch();
	}

	@Override
	public List<UserCart> selectCartWhereUserIDItemList(String user_id, List<Integer> item_codeList) {
		return jpaQueryfactory
				.selectFrom(userCart)
				.where(userCart.id.eq(user_id).and(userCart.code.in(item_codeList)))
				.fetch();
	}
	
	@Override
	public void delete(List<UserCart> list) {
		for(UserCart entity : list) {
			entity = entityManager.merge(entity);
			entityManager.remove(entity);
		}
	}
}
