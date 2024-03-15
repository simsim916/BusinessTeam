package com.example.demo.repostoryImpl;

import static com.example.demo.entity.QItem_review.item_review;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.stereotype.Repository;

import com.example.demo.domain.Item_reviewDTO;
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
	private final EntityManager entityManager;
	
	@Override
	//** 상품리뷰 조회
	public List<Item_review> selectItemReviewList(PageRequest pageRequest, SearchRequest searchRequest) {
		return jPAQueryFactory.selectFrom(item_review)
				.where(item_review.item_code.eq(Integer.parseInt(searchRequest.getKeyword())))
				.orderBy(item_review.regdate.desc())
				.offset(pageRequest.getStartData()).limit(pageRequest.getEndData())
				.fetch();
	}	
	
	
	@Override
	//** 상품리뷰 등록
	public int insertItemReview(Item_reviewDTO dto) {
		return entityManager
				.createNativeQuery("INSERT INTO item_review(seq, item_code, writer, title"
									+ ", contents, score, regdate, likes, image1, image2, image3 "
									+ "VALUES(?,?,?,?,?,?,?,?,?,?,?)")
				.setParameter(1, dto.getSeq())
				.setParameter(2, dto.getItem_code())
				.setParameter(3, dto.getWriter())
				.setParameter(4, dto.getTitle())
				.setParameter(5, dto.getContents())
				.setParameter(6, dto.getScore())
				.setParameter(7, dto.getRegdate())
				.setParameter(8, dto.getLikes())
				.setParameter(9, dto.getImage1())
				.setParameter(10, dto.getImage2())
				.setParameter(11, dto.getImage3())
				.executeUpdate();
	}
	
}
