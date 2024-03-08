package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="member")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {
	
	@Id
	private String id;
	private String password;
	private String name;
	private String phonenumber;
	private String address;
	// 딜리버리 1,2,3 컬럼 이렇게 해도 돼?
	private String delivery1;
	private String delivery2;
	private String delivery3;
	// 딜리버리 1,2,3 컬럼 이렇게 해도 돼?
	private String email;
	private String emailback;
	private String gender;
	private String birthdate;
}
