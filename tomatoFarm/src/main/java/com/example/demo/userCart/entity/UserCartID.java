package com.example.demo.userCart.entity;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserCartID  implements Serializable{

	private Integer code; // 상품코드
	private String id; // 사용자 아이디

}
