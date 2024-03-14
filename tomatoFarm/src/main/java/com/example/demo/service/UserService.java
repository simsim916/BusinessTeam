package com.example.demo.service;


import com.example.demo.domain.UserDTO;
import com.example.demo.entity.User;

public interface UserService {

	public User selectUser(UserDTO dto);
	
	public int insertUser(UserDTO dto);
	
//	=================================
	
}
