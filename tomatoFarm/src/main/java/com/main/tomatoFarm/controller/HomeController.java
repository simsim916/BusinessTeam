package com.main.tomatoFarm.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.main.tomatoFarm.service.ItemService;

import lombok.AllArgsConstructor;
@AllArgsConstructor
@Controller
public class HomeController {
	ItemService service;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = {"/","/home"}, method = RequestMethod.GET)
	public String home(Model model) {

		model.addAttribute("list", service.selectItemListBySales());
		model.addAttribute("fresheasyList", service.selectItemListWhereBrand("프레시지"));

		return "home";
		
	}
	
}
