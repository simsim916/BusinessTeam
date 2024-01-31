package com.jyh.tomatoFarm;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.AllArgsConstructor;

//@AllArgsConstructor
//@Controller
//@RequestMapping("/item")
//public class ItemController {


//	ItemService service;
//	
////	=======================================================================
//	// 검색기능
//	// getMapping 할까 했는데 보안관련 문제는 없지만,
//	// 대량의 데이터라면 post를 사용한다 라고 들은거같은데 맞나?
//	@PostMapping("/searchList")
//	public String search(Model model,ItemDTO dto) {
//		// 검색창에 키워드 입력 후 엔더를 누르는 상황을 가정하고 만들었다.
//		// input 태그에 name="name" 으로 지정해주면
//		// dto 객체에 자동으로 들어가게 되고 ~ dto.getName(); 해서 가져온다
//		// 가져온 문자열은
//		// DAO 에서 브랜드에서 검색한 테이블 + 제품명에서 검색한 테이블 UNION ALL 시켰다
////		String keyWord = dto.getName();
//		String uri = "";// 특정 페이지로 이동
//		
//		if(service.search(dto.getName()) != null) {
//			model.addAttribute("list", service.search(dto.getName()));
//			model.addAttribute("msg", dto.getName() + "으로 검색한 결과");
//		}
//		
//		return uri;
//	}
//	// 전체 상품리스트 
//	@GetMapping("/allList")
//	public String selectList(Model model) {
//		String uri = "";
//		
//		if(service.selectList() != null) {
//			model.addAttribute("list", service.selectList());
//		}
//		
//		
//		
//		return uri;
//		
//	}
//	
//	// 제품 상세페이지 
//	@GetMapping("/detail")
//	public String selectOne(Model model, @RequestParam("code")int code) {
//		// index 페이지에서 특정 상품을 클릭시 요청에 파라미터(code)를 담아서 보내고
//		// 그 code를 이용해서 selectOne을 실행
//		String uri = "";
//		
//		if(service.selectOne(code) != null) {
//			model.addAttribute("detail", service.selectOne(code));
//		}
//		
//		return uri;
//	}
//	
////	============================= 인덱스 페이지 카테고리 ============================
////	============================================================================
//	@GetMapping("/eventList")
//	public String selectEvent(Model model) {
//		String uri = "";
//		
//		if(service.selectEvent() != null) {
//			model.addAttribute("eventList", service.selectList());
//			// list 라는 변수에 통일해서 담고 싶었지만,
//			// index 페이지에서 여러가지 카테고리별 제품목록을 보여주려면 변수를 다르게 써야 할 것 같다.
//		}
//		
//		return uri;
//	}
//	
//	@GetMapping("/salesList")
//	public String selectSales(Model model) {
//		String uri = "";
//		
//		if(service.selectEvent() != null) {
//			model.addAttribute("salesList", service.selectList());
//			// list 라는 변수에 통일해서 담고 싶었지만,
//			// index 페이지에서 여러가지 카테고리별 제품목록을 보여주려면 변수를 다르게 써야 할 것 같다.
//		}
//		
//		return uri;
//	}
////	===============================================================================
//	@GetMapping("/brandList1")
//	public String brandList1(Model model) {
//		String uri = "";
//		
//		if(service.selectEvent() != null) {
//			model.addAttribute("brandList1", service.brandList1());
//			// list 라는 변수에 통일해서 담고 싶었지만,
//			// index 페이지에서 여러가지 카테고리별 제품목록을 보여주려면 변수를 다르게 써야 할 것 같다.
//		}
//		
//		return uri;
//	}
//	
//	@GetMapping("/brandList2")
//	public String brandList2(Model model) {
//		String uri = "";
//		
//		if(service.selectEvent() != null) {
//			model.addAttribute("brandList2", service.brandList2());
//			// list 라는 변수에 통일해서 담고 싶었지만,
//			// index 페이지에서 여러가지 카테고리별 제품목록을 보여주려면 변수를 다르게 써야 할 것 같다.
//		}
//		
//		return uri;
//	}
//	
//	@GetMapping("/brandList3")
//	public String brandList3(Model model) {
//		String uri = "";
//		
//		if(service.selectEvent() != null) {
//			model.addAttribute("brandList3", service.brandList3());
//			// list 라는 변수에 통일해서 담고 싶었지만,
//			// index 페이지에서 여러가지 카테고리별 제품목록을 보여주려면 변수를 다르게 써야 할 것 같다.
//		}
//		
//		return uri;
//	}
//	
//	
//}
