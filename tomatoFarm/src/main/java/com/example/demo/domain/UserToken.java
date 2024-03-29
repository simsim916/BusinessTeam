package com.example.demo.domain;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Builder
@Setter
public class UserToken {

	private String id;
	private String username;
	private String token;
	private boolean loginStatus;
}
