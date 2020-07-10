# -------------------------------------------------------------------------
# aula 3 - estrutura e manejo de dados

# mauricio vancine
# 06-11-2019
# -------------------------------------------------------------------------

# topicos -----------------------------------------------------------------  
# 3.1 atributos dos objetos
# 3.2 modos dos objetos (numeric, character e logical)
# 3.3 estrutura dos objetos (vector, factor, matrix, data frame e list)
# 3.4 manejo de dados unidimensionais
# 3.5 manejo de dados bidimensionais
# 3.6 valores faltantes e especiais
# 3.7 diretorio de trabalho
# 3.8 importar dados
# 3.9 conferir e manejar dados importados
# 3.10 exportar dados

# 3.1 atributos dos objetos -----------------------------------------------
# atribuicao
# palavra <- dados

## atribuicao - simbolo (<-)
obj_10 <- 10 
obj_10

# 3.2 modos dos objetos ----------------------------------------------------
# 1. numeric: numeros inteiros ou decimais
# numeric
obj_num <- 1
obj_num

# mode
mode(obj_num)

# 2. character: texto
# character
obj_cha <- "a" # atencao para as aspas
obj_cha

# mode
mode(obj_cha)

# 3. logical: assume apenas dois valores (booleano)
# logical
obj_log <- TRUE # maiusculas e sem aspas
obj_log

# mode
mode(obj_log)
  
# 3.3 estrutura dos objetos ----------------------------------------------
# 1. vector: homogeneo (um modo) e unidimensional (uma dimensao)

# concatenar elementos
temp <- c(15, 18, 20, 22, 18)
temp

amos <- c("amostra_01", "amostra_02", "amostra_03", "amostra_04")
amos

# sequencia unitaria (x1:x2)
se <- 1:10
se

# sequencia com diferentes espacamentos 
se.e <- seq(from = 0, to = 100, by = 10) 
se.e

# repeticao
# rep(x, times) # repete x tantas vezes
rep_times <- rep(x = c(1, 2), times = 5)
rep_times

# rep(x, each) # retete x tantas vezes de cada
rep_each <- rep(x = c("a", "b"), each = 5)
rep_each

# palavra e sequencia numerica - sem separacao definida (" ")
am1 <- paste("amostra", 1:6, sep = "0")
am1

# palavra e sequencia numerica - separacao por "_0"
am2 <- paste("amostra", 1:6, sep = "_0")
am2

# amostragem aleatória - sem reposição
sa_sem_rep <- sample(1:100, 10)
sa_sem_rep

# amostragem aleatória - com reposição
sa_com_rep <- sample(1:10, 100, replace = TRUE)
sa_com_rep

# exercicio 06 ------------------------------------------------------------


# exercicio 07 ------------------------------------------------------------


# exercicio 08 ------------------------------------------------------------


# coercao: vetor com elementos de modos diferentes
ve <- c(1, "a", 3)
ve

ve <- c(1, "a", TRUE)
ve

# conversao: mudar o modo dos elementos de um vetor
# funcoes
as.character()
as.integer()
as.numeric()
as.logical()

# 2. factor: homogeneo (um modo - sempre numeric), unidimensional (uma dimensao) e possui ainda levels (niveis)
# 2. factor nominal: variaveis nominais
fa_no <- factor(x = c("fechada", "fechada", "aberta", "aberta", "aberta"),
                levels = c("aberta", "fechada"))
fa_no

levels(fa_no)

# 2. factor ordinal: variaveis ordinais
fa_or <- factor(x = c("alta", "media", "baixa", "baixa", "media"),
                levels = c("baixa", "media", "alta"), ordered = TRUE)
fa_or

levels(fa_or)

# 2. factor: conversao
# vector
ve_ch <- c("alta", "media", "baixa", "baixa", "media")
ve_ch

mode(ve_ch)
class(ve_ch)

# factor nominal
fa_no <- as.factor(ve_ch)
fa_no

levels(fa_no)
class(fa_no)

# exercicio 09 ------------------------------------------------------------


# 3. matrix: homogeneo (um modo) e bidimensional (duas dimensao)
# 1 dispondo elementos
# matriz - funcao matrix
# vetor
ve <- 1:12

