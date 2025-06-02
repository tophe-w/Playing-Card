package com.pokemon.demo.services;

import com.pokemon.demo.entities.Monster;
import com.pokemon.demo.interfaces.CrudService;
import com.pokemon.demo.repository.MonsterRepository;
import org.springframework.stereotype.Service;

@Service
public interface IMonsterService extends CrudService<Monster, Long> {

}