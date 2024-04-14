package com.example.demo.serviceImpl;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Itemorder;
import com.example.demo.entity.ItemorderDTO;
import com.example.demo.entity.OrderDetail;
import com.example.demo.repository.ItemorderRepository;
import com.example.demo.repository.OrderDetailRepository;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

	private final ItemorderRepository itemorderRepository;
	private final OrderDetailRepository orderdetailRepository;

	@Transactional
	@Override
	public Itemorder order(OrderDTO dto) {

		Itemorder itemorder = Itemorder.builder().id(dto.getId())
				.addressCode(dto.getAddress_code()).address1(dto.getAddress1()).address2(dto.getAddress2())
				.price(dto.getPrice()).delivery(dto.getDelivery()).point(dto.getPoint()).orderDate(LocalDateTime.now())
				.order_message(dto.getDeliverymessage()).build();

		System.out.println("b : " + itemorder);

		itemorder = itemorderRepository.merge(itemorder);

		List<OrderDetail> list = new ArrayList<OrderDetail>();

		for (ItemDTO e : dto.getItemList())
			list.add(OrderDetail.builder()
					.order_code(itemorder.getCode())
					.item_code(e.getCode())
					.item_amount(e.getAmount())
					.discount(e.getDiscount())
					.build());
		
		for (OrderDetail e : list)
			System.out.println("a : " + e);
		
		orderdetailRepository.batchInsert(list);
		
		
		return itemorder;
	}

}