# matrix - preenchimento por linhas - horizontal
ma_row <- matrix(data = ve, nrow = 4, ncol = 3, byrow = TRUE)
ma_row

# matrix - preenchimento por colunas - vertical
ma_col <- matrix(data = ve, nrow = 4, ncol = 3, byrow = FALSE)
ma_col

#  2 combinando vetores
# `rbind`: combina vetores por linha, i.e., vetor embaixo do outro
# `cbind`: combina vetores por coluna, i.e., vetor ao lado do outro

# criar dois vetores
vec_1 <- c(1, 2, 3)
vec_2 <- c(4, 5, 6)

# combinar por linhas - vertical - um embaixo do outro
ma_rbind <- rbind(vec_1, vec_2)
ma_rbind

# combinar por colunas - horizontal - um ao lado do outro
ma_cbind <- cbind(vec_1, vec_2)
ma_cbind

# exercicio 10 ------------------------------------------------------------


# 4. array: homogeneo (um modo) e multidimensional (mais que duas dimensoes)
# 1 Dispondo elementos
# `array`: dispõem um vetor em um certo numero de linhas, colunas e dimensões

# vetor
ve <- 1:8
ve

ar <- array(data = ve, dim = c(2, 2, 2))
ar

# 5. data frame: heterogeneo (mais de um modo) e bidimensional (duas dimensões)
# 1 Combinando vetores horizontalmente
# `data.frame`: combina vetores horizontalmente, um ao lado do outro. Semelhante à funcao `cbind`

# criar tres vetores
vec_ch <- c("sp1", "sp2", "sp3")
vec_nu <- c(4, 5, 6)
vec_fa <- factor(c("campo", "floresta", "floresta"))

# data.frame - combinar por colunas - horizontal - um ao lado do outro
df <- data.frame(vec_ch, vec_nu, vec_fa)
df

# data.frame - nome das colunas
df <- data.frame(especies = vec_ch, 
                 abundancia = vec_nu, 
                 vegetacao = vec_fa)
df

# data frame vs cbind
# vetores
pa <- paste("parcela", 1:4, sep = "_")
pa

pe <- sample(0:1, 4, rep = TRUE)
pe

tr <- factor(rep(c("trat", "cont"), each = 2))
tr

# combinação de vetores
df <- data.frame(pa, pe, tr)
df

str(df)

# combinação de vetores
df_c <- cbind(pa, pe, tr)
df_c

str(df_c)

# exercicio 11 ------------------------------------------------------------

# 6. list: heterogeneo (mais de um modo) e unidimensional (uma dimensao)
li <- list(rep(1, 20), # vector
           factor(1, 1), # factor
           cbind(c(1, 2), c(1, 2))) # matrix
li


# 3.4 Manejo de dados unidimensionais -------------------------------------
## indexacao []
# vetor
vec <- c(6, 1, 3, 6, 10, 5)
vec

# selecionar elementos
# seleciona o quinto elemento
vec[5]

# seleciona os elementos do primeiro ao quinto
vec[1:5]

# seleciona o primeiro e o sexto elemento
vec_sel <- vec[c(1, 6)]
vec_sel

# retirar elementos
# retira o quinto elemento
vec[-5]

# retira os elementos do primeiro ao quinto
vec[-(1:5)]

# retira o primeiro e o sexto elemento
vec_sub <- vec[-c(1, 6)]
vec_sub

# exercicio 12 ------------------------------------------------------------


# 3.5 manejo de dados bidimensionais --------------------------------------
# matriz - indexacao []
ma <- matrix(1:12, 4, 3)
ma 

ma[3, ] # linha 3
ma[, 2] # coluna 2
ma[1, 2] # elemento da linha 1 e coluna 2
ma[1, 1:2] # elementos da linha 1 e coluna 1 e 2
ma[1, c(1, 3)] # elementos da linha 1 e coluna 1 e 3
ma_sel <- ma[1, c(1, 3)]
ma_sel

# 1 indexacao $ - data frame
# criar tres vetores
sp <- paste("sp", 1:10, sep = "")
abu <- 1:10
flo <- factor(rep(c("campo", "floresta"), each = 5))

# data frame
df <- data.frame(sp, abu, flo)
df

# $ funciona apenas para data frame 
df$sp 
df$abu
df$flo

