package com.example.demo.user.user.service;

import java.util.List;

import com.example.demo.user.user.domain.UserDTO;
import com.example.demo.user.user.domain.UserToken;
import com.example.demo.user.user.entity.User;
import com.example.demo.module.SearchRequest;

public interface UserService {

	UserToken selectUser(User dto);
	boolean adminCheck(String userId);
	
	int insertUser(UserDTO dto);
	
	User updateUser(User entity);
	
	List<User> selectUserWhere(SearchRequest searchRequest);
	
	List<User> insertTest(List<User> list);
	
//	=================================
	
}
