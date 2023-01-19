<?php
$name = "Alessandra";
$age = "18";
$gender = "Feminino";
$email = "Alessandra@gmail.com";
$cpf = "000.000.000-00";
$user = "Alessandra";
$password = "1234";

if ($age >= 18) {
    # code...
    echo "Cadastro realizado com sucesso!";
    echo "<br>";
    echo "Seus dados: <br>
    Nome: $name <br>
    Idade: $age <br>
    Sexo: $gender <br>
    E-mail: $email <br>
    CPF: $cpf <br>
    Usuário: $user <br>
    Senha: $password";
} else {
    # code...
    echo "Não foi possível cadastrar";
}

?>