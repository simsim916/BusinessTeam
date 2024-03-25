package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem_review.item_review;

import java.util.List;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.Item_reviewDTO;
import com.example.demo.entity.Item_review;
import com.example.demo.module.PageRequest;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.Item_reviewRepository;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;


@Repository
@AllArgsConstructor
public class Item_reviewRepositoryImpl implements Item_reviewRepository{
	
	private final JPAQueryFactory jPAQueryFactory;
	private final EntityManager entityManager;
	
	@Override
	public List<Item_review> selectItemRevieListStringWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(item_review)
				.where(Expressions.stringPath(searchRequest.getColumn()).contains(searchRequest.getKeyword()))
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	@Override
	public List<Item_review> selectItemRevieListIntegerWhereType(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory
				.selectFrom(item_review)
				.where(Expressions.numberPath(Integer.class,searchRequest.getColumn()).stringValue().eq(searchRequest.getKeyword()))
				.limit(pageRequest.getEndNum()).offset(pageRequest.getStartNum())
				.fetch();
	}
	
	@Transactional
	@Override
	//** 상품리뷰 등록
	public int insertItemReview(Item_reviewDTO dto) {
		return entityManager
				.createNativeQuery("INSERT INTO item_review(item_code, writer, title"
									+ ", contents, score, regdate, image1, image2, image3) "
									+ "VALUES(?,?,?,?,?,?,?,?,?)")
				.setParameter(1, dto.getItem_code())
				.setParameter(2, dto.getWriter())
				.setParameter(3, dto.getTitle())
				.setParameter(4, dto.getContents())
				.setParameter(5, dto.getScore())
				.setParameter(6, dto.getRegdate())
				.setParameter(7, dto.getImage1())
				.setParameter(8, dto.getImage2())
				.setParameter(9, dto.getImage3())
				.executeUpdate();
	}
	
	
	
}
