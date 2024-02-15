package com.main.tomatoFarm.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.main.tomatoFarm.domain.MemberDTO;
import com.main.tomatoFarm.service.MemberService;

@Controller
@RequestMapping(value = "/member")
public class MemberController {
	@Autowired(required = false)
	MemberService service;
	
	// login page
	
	// login -> home
	
	// signUp page
	@GetMapping("/signupPage")
	public void singupPage() {	};
	
	
	// signUp 
	@PostMapping("/signup")
	public String singup(HttpServletRequest request, Model model, MemberDTO dto) {
		
		String uri = "member/login";
		
		if(service.insert(dto)>0) {
			model.addAttribute("message", "회원가입 성공! 로그인 후 이용하세요");
		}else {
			uri="member/signup";
			model.addAttribute("message", "회원가입에 실패했습니다.");
		}
		return uri;	
	}//singup
}
