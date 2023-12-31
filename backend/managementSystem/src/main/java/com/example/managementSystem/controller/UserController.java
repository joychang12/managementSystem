package com.example.managementSystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.managementSystem.model.User;
import com.example.managementSystem.respository.UserRespository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
	
	@Autowired
	private UserRespository userRespository;
	
	@PostMapping
	public String insert(@RequestBody User user) {
		
		userRespository.save(user);
		
		return "Create User";
		
	}
	
	@PutMapping("{userId}")
	public String update(@PathVariable Integer userId,
						 @RequestBody User user) {
		
		User u = userRespository.findById(userId).orElse(null);
		
		if (u != null) {
			u.setName(user.getName());
			userRespository.save(u);
			return "Update User";
		} else {
			return "Update fail, User not found!";
		}
		
	}
	
	@DeleteMapping("{userId}")
	public String delete(@PathVariable Integer userId) {
		
		userRespository.deleteById(userId);
		return "Delete User";
	}
	
	@GetMapping("/{userId}")
	public User findUser(@PathVariable Integer userId) {
		
		User user = userRespository.findById(userId).orElse(null);
		return user;
	}
	
	@GetMapping
	public Iterable<User> findAllUser() {
		return userRespository.findAll();
	}

}
