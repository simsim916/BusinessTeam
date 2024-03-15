package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem_review.item_review;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_reviewRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class Item_reviewRepositoryImpl implements Item_reviewRepository{
	
	private final JPAQueryFactory jPAQueryFactory;

//	@Override
//	// ** 상품 리뷰 조회
//	public List<Item_review> selectItemReviewList(PageRequest pageRequest, SearchRequest searchRequest) {
//		return jPAQueryFactory.selectFrom(item_review)
//				.where(item_review.item_code.eq(Integer.parseInt(searchRequest.getKeyword())))
//				.orderBy(item_review.regdate.desc())
//				.offset(pageRequest.getStartData()).limit(pageRequest.getEndData())
//				.fetch();
//	}
//	
@Override
	public List<Item_review> selectItemReviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.selectFrom(item_review)
				.where(item_review.item_code.eq(Integer.parseInt(searchRequest.getKeyword())))
				.orderBy(item_review.regdate.desc())
				.offset(pageRequest.getStartData()).limit(pageRequest.getEndData())
				.fetch();
	}	
	
}
