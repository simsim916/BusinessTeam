package com.example.demo.order.repository;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.order.entity.Itemorder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public Itemorder merge(Itemorder entity) {
		return entityManager.merge(entity);
	}

}
