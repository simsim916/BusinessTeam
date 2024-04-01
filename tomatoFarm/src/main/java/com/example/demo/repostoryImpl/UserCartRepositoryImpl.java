package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QUserCart.userCart;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.ItemDTO;
import com.example.demo.entity.Item;
import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;
import com.example.demo.repository.UserCartRepository;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.QItem.item;
import static com.example.demo.entity.Qitem_event.item_event;

@Repository
@AllArgsConstructor
public class UserCartRepositoryImpl{

	/* 🎃🎃🎃🎃🎃🎃 수미 🎃🎃🎃🎃🎃🎃 */
	private final JPAQueryFactory jpaQueryfactory;

	public List<Item> nonLoginItem(List<Integer> codeList,List<UserCart> list) {
		System.out.println(codeList);
		return jpaQueryfactory
				.select(Projections.bean(Item.class, item.code, item.brand, item.name, item.delivery, item.price,
						item.storage, item.weight, item.packing, item.sales, item.stock, item.views, item.likes,
						item.event_code, item.intro, item_event.discount, item_event.name.as("event_name")))
				.from(item).leftJoin(item_event).on(item.event_code.eq(item_event.code))
				.where(item.code.in(codeList))
				.fetch();
	}
	
	public List<UserCart> save(List<UserCart> list) {
		return save(list);
	}
	

}
