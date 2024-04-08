package com.example.demo.module;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.ItemOrder;
import com.example.demo.entity.OrderDetail;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class OrderRequest {

	public ItemOrder makeOrderEntity(List<OrderDTO> list) {
		LocalDate now = LocalDateTime.now().plusHours(9).toLocalDate(); // 주문시간
		String orderId = list.get(0).getId(); // 주문자 ID
		String orderName = list.get(0).getItem_name() + " 외 " + (list.size() - 1) + "건"; // 주문명
		Integer totalPrice = 0;
		for (OrderDTO dto : list) {
		    double discount = 0; 

		    if (dto.getDiscount() != null) { 
		    	// 상품의 discount가 0이 아니라 null 인 상품들이 많다.
		    	discount = (double) dto.getDiscount() / 100;
		    }

		    Integer disPrice = (int) (dto.getPrice() * (1 - discount)); // 할인된 가격 계산
		    totalPrice += disPrice * dto.getAmount() + dto.getDelivery(); // 총 가격에 할인된 가격과 배송비 추가
		}

		ItemOrder itemOrder = ItemOrder.builder()
								.id(orderId)
								.item_name(orderName)
								.price(totalPrice)
								.orderDate(now)
								.build();
		return itemOrder;
	}

	public List<OrderDetail> makeDetailEntity(List<OrderDTO> list) {
		List<OrderDetail> detailList = new ArrayList<OrderDetail>();
		for (OrderDTO dto : list) {
			OrderDetail detail = new OrderDetail();
			detail.setItem_code(dto.getCode());
			detail.setItem_amount(dto.getAmount());
			detail.setDiscount(dto.getDiscount());
			detailList.add(detail);
		}
		return detailList;
	}
}
