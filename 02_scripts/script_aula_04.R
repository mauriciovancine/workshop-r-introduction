# -------------------------------------------------------------------------
# aula 4 - introducao ao tidyverse

# mauricio vancine
# 07-11-2019
# -------------------------------------------------------------------------

# topicos -----------------------------------------------------------------  
# 4.1 tidyverse
# 4.2 magrittr (pipe - %>%)
# 4.3 readr
# 4.4 readxl e writexl
# 4.5 tibble
# 4.6 tidyr
# 4.7 dplyr

# 4.1 tidyverse -----------------------------------------------------------
# instalar o pacote
# install.packages("tidyverse")

# carregar o pacote
library(tidyverse)

# 4.2 magrittr (pipe - %>%) -----------------------------------------------
# sem pipe
sqrt(sum(1:100))

# com pipe
1:100 %>% 
  sum() %>% 
  sqrt()

# fixar amostragem
set.seed(42)

# sem pipe
ve <- sum(sqrt(sort(log10(rpois(100, 10)))))
ve

# fixar amostragem
set.seed(42)

# com pipe
ve <- rpois(100, 10) %>% 
  log10() %>%
  sort() %>% 
  sqrt() %>% 
  sum()
ve 

# exercicio 13 ------------------------------------------------------------



# 4.3 readr ---------------------------------------------------------------
# diretorio
setwd("/home/mude/data/github/minicurso-r-see-2019/03_dados")

# formato .csv
# import sites
si <- readr::read_csv("ATLANTIC_AMPHIBIANS_sites.csv")
si

# formato .txt
# import sites
si <- readr::read_tsv("ATLANTIC_AMPHIBIANS_sites.txt")
si

# 4.4 readxl e writexl ----------------------------------------------------
# packages
# nstall.packages("readxl")
library("readxl")

# install.packages("writexl")
library("writexl")

# import sites
si <- readxl::read_xlsx("ATLANTIC_AMPHIBIANS_sites.xlsx")
si

# 4.5 tibble --------------------------------------------------------------
# view the data
tibble::glimpse(si)

# 4.6 tidyr ---------------------------------------------------------------
# funcoes
# 1 unite(): junta dados de multiplas colunas em uma
# 2 separate(): separa caracteres em mulplica colunas
# 3 drop_na(): retira linhas com NA
# 4 replace_na(): substitui NA

# 1 unite
# unir as colunas latirude e longitude separadas por uma vírgula
si_unite <- si %>% 
  tidyr::unite("lat_lon", latitude:longitude, sep = ",")
si_unite$lat_lon
  
# 2 separate
# separar os dados de "period" em quatro colunas dos seus valores
si_separate <- si %>% 
  tidyr::separate("period", c("mo", "da", "tw", "ni"), remove = FALSE)
si_separate[, c(1, 9:13)]

# 3 drop_na()
# remove as linhas com NA de todas as colunas
si_drop_na <- si %>% 
  tidyr::drop_na()
si_drop_na

# remove as linhas com NA da coluna "year_start"
si_drop_na <- si %>% 
  tidyr::drop_na(year_start)
si_drop_na

# 4 replace_na()
# substituir os NAs da coluna "year_start" por 0 
si_replace_na <- si %>% 
  tidyr::replace_na(list(year_start = 0))
si_replace_na

# exercicio 14 ------------------------------------------------------------


# 4.7 dplyr ---------------------------------------------------------------
# funcoes
# 1 select(): seleciona colunas pelo nome gerando um tibble
# 2 pull(): seleciona uma coluna como vetor
# 3 rename(): muda o nome das colunas
# 4 mutate(): adiciona novas colunas ou adiciona resultados em colunas existentes
# 5 arrange(): reordenar as linhas com base nos valores de colunas
# 6 filter(): seleciona linhas com base em valores
# 7 distinc(): remove linhas com valores repetidos com base nos valores de colunas
# 8 slice(): seleciona linhas pelos numeros
# 9 n_sample(): amostragem aleatoria de linhas
# 10 summarise(): agrega ou resume os dados atraves de funcoes, podendo considerar valores das colunas

# 1 select
# seleciona colunas pelo nome
si_select <- si %>% 
  dplyr::select(id, longitude, latitude)
si_select

# nao seleciona colunas pelo nome
si_select <- si %>% 
  dplyr::select(-c(id, longitude, latitude))
si_select

#  starts_with(), ends_with() e contains()
si_select <- si %>% 
  dplyr::select(contains("sp"))
si_select

# 2 mutate
si_mutate <- si %>% 
  dplyr::mutate(record_factor = as.factor(record))
si_mutate

# 3 arrange
si_arrange <- si %>% 
  dplyr::arrange(species_number)
si_arrange

si_arrange <- si %>% 
  dplyr::arrange(desc(species_number))
si_arrange

si_arrange <- si %>% 
  dplyr::arrange(-species_number)
si_arrange

# 4 filter
si_filter <- si %>% 
  dplyr::filter(species_number > 5)
si_filter

si_filter <- si %>% 
  dplyr::filter(between(species_number, 1, 5))
si_filter

si_filter <- si %>% 
  dplyr::filter(is.na(passive_methods))
si_filter

si_filter <- si %>% 
  dplyr::filter(is.na(active_methods) & is.na(passive_methods))
si_filter

si_filter <- si %>% 
  dplyr::filter(species_number > 5 & state_abbreviation == "BR-PE") 
si_filter

si_filter <- si %>% 
  dplyr::filter(species_number > 5 | state_abbreviation == "BR-PE")
si_filter

# 5 summarise
si_summarise <- si %>% 
  dplyr::summarise(mean_sp = mean(species_number), sd_sp = sd(species_number))
si_summarise

si_summarise_group <- si %>% 
  dplyr::group_by(country) %>% 
  dplyr::summarise(mean_sp = mean(species_number), sd_sp = sd(species_number))
si_summarise_group

#  permite manipular os dados de forma mais simples
da <- si %>% 
  dplyr::select(id, state_abbreviation, species_number)
da

da <- si %>% 
  dplyr::select(id, state_abbreviation, species_number) %>% 
  dplyr::filter(species_number > 5)
da

da <- si %>% 
  dplyr::select(id, state_abbreviation, species_number) %>% 
  dplyr::filter(species_number > 5) %>% 
  dplyr::group_by(state_abbreviation) %>% 
  dplyr::summarise(nsp_state_abb = n())
da

da <- si %>% 
  dplyr:: select(id, state_abbreviation, species_number) %>% 
  dplyr::filter(species_number > 5) %>% 
  dplyr::group_by(state_abbreviation) %>% 
  dplyr::summarise(nsp_state_abb = n()) %>% 
  dplyr::arrange(nsp_state_abb)
da

# exercicio 15 ------------------------------------------------------------


# exercicio 16 ------------------------------------------------------------


# end ---------------------------------------------------------------------