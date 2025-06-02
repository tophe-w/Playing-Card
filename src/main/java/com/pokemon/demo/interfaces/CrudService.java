package com.pokemon.demo.interfaces;

import java.util.List;
import java.util.Optional;

public interface CrudService<T, ID> {
    T create(T entity);
    T update(ID id, T entity);
    void delete(ID id);
    List<T> getAll();
    Optional<T> getById(ID id);
}