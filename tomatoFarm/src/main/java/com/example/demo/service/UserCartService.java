package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;

public interface UserCartService {

	
	public UserCart update(UserCart usercart);
	
	public List<UserCart> selectAll(UserCartID entity);
}
