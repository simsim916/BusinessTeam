package com.example.demo.controller;

import javax.servlet.http.HttpSession;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.example.demo.entity.Member;
import com.example.demo.service.MemberService;

import lombok.AllArgsConstructor;


@Controller
@AllArgsConstructor
@RequestMapping(value="/member")
public class MemberController {
	
	MemberService memberService;
	PasswordEncoder passwordEncoder;
	
	/* 🎃🎃🎃🎃🎃🎃 검수 전 🎃🎃🎃🎃🎃🎃 */
	
	@GetMapping("/loginpage")
	public String loginPage() {
	return "login/login";
	}
	
	public String login(Member entity,Model model, HttpSession session) {
		String password = entity.getPassword();
		String uri = "redirect:/home";
		
		entity = memberService.selectOne(entity.getId());
		
		if(entity != null && passwordEncoder.matches(password, entity.getPassword())) {
			session.setAttribute("loginID", entity.getId());
			session.setAttribute("loginName", entity.getName());
		} else {
			uri = "login/login";
			model.addAttribute("message", "로그인 실패");
		}
		return uri;
	}
	
	@GetMapping("/signuppage")
	public String signUpPage() {
		return "login/signup";
	}
	
//	@GetMapping("/signup")
//	public String signUp(RedirectAttributes rttr) {
//		String uri = "";
//		
//		try {
//			rttr.addFlashAttribute("message", "")
//		} catch (Exception e) {
//			// TODO: handle exception
//		}
//		
//		return "";
//	}
	
}
