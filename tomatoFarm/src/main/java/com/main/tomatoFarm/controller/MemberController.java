package com.main.tomatoFarm.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
	MemberService memberservice;
	
	// login page
	@GetMapping("/loginPage")
	public void loginPage() {	};
	
	// login -> home
public String login(HttpSession session, Model model, MemberDTO dto) {
		
		String uri = "member/login";
		
		MemberDTO dbDTO = memberservice.selectOne(dto.getId());
		if(dbDTO!=null) {
			if(dbDTO.getPassword()==dto.getPassword()) {
				// 로그인 성공
				session.setAttribute("memberDTO", dbDTO);
				uri="/home";
			} else {
				// PW 틀림
			}
		}else {
			//ID가 틀림
		}
		return uri;	
	}
	
	// signUp page
	@GetMapping("/signupPage")
	public void singupPage() {	};
	
	
	// signUp 
	@PostMapping("/signup")
	public String singup(Model model, MemberDTO dto) {
		
		String uri = "member/login";
		
		if(memberservice.insert(dto)>0) {
			
		}else {
			uri="member/signup";
		}
		return uri;	
	}
}
