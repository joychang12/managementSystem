package com.example.managementSystem.respository;


import org.springframework.data.repository.CrudRepository;

import com.example.managementSystem.model.User;

public interface UserRespository extends CrudRepository<User,Integer>{

}
