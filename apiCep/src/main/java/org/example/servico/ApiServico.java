package org.example.servico;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.dto.EnderecoDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Service
public class ApiServico {

    EnderecoDto enderecoDto;

    public EnderecoDto getEnderecoDto(String cep) throws IOException, InterruptedException {
        try {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://viacep.com.br/ws/" + cep + "/json/")).build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            ObjectMapper objectMapper = new ObjectMapper();
            enderecoDto = objectMapper.readValue(response.body(), EnderecoDto.class);

            return enderecoDto;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}
