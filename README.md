# Linguagem R para manipulação e visualização de dados

## Semana de Estudos da Ecologia

**Docente**  
Prof. Maurício Vancine

**Duração**  
9 horas

**Vagas**  
15-20 alunes (mas não muito mais...)

**Resumo**  
O minicurso apresentará os principais conceitos da linguagem R e do IDE RStudio para a manipulação e visualização de dados através do tidyverse. O tidyverse é um conjunto de pacotes e funções que compartilham uma mesma estrutura e sintaxe, com o intuito de criar códigos eficientes e organizados. Os pacotes são focados principalmente na organização (leitura, filtragem, organização, seleção e resumo) e visualização de dados (gráficos). Serão abordados os seguintes temas: (1) linguagem R, (2) tidyverse e (3) visualização de dados. Ao final do minicurso espera-se que os participantes adquiram conhecimentos básicos do funcionamento da linguagem R através do tidyverse, permitindo realização manipulação e visualização de dados tabulares.

---

### Informações aos participantes

**Datas e horários**  
10-11-12/11/2022 das 08 h - 11 h

**Plano de ensino**  
[pdf](https://raw.githubusercontent.com/mauriciovancine/workshop-intro-r/master/00_plano_ensino/plano_ensino_workshop_r_introduction.pdf)

**Contato**  
Para mais informações ou dúvidas, envie e-mail para Maurício Vancine (mauricio.vancine@gmail.com)

---

### Instruções aos participantes

**Hardware**  
Será necessário que todos usem seus notebooks ou desktops

**Softwares**  
Instalar a versão mais recente

1. [R (4.2)](https://www.r-project.org)
2. [RStudio (2022.07.1-554)](https://www.rstudio.com)

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
wget -c https://download1.rstudio.org/desktop/bionic/amd64/rstudio-2021.09.0%2B351-amd64.deb &&
sudo dpkg -i rstudio-2022.07.1-554-amd64.deb &&
sudo apt install -fy && 
rm rstudio-2022.07.1-554-amd64.deb
```

---

## Slides

[slides](https://mauriciovancine.github.io/workshop-intro-r/01_slides/slides#/)

---

## Scripts

[0. Pacotes](https://github.com/mauriciovancine/workshop-r-introduction/blob/master/02_scripts/00_script_r_introduction.R) <br>
[2. tidyverse](https://github.com/mauriciovancine/workshop-r-introduction/blob/master/02_scripts/02_script_r_introduction.R) <br>
[3. Visualização de dados](https://github.com/mauriciovancine/workshop-r-introduction/blob/master/02_scripts/03_script_r_introduction.R)

---
