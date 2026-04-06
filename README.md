☕ Primeiros passos com Java no Arch Linux

Este guia mostra como instalar o Java (JDK), configurar o ambiente e rodar seu primeiro programa Hello World no Arch Linux.

📦 1. Instalando o Java (JDK)
No Arch Linux, utilizamos o gerenciador de pacotes pacman.
Instale o JDK com:

sudo pacman -S jdk-openjdk

🔍 2. Verificando a instalação
Após instalar, verifique se tudo está correto:

java -version

e

javac -version

Se aparecer a versão do Java, está tudo certo ✅

⚙️ 3. (Opcional) Configurar versão padrão
Se houver mais de uma versão instalada:

archlinux-java status

Para definir uma versão:

sudo archlinux-java set java-XX-openjdk

(Substitua XX pela versão disponível)

📁 4. Criando o projeto
Crie uma pasta para seu projeto:

mkdir meu-primeiro-java
cd meu-primeiro-java

Crie o arquivo:

nano HelloWorld.java

✍️ 5. Escrevendo o primeiro código
Digite o seguinte código:

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Olá, mundo!");
    }
}

Salve o arquivo:

CTRL + O → Enter
CTRL + X

🔨 6. Compilando o código

javac HelloWorld.java

Isso irá gerar um arquivo:

HelloWorld.class

▶️ 7. Executando o programa

java HelloWorld

Saída esperada:

Olá, mundo!

🚨 Problemas comuns
❌ command not found
→ Verifique se o Java foi instalado corretamente
❌ erro de nome da classe
→ O nome do arquivo deve ser igual ao da classe

🎯 Conclusão
Agora você já sabe:
- Instalar o Java no Arch Linux
- Criar um projeto simples
- Compilar e executar um programa
- 
🚀 Próximos passos
- Usar Scanner para entrada de dados
- Trabalhar com if e switch
- Criar pequenos sistemas (menu, calculadora, etc.)
