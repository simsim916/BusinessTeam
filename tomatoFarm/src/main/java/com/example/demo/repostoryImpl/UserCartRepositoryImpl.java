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

	private final JPAQueryFactory jpaQueryfactory;
	
	
	public List<UserCart> save(List<UserCart> list) {
		return save(list);
	}
	

}
