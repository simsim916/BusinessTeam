package com.example.demo.service;


import com.example.demo.domain.UserDTO;

public interface UserService {

	public UserDTO selectUser(UserDTO dto);
	
	public int insertUser(UserDTO dto);
	
//	=================================
	
}
