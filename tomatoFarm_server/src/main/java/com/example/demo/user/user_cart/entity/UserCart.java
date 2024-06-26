package com.example.demo.user.user_cart.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_cart")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@IdClass(UserCartID.class)
public class UserCart {

	@Id
	@Column(name = "item_code")
	private Integer itemCode;

	@Id
	@Column(name = "user_id")
	private String userId; // 사용자 아이디
	
	@Builder.Default 
	@Column(name = "amount")
	private Integer amount = 0; // 장바구니 수량
	@Builder.Default
	private Integer views = 1; // 조회수
	@Builder.Default
	@Column(name = "like_item")
	private Integer likeItem = 0; // 관심상품 등록 여부
	private LocalDateTime regdate; // 최근 조회 날짜

}
