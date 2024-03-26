package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "shopbasket")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ShopBasket {

	@Id
	private Integer code; //제품코드
	private String brand; //브랜드
	private String name; //제품명
	private String prcie;	//가격
	private Integer delivery; // 배송비
	private Integer sales; // 판매 수량

}
