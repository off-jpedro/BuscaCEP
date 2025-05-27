package org.example.controller;

import org.example.dto.EnderecoDto;
import org.example.servico.ApiServico;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/endereco")
public class EnderecoController {

    private ApiServico apiServico;

    public EnderecoController() {
        this.apiServico = new ApiServico();
    }

    @GetMapping("/{cep}")
    public ResponseEntity<EnderecoDto> buscarEndereco (@PathVariable String cep){
        try {
            EnderecoDto enderecoDto = apiServico.getEnderecoDto(cep);
            return ResponseEntity.ok(enderecoDto);

        } catch (IOException e) {

            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        } catch (InterruptedException e) {

            throw new RuntimeException(e);
        }
    }

}
