package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item {

	@Id
	private int code; // 제품코드
	private String sort1; // 일반 , 사업자
	private String sort2;
	private String sort3;
	private String sort4;
	private String brand;
	private String name; // 제품 명
	private String weight; // g, k g 량
	private String storage; // 저장방식 e x) 냉동,냉장
	private String packing; // 포장방식
	private String delivery; // 배송방식
	private int price;
	private String vat;
	private String origin;
	private int sales; // 판매 수량
	private int stock; // 재고 수량
	private String event; // 이벤트명
	private String admin;

}
