package com.example.demo.order.repository;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.order.entity.Itemorder;
import com.querydsl.jpa.impl.JPAQueryFactory;

import io.micrometer.core.instrument.search.Search;
import lombok.AllArgsConstructor;

import static com.example.demo.order.entity.QItemorder.itemorder;

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public Itemorder merge(Itemorder entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List<Itemorder> selectWhere(String userId) {
		return jPAQueryFactory.select(itemorder).from(itemorder).where(itemorder.userId.eq(userId)).fetch();
	}
}
