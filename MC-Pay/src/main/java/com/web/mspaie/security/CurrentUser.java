package com.web.mspaie.security;

import org.springframework.security.core.annotation.AuthenticationPrincipal;

import java.lang.annotation.*;
/**
 * @author thoma
 *
 */
@Target({ElementType.PARAMETER, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@AuthenticationPrincipal
public @interface CurrentUser {

}
