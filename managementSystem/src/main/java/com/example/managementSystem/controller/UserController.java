package com.example.managementSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.managementSystem.model.User;
import com.example.managementSystem.respository.UserRespository;

@RestController
public class UserController {
	
	@Autowired
	private UserRespository userRespository;
	
	@PostMapping("/insertUser")
	public String insert(@RequestBody User user) {
		userRespository.save(user);
		return "執行資料庫的 Create 動作";
		
	}

}
