package com.example.demo.repostoryImpl;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.item_event;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_eventRepository;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import static com.example.demo.entity.Qitem_event.item_event;


@Repository
@AllArgsConstructor
public class Item_eventRepositoryImpl implements Item_eventRepository{
	
	JPAQueryFactory japQueryFactory;
	EntityManager entityManager;
	
	public List<item_event> selectEventWhere(SearchRequest searchRequest) {
//			return japQueryFactory
//					.selectFrom(item_event)
//					.from(item_event)
//					.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
//					.fetch();
			return japQueryFactory
					.selectFrom(item_event)
					.from(item_event)
					.fetch();
	}
	
	@Override
	public List<item_event> merge(List<item_event> list) {
		List<item_event> changedList = null;
		for(item_event event : list) {
			changedList.add(entityManager.merge(event));
		}
		return changedList;
	}

}
