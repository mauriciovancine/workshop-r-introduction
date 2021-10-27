#' ---
#' title: install packages
#' author: mauricio vancine
#' date: 2021-10-10
#' ---

# github packages ----------------------------------------------------------
if(!require(devtools)) install.packages("devtools", dep = TRUE)

# data manipulation and visualization -------------------------------------
# manipulation and visualization
if(!require(tidyverse)) install.packages("tidyverse", dep = TRUE)

# directory
if(!require(here)) install.packages("here", dep = TRUE)

# xlsx
if(!require(openxlsx)) install.packages("openxlsx", dep = TRUE)
if(!require(readxl)) install.packages("readxl", dep = TRUE)
if(!require(writexl)) install.packages("writexl", dep = TRUE)

# data
if(!require(palmerpenguins)) install.packages("palmerpenguins", dep = TRUE)
if(!require(datasauRus)) install.packages("datasauRus", dep = TRUE)

# plot
if(!require(ggpubr)) install.packages("ggpubr", dep = TRUE)
if(!require(psych)) install.packages("psych", dep = TRUE)
if(!require(cowplot)) install.packages("cowplot", dep = TRUE)
if(!require(patchwork)) install.packages("patchwork", dep = TRUE)
if(!require(gganimate)) devtools::install_github('thomasp85/gganimate')
if(!require(plotly)) install.packages("plotly", dep = TRUE)
if(!require(esquisse)) install.packages("esquisse", dep = TRUE)

# end ---------------------------------------------------------------------