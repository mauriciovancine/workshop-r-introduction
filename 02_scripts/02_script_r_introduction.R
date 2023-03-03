#' ---
#' title: aula 02 - tidyverse
#' author: mauricio vancine
#' date: 2022-11-11
#' ---

# packages ----------------------------------------------------------------

library(tidyverse)
library(readxl)
library(writexl)

# topics ------------------------------------------------------------------

# 1. tidyverse
# 2. readr, readxl e writexl
# 3. tibble
# 4. magrittr (pipe - %>%)
# 5. tidyr
# 6. dplyr

# 1. tidyverse -----------------------------------------------------------
# instalar pacote
# install.packages("tidyverse")

# carregar pacote
library(tidyverse)

# list all packages in the tidyverse 
tidyverse::tidyverse_packages(include_self = TRUE)

# 2. readr, readxl e writexl ----------------------------------------------

# diretorio
# definir diretorio
setwd("/home/mude/data/github/mauriciovancine/workshop-r-introduction/03_dados")

# conferir diretorio
getwd()

# listar arquivos
dir()

# formato .csv
si <- readr::read_csv("ATLANTIC_AMPHIBIANS_sites.csv")
si

# formato .txt
si <- readr::read_tsv("ATLANTIC_AMPHIBIANS_sites.txt")
si

# importar .xlsx
# install.packages("readxl")
library("readxl")

# exportar .xlsx
# install.packages("writexl")
library("writexl")

# importar sites
si <- readxl::read_xlsx("ATLANTIC_AMPHIBIANS_sites.xlsx", sheet = 1)
si

# exportar csv
readr::write_csv(si, "ATLANTIC_AMPHIBIANS_sites_exportado.csv")

# exportar txt
readr::write_tsv(si, "ATLANTIC_AMPHIBIANS_sites_exportado.txt")

# exportar excel
writexl::write_xlsx(si, "ATLANTIC_AMPHIBIANS_sites_exportado.xlsx")

# 3. tibble --------------------------------------------------------------

# tibble
tb <- tibble::tibble(a = 1:10)
tb

as.data.frame(tb)

# view the sites data
tibble::glimpse(si)

# 4. magrittr (pipe - %>%) -----------------------------------------------

# # sem pipe
# obj <- funcao2(funcao1(dados))
# 
# # pipe
# obj <- dados %>% 
#   funcao1() %>% 
#   funcao2()

# sem pipe
sqrt(sum(1:100))

# com pipe
1:100 %>% 
  sum() %>% 
  sqrt()

# fixar amostragem
set.seed(42)

# sem pipe
ve <- sqrt(sum(sample(0:60, 6)))
ve

# fixar amostragem
set.seed(42)

# com pipe
ve <- sample(0:60, 6) %>% 
  sum() %>%
  sqrt() 
ve  


# exercicio 01 ------------------------------------------------------------



# palmerpenquins ----------------------------------------------------------

# instalar 
# install.packages("palmerpenguins")

# carregar
library(palmerpenguins)

# ajuda dos dados
?penguins
?penguins_raw

# visualizar os dados
penguins
penguins_raw

# glimpse
tibble::glimpse(penguins)
tibble::glimpse(penguins_raw)

# 5. tidyr ---------------------------------------------------------------
# funcoes
# 1. unite(): junta dados de múltiplas colunas em uma
# 2. separate(): separa caracteres em múlplica colunas
# 3. separate_rows(): separa caracteres em múlplica colunas e linhas
# 4. drop_na(): retira linhas com NA
# 5. replace_na(): substitui NA
# 6. pivot_wider(): long para wide
# 7. pivot_longer(): wide para long

## unite ----
# unir colunas
penguins_raw_unir <- tidyr::unite(data = penguins_raw, 
                                  col = "region_island",
                                  Region:Island, 
                                  sep = ", ",
                                  remove = FALSE)
head(penguins_raw_unir[, c("Region", "Island", "region_island")])
  
## separate ----
# separar colunas
penguins_raw_separar <- tidyr::separate(data = penguins_raw, 
                                        col = Stage,
                                        into = c("stage", "egg_stage"), 
                                        sep = ", ",
                                        remove = FALSE)
head(penguins_raw_separar[, c("Stage", "stage", "egg_stage")])

## drop_na ----
# remover linhas com na
penguins_raw_todas_na <- tidyr::drop_na(data = penguins_raw)
head(penguins_raw_todas_na)

# remover linhas com na de uma coluna
penguins_raw_colunas_na <- tidyr::drop_na(data = penguins_raw,
                                          any_of("Comments"))
head(penguins_raw_colunas_na[, "Comments"])

# exercicio 02 ------------------------------------------------------------



# exercicio 03 ------------------------------------------------------------



# exercicio 04 ------------------------------------------------------------




# 6. dplyr ---------------------------------------------------------------

# funcoes
# 1. relocate(): muda a ordem das colunas
# 2. rename(): muda o nome das colunas
# 3. select(): seleciona colunas pelo nome ou posição
# 4. pull(): seleciona uma coluna como vetor
# 5. mutate(): adiciona novas colunas ou resultados em colunas existentes
# 6. arrange(): reordena as linhas com base nos valores de colunas
# 7. filter(): seleciona linhas com base em valores de colunas
# 8. slice(): seleciona linhas de diferente formas
# 9. distinct(): remove linhas com valores repetidos com base nos valores de colunas
# 10. count(): conta observações para um grupo
# 11. group_by(): agrupa linhas pelos valores das colunas
# 12. summarise(): resume os dados através de funções considerando valores das colunas
# 13. *_join(): funções que juntam dados de duas tabelas através de uma coluna chave

