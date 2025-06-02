package com.pokemon.demo.controllers;


import com.pokemon.demo.DTOS.MonsterCreationDto;
import com.pokemon.demo.entities.Monster;
import com.pokemon.demo.services.IMonsterService;
import com.pokemon.demo.services.ImageService;
import com.pokemon.demo.services.MonsterServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/monsters")
@CrossOrigin(origins = "*")
public class MonsterController {

    @Autowired
    private IMonsterService service;

    @Autowired
    private MonsterServiceImpl monsterService;

    @Autowired
    private ImageService imageService;

    @PostMapping("/with-image")
    public ResponseEntity<Monster> createWithImage(@ModelAttribute MonsterCreationDto dto) throws IOException {
        Monster created = monsterService.createFromDto(dto);
        return ResponseEntity.ok(created);
    }
    @PutMapping("/{id}")
    public Monster update(@PathVariable Long id, @RequestBody Monster monster) {
        return service.update(id, monster);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping
    public List<Monster> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Monster getById(@PathVariable Long id) {
        return service.getById(id).orElse(null);
    }


    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        String imageUrl = imageService.saveImage(file);
        return ResponseEntity.ok(imageUrl);
    }

}