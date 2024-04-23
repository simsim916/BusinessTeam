package com.example.demo.item.item_event.repository;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;

import com.example.demo.item.item_event.entity.itemEvent;
import org.springframework.stereotype.Repository;

import com.example.demo.module.SearchRequest;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.item.item_event.entity.QitemEvent.itemEvent;

@Repository
@AllArgsConstructor
public class ItemEventRepositoryImpl implements ItemEventRepository {

	JPAQueryFactory japQueryFactory;
	EntityManager entityManager;

	public List<itemEvent> selectEventWhereString(SearchRequest searchRequest) {
		return japQueryFactory.selectFrom(itemEvent)
				.from(itemEvent)
				.where(Expressions.stringPath(searchRequest.getColumn())
						.contains(searchRequest.getKeyword()))
				.fetch();
	}

	@Override
	public List<itemEvent> selectEventWhereNumber(SearchRequest searchRequest) {
		return japQueryFactory.
				selectFrom(itemEvent)
				.from(itemEvent)
				.where(Expressions.numberPath(Integer.class, searchRequest.getColumn()).stringValue()
						.contains(searchRequest.getKeyword()))
				.fetch();
	}

	@Override
	public List<itemEvent> merge(List<itemEvent> list) {
		List<itemEvent> changedList = new ArrayList<itemEvent>();
		for (itemEvent event : list) {
			changedList.add(entityManager.merge(event));
		}
		return changedList;
	}

}
