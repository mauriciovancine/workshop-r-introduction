# Introdução à linguagem R para manipulação e visualização de dados

## Semana de Estudos da Ecologia

**Docente**  
Prof. Maurício Vancine

**Duração**  
8 horas

**Vagas**  
15 alunos(as)

**Resumo**  
O minicurso apresentará os fundamentos da linguagem R e IDE RStudio para a manipulação e visualização de dados através do *tidyverse*. O *tidyverse* é um conjunto de pacotes e funções que compartilham uma mesma estrutura visando ajudar os usuários a criar um código eficiente e 'organizado'. Os pacotes são focados principalmente na organização de dados (leitura, filtragem, organização, seleção e resumo) e visualização de dados. Serão abordados os seguintes temas: (1) apresentação, (2) funcionamento da linguagem R, (3) estrutura e manipulação de objetos, (4) tidyverse e (5) visualização de dados. Ao final do minicurso espera-se que os participantes adquiram conhecimentos introdutórios do funcionamento da linguagem, assim como na manipulação e visualização de dados tabulares.

---

### Informações aos participantes

**Datas e horários**  
10-11/11/2021 das 08 h - 12 h

**Plano de ensino**  
[pdf](https://raw.githubusercontent.com/mauriciovancine/workshop-r-introduction/master/00_plano_ensino/plano_ensino_workshop_r_introduction.pdf)

**Contato**  
Para mais informações ou dúvidas, envie e-mail para Maurício Vancine (mauricio.vancine@gmail.com)

---

### Instruções aos participantes

**Hardware**  
Será necessário que todos usem seus notebooks ou desktops

**Softwares**  
Instalar a versão mais recente do 

1. [R (4.0.x)](https://www.r-project.org)
2. [RStudio (1.4.x)](https://www.rstudio.com)

- [Vídeo de instalação do R e do RStudio](https://youtu.be/l1bWvZMNMCM)

#### GNU/Linux (Ubuntu e derivados)

```
# r
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys E298A3A825C0D65DFD57CBB651716619E084DAB9
gpg --keyserver keyserver.ubuntu.com --recv-key E298A3A825C0D65DFD57CBB651716619E084DAB9
gpg -a --export E298A3A825C0D65DFD57CBB651716619E084DAB9 | sudo apt-key add -
sudo add-apt-repository "deb https://cloud.r-project.org/bin/linux/ubuntu focal-cran40/"
sudo apt update
sudo apt install -y r-base r-base-core r-recommended r-base-dev

# rstudio
wget -c https://download1.rstudio.org/desktop/bionic/amd64/rstudio-1.4.1106-amd64.deb
sudo dpkg -i rstudio-1.4.1106-amd64.deb
sudo apt install -fy
rm rstudio-1.4.1106-amd64.deb
```

---

## Material

[Slides](https://mauriciovancine.github.io/workshop-r-introduction/01_slides/slide_workshop_r_introduction.html)  

[Script](script_workshop_r_introduction.R)

[Conjunto de dados](https://github.com/mauriciovancine/workshop-r-introduction/blob/master/03_conjunto_dados.zip)

---
