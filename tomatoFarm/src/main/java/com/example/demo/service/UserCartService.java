package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Item;
import com.example.demo.entity.UserCart;
import com.example.demo.entity.UserCartID;

public interface UserCartService {

	
	public UserCart update(UserCart usercart);
	
	public List<Item> nonLoginItem(List<Integer> codeList, List<UserCart> list);
	
	List<UserCart> insertUserCarts(List<UserCart> cartList);
}