## relocate ----
# reordenar colunas - nome
penguins_relocate_col <- penguins %>% 
  dplyr::relocate(sex, year, .after = island)
head(penguins_relocate_col)

# reordenar colunas - posicao
penguins_relocate_ncol <- penguins %>% 
  dplyr::relocate(sex, year, .after = 2)
head(penguins_relocate_ncol)

## rename ----
# renomear colunas
penguins_rename <- penguins %>% 
  dplyr::rename(bill_length = bill_length_mm,
                bill_depth = bill_depth_mm,
                flipper_length = flipper_length_mm,
                body_mass = body_mass_g)
head(penguins_rename)

## select ----
# selecionar colunas por posicao
penguins_select_position <- penguins %>% 
  dplyr::select(3:6)
head(penguins_select_position)

# selecionar colunas por nomes
penguins_select_names <- penguins %>% 
  dplyr::select(bill_length_mm:body_mass_g)
head(penguins_select_names)

# remover colunas pelo nome
penguins_select_names_remove <- penguins %>% 
  dplyr::select(-(bill_length_mm:body_mass_g))
head(penguins_select_names_remove)

# selecionar colunas por padrao - starts_with(), ends_with() e contains()
penguins_select_contains <- penguins %>% 
  dplyr::select(contains("_mm"))
head(penguins_select_contains)

## pull ----
# coluna para vetor
penguins_select_pull <- penguins %>% 
  dplyr::pull(bill_length_mm)
head(penguins_select_pull, 15)

## mutate ----
# adicionar colunas
penguins_mutate <- penguins %>% 
  dplyr::mutate(body_mass_kg = body_mass_g/1e3, .before = sex)
head(penguins_mutate)

## arrange ----
# reordenar os valores por ordem crescente
penguins_arrange <- penguins %>% 
  dplyr::arrange(body_mass_g)
head(penguins_arrange)

# reordenar os valores por ordem decrescente
penguins_arrange_desc <- penguins %>% 
  dplyr::arrange(desc(body_mass_g))
head(penguins_arrange_desc)

# reordenar os valores por ordem decrescente
penguins_arrange_desc_m <- penguins %>% 
  dplyr::arrange(-body_mass_g)
head(penguins_arrange_desc_m)

## filter ----
# filtrar linhas por valores de uma coluna
penguins_filter <- penguins %>% 
  dplyr::filter(species == "Adelie")
head(penguins_filter)

# filtrar linhas por valores de duas colunas
penguins_filter_two <- penguins %>% 
  dplyr::filter(species == "Adelie" & sex == "female")
head(penguins_filter_two)

# filtrar linhas por mais de um valor e mais de uma coluna
penguins_filter_in <- penguins %>% 
  dplyr::filter(species %in% c("Adelie", "Gentoo"),
                sex == "female")
head(penguins_filter_in)

# filtrar linhas por nas
penguins_filter_na <- penguins %>% 
  dplyr::filter(!is.na(sex) == TRUE)
head(penguins_filter_na)

## slice ----
# selecionar linhas por intervalos
penguins_slice <- penguins %>% 
  dplyr::slice(c(1, 3, 300:n()))
head(penguins_slice)

# selecionar linhas iniciais
penguins_slice_head <- penguins %>% 
  dplyr::slice_head(n = 5)
head(penguins_slice_head)

# selecionar linhas aleatoriamente
penguins_slice_sample <- penguins %>% 
  dplyr::slice_sample(n = 30, replace = FALSE)
head(penguins_slice_sample)

## distinct ----
# retirar linhas com valores duplicados
penguins_distinct <- penguins %>% 
  dplyr::distinct(body_mass_g)
head(penguins_distinct)

# retirar linhas com valores duplicados e manter colunas
penguins_distinct_keep_all <- penguins %>% 
  dplyr::distinct(body_mass_g, .keep_all = TRUE)
head(penguins_distinct_keep_all)

## count ----
# contagens de valores para uma coluna
penguins_count <- penguins %>% 
  dplyr::count(species)
penguins_count

# contagens de valores para mais de uma coluna
penguins_count_two <- penguins %>% 
  dplyr::count(species, island)
penguins_count_two

# contagens de valores para mais de uma coluna
penguins_count_two_sort <- penguins %>% 
  dplyr::count(species, island, sort = TRUE)
penguins_count_two_sort

## group_by ----
# agrupamento
penguins_group_by <- penguins %>% 
  dplyr::group_by(species)
head(penguins_group_by)

## summarise ----
# resumo
penguins_summarise <- penguins %>% 
  dplyr::group_by(species) %>% 
  dplyr::summarize(body_mass_g_mean = mean(body_mass_g, na.rm = TRUE),
                   body_mass_g_sd = sd(body_mass_g, na.rm = TRUE))
penguins_summarise

# exercicio 05 ------------------------------------------------------------



# exercicio 06 ------------------------------------------------------------



# exercicio 07 ------------------------------------------------------------



# exercicio 08 ------------------------------------------------------------



# end ---------------------------------------------------------------------