# -------------------------------------------------------------------------
# script convert to xaringan presentation to pdf

# packages
library(pagedown)
library(xaringan)
library(tidyverse)

# directory
setwd("/home/mude/data/github/minicurso-r-see-2019/01_aulas")
dir()

# convert rmarkdown
pagedown::chrome_print("00_aula_minicurso_r_see_2019.Rmd", timeout = 1000)
pagedown::chrome_print("01_aula_minicurso_r_see_2019.Rmd", timeout = 1000)
pagedown::chrome_print("02_aula_minicurso_r_see_2019.Rmd", timeout = 1000)
pagedown::chrome_print("03_aula_minicurso_r_see_2019.Rmd", timeout = 1000)
pagedown::chrome_print("04_aula_minicurso_r_see_2019.Rmd", timeout = 1000)
pagedown::chrome_print("05_aula_minicurso_r_see_2019.Rmd", timeout = 1000)

# end ---------------------------------------------------------------------