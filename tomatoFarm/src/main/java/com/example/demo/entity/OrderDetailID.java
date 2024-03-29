package com.example.demo.entity;

import java.io.Serializable;

import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class OrderDetailID implements Serializable {
    private Integer orderCode;
    private Integer itemCode;
}
