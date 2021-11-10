#' ---
#' title: aula 02 - introducao ao tidyverse
#' author: mauricio vancine
#' date: 2021-10-11
#' ---

# packages ----------------------------------------------------------------

library(tidyverse)
library(here)
library(readxl)
library(writexl)

# topics ------------------------------------------------------------------

# 1. contextualizacao
# 2. tidyverse
# 3. here
# 4. readr, readxl e writexl
# 5. tibble
# 6. magrittr (pipe - %>%)
# 7. tidyr
# 8. dplyr

# 2. tidyverse -----------------------------------------------------------
# instalar pacote
# install.packages("tidyverse")

# carregar pacote
library(tidyverse)

# list all packages in the tidyverse 
tidyverse::tidyverse_packages(include_self = TRUE)

# 3. here -----------------------------------------------------------------
# instalar
# install.packages("here")

# carregar
library(here)

# conferir
here::here()

# criar um arquivo .here
# here::set_here()

# 4. readr, readxl e writexl ----------------------------------------------
# formato .csv
# importar sites com here
dados_sapos <- readr::read_csv(here::here("03_dados", "ATLANTIC_AMPHIBIANS_sites.csv"))
dados_sapos

# importar sites sem here
si <- readr::read_csv("./03_dados/ATLANTIC_AMPHIBIANS_sites.csv")
si

# formato .txt
# importar sites
si <- readr::read_tsv(here::here("03_dados", "ATLANTIC_AMPHIBIANS_sites.txt"))
si

# importar .xlsx
# install.packages("readxl")
library("readxl")

# exportar .xlsx
# install.packages("writexl")
library("writexl")

# importar sites
si <- readxl::read_xlsx(here::here("03_dados", "ATLANTIC_AMPHIBIANS_sites.xlsx"), 
                        sheet = 1)
si

# 5. tibble --------------------------------------------------------------

# view the sites data
tibble::glimpse(si)

# 6. magrittr (pipe - %>%) -----------------------------------------------
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

# 7. tidyr ---------------------------------------------------------------
# funcoes
# 1. unite(): junta dados de múltiplas colunas em uma
# 2. separate(): separa caracteres em múlplica colunas
# 3. separate_rows(): separa caracteres em múlplica colunas e linhas
# 4. drop_na(): retira linhas com NA
# 5. replace_na(): substitui NA
# 6. pivot_wider(): long para wide
# 7. pivot_longer(): wide para long

# 1. unite()
# unir colunas
penguins_raw_unir <- tidyr::unite(data = penguins_raw, 
                                  col = "region_island",
                                  Region:Island, 
                                  sep = ", ",
                                  remove = FALSE)
head(penguins_raw_unir[, c("Region", "Island", "region_island")])
  
# 2. separate()
# separar colunas
penguins_raw_separar <- tidyr::separate(data = penguins_raw, 
                                        col = Stage,
                                        into = c("stage", "egg_stage"), 
                                        sep = ", ",
                                        remove = FALSE)
head(penguins_raw_separar[, c("Stage", "stage", "egg_stage")])

# 3. drop_na()
# remover linhas com na
penguins_raw_todas_na <- tidyr::drop_na(data = penguins_raw)
head(penguins_raw_todas_na)

# remover linhas com na de uma coluna
penguins_raw_colunas_na <- tidyr::drop_na(data = penguins_raw,
                                          any_of("Comments"))
head(penguins_raw_colunas_na[, "Comments"])

# 8. dplyr ---------------------------------------------------------------
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

# 1. relocate()
# reordenar colunas - posicao
penguins_relocate_ncol <- penguins %>% 
  dplyr::relocate(sex, year, .after = 2)
head(penguins_relocate_ncol)

# 2. rename()
# renomear colunas
penguins_rename <- penguins %>% 
  dplyr::rename(bill_length = bill_length_mm,
                bill_depth = bill_depth_mm,
                flipper_length = flipper_length_mm,
                body_mass = body_mass_g)
head(penguins_rename)

# 3. select()
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

# 4. pull()
# coluna para vetor
penguins_select_pull <- penguins %>% 
  dplyr::pull(bill_length_mm)
head(penguins_select_pull, 15)

# 5. mutate()
# adicionar colunas
penguins_mutate <- penguins %>% 
  dplyr::mutate(body_mass_kg = body_mass_g/1e3, .before = sex)
head(penguins_mutate)

# 6. arrange()
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

# 7. filter()
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

# 8. slice()
# selecionar linhas por intervalos
penguins_slice <- penguins %>% 
  dplyr::slice(n = c(1, 3, 300:n()))
head(penguins_slice)

# selecionar linhas iniciais
penguins_slice_head <- penguins %>% 
  dplyr::slice_head(n = 5)
head(penguins_slice_head)

# selecionar linhas aleatoriamente
penguins_slice_sample <- penguins %>% 
  dplyr::slice_sample(n = 30)
head(penguins_slice_sample)

# 9. distinct()
# retirar linhas com valores duplicados
penguins_distinct <- penguins %>% 
  dplyr::distinct(body_mass_g)
head(penguins_distinct)

# retirar linhas com valores duplicados e manter colunas
penguins_distinct_keep_all <- penguins %>% 
  dplyr::distinct(body_mass_g, .keep_all = TRUE)
head(penguins_distinct_keep_all)

# 10. count()
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

# 11. group_by()
# agrupamento
penguins_group_by <- penguins %>% 
  dplyr::group_by(species)
head(penguins_group_by)

# 12. summarise()
# resumo
penguins_summarise <- penguins %>% 
  dplyr::group_by(species) %>% 
  dplyr::summarize(body_mass_g_mean = mean(body_mass_g, na.rm = TRUE),
                   body_mass_g_sd = sd(body_mass_g, na.rm = TRUE))
penguins_summarise

# end ---------------------------------------------------------------------