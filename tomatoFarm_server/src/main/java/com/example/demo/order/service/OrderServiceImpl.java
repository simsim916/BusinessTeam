package com.example.demo.order.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.Itemorder;
import com.example.demo.order.entity.OrderDetail;
import com.example.demo.user.user_cart.entity.UserCart;
import com.example.demo.order.repository.ItemorderRepository;
import com.example.demo.order.repository.OrderDetailRepository;
import com.example.demo.user.user_cart.repository.UserCartRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

	private final ItemorderRepository itemorderRepository;
	private final OrderDetailRepository orderdetailRepository;
	private final UserCartRepository userCartRepository;

	@Transactional
	@Override
	public Itemorder order(OrderDTO dto, String userId) {

		Itemorder itemorder = Itemorder.builder()
				.userId(userId)
				.addressCode(dto.getAddress_code())
				.address1(dto.getAddress1())
				.address2(dto.getAddress2())
				.orderprice(dto.getPrice())
				.deliveryprice(dto.getDelivery())
				.usepoint(dto.getPoint())
				.orderdate(LocalDateTime.now())
				.order_message(dto.getDeliverymessage())	
				.build();

		itemorder = itemorderRepository.merge(itemorder);

		List<OrderDetail> list = new ArrayList<OrderDetail>();
		List<Integer> item_list = new ArrayList<Integer>();
		
		for (ItemDTO e : dto.getItemList()) {
			item_list.add(e.getCode());
			list.add(OrderDetail.builder()
					.orderSeq(itemorder.getCode())
					.itemCode(e.getCode())
					.amount(e.getAmount())
					.discount(e.getDiscount())
					.build());
		}
		
		orderdetailRepository.batchInsert(list);
		if(!("anonymousUser".equals(userId))) {
			List<UserCart> userCart_list = userCartRepository.selectCartWhereUserIDItemList(dto.getId(), item_list);
			for(UserCart e : userCart_list) {
				e.setAmount(0);
			}
			userCartRepository.mergeAll(userCart_list);
		}
		
		return itemorder;
	}

	@Override
	public List<Itemorder> selectWhere(String userId) {
		return null;
	}
}
