package com.example.demo.controller;


import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.demo.domain.UserDTO;
import com.example.demo.service.UserService;

import jdk.nashorn.internal.ir.RuntimeNode.Request;
import lombok.AllArgsConstructor;


@Controller
@AllArgsConstructor
@RequestMapping(value="/user")
public class UserController {
	
	UserService userService;
	PasswordEncoder passwordEncoder;
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	
	@GetMapping("/loginForm")
	public void loginForm(Model model) {
		
	}
	
	
//	@RequestMapping(value = "/joinForm", method = RequestMethod.POST)
//	public String join(HttpServletRequest request, Model model, UserDTO dto) throws IOException{
//		
//		String uri = "user/loginForm";
//		
//		String rea
		
		
		
		
	}
	
	
	
	
}
