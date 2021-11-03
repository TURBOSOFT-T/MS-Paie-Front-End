package com.web.mspaie.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.mspaie.model.Role;
import com.web.mspaie.model.RoleName;

import java.util.Optional;

/**
 * @author thoma
 *
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