# converter colunas
mode(df$abu)
df$abu <- as.character(df$abu)

df$abu
mode(df$abu)

# converter colunas
df$abu <- as.numeric(df$abu)
df$abu
mode(df$abu)

# adicionar uma coluna
set.seed(1)
df$abu2 <- sample(0:1, nrow(df), rep = TRUE)
df$abu2
df

#  3.6 valores faltantes e especiais --------------------------------------
# 1 na - not available
foo_na <- NA
foo_na

# data frame
df <- data.frame(var1 = c(1, 4, 2, NA), var2 = c(1, 4, 5, 2))
df

# verificar a presenca/ausencia de NA's
is.na(df)

# verificar a presenca de algum NA's
any(is.na(df))

# retirar as linhas que possuem NA's
df_sem_na <- na.omit(df)
df_sem_na

# 2 nan - not a number
0/0
log(-1)

# 3 inf - infinito
# limite matematico
1/0

# numero grande
10^310

# objeto nulo
nulo <- NULL
nulo

# 3.7 diretorio de trabalho -----------------------------------------------
# definir o diretorio de trabalho
setwd("/home/mude/data/github/minicurso-r-sebio-2019/03_dados")
  
# verificar o diretorio
getwd()

# verificar os arquivos
dir()

# 3.8 importar dados ------------------------------------------------------
# ler uma planilha eletronica (.csv)
read.csv("ATLANTIC_AMPHIBIANS_sites.csv")

# ler e atribuir uma planilha eletronica (.csv) a um objeto
da <- read.csv("ATLANTIC_AMPHIBIANS_sites.csv")

# ver os dados
da

# conferir a classe
class(da)

# ler e atribuir uma planilha simples (.txt) a um objeto
da <- read.table("ATLANTIC_AMPHIBIANS_sites.txt", header = TRUE, sep = "\t")
da
  
# pacote openxlsx
# install.packages("openxlsx")
library(openxlsx)
  
# ler e atribuir uma planilha eletronica (.xlsx) a um objeto
da <- openxlsx::read.xlsx("ATLANTIC_AMPHIBIANS_sites.xlsx", sheet = 1)
da

# 3.9 Conferir e manejar dados importados ---------------------------------
# conjunto de funcoes para conferir os dados
# head(): mostra as primeiras 6 linhas
# tail(): mostra as ultimas 6 linhas
# nrow(): mostra o numero de linhas
# ncol(): mostra o numero de colunas
# dim(): mostra o numero de linhas e de colunas
# rownames(): mostra os nomes das linhas (locais)
# colnames(): mostra os nomes das colunas (variaveis)
# str(): mostra as classes de cada coluna (estrutura)
# summary(): mostra um resumo dos valores de cada coluna

# head(): mostra as primeiras 10 linhas
head(da)

# tail(): mostra as ultimas 6 linhas
tail(da)

# nrow(): mostra o numero de linhas
nrow(da)

# ncol(): mostra o numero de colunas
ncol(da)

# dim(): mostra o numero de linhas e de colunas
dim(da)

# rownames(): mostra os nomes das linhas (locais)
rownames(da)

# colnames(): mostra os nomes das colunas (variaveis)
colnames(da)

# str(): mostra as classes de cada coluna (estrutura)
str(da)

# summary(): mostra um resumo dos valores de cada coluna
summary(da)

# Verificar a presenca de NAs
# algum?
any(is.na(da))

# quais?
which(is.na(da))

# retirar os NAs
da_na <- na.omit(da)

nrow(da)
nrow(da_na)

# 3.10 Exportar dados -----------------------------------------------------
# planilha eletronica (.csv)
write.csv(da_sp, "ATLANTIC_AMPHIBIAN_sites_sao_paulo.csv", 
          row.names = FALSE, quote = FALSE)


# planilha de texto (.txt)
write.table(da_sp, "ATLANTIC_AMPHIBIAN_sites_sao_paulo.txt", 
            row.names = FALSE, quote = FALSE)

# planilha eletronica (.xlsx)
openxlsx::write.xlsx(da_sp, "ATLANTIC_AMPHIBIAN_sites_sao_paulo.xlsx", 
                     row.names = FALSE, quote = FALSE)

# end ---------------------------------------------------------------------