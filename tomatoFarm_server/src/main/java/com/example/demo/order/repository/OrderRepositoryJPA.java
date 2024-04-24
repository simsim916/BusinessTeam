package com.example.demo.order.repository;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderA;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepositoryJPA extends JpaRepository<OrderA, Integer> {

    @Query(value = "select " +
            "new com.example.demo.order.domain.OrderDTO( o.address1, " +
            "(select count(od.itemCode) " +
            " from OrderDetail od " +
            " where od.orderSeq = o.seq)) " +
            "from OrderA o " +
            "where o.seq = :seq")
    public OrderDTO findByOrderCode(int seq);
}
