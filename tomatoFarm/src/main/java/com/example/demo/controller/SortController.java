package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.SortService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@AllArgsConstructor
@RestController
@RequestMapping(value="/sort")
public class SortController {
	private final SortService sortService;
	
	@GetMapping("/sortb")
	public void findBySortb(Model model) {
		model.addAttribute("sortb", sortService.selectAllSortb_D());
	}
}
