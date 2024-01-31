package com.main.tomatoFarm;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.service.ItemService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
@RequestMapping("/item")
public class ItemController {
	
	ItemService service;
	
	@GetMapping("/list")
	public void list(Model model , @RequestParam("keyword") String keyword) {
		List<ItemDTO> list = service.selectItemListWhereKeyword(keyword);
		model.addAttribute("list", list);
		model.addAttribute("size", list.size());
		model.addAttribute("keyword", keyword);
	}
}

