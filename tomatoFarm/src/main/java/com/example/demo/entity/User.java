package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="user")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
	
	@Id
	private String id;
	private String password;
	private String rank;
	private String name;
	private String phonenumber;
	private int adress_code;
	private String address1;
	private String address2;
	private String email;
	private String email2;
	private int gender;
	private String birthdate;
	private int point;
	
}
