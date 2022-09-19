#' ---
#' title: install packages
#' author: mauricio vancine
#' date: 2022-11-11
#' ---

# github packages ----------------------------------------------------------
if(!require(remotes)) install.packages("remotes", dep = TRUE, quiet = TRUE)
if(!require(devtools)) install.packages("devtools", dep = TRUE, quiet = TRUE)

# data manipulation and visualization -------------------------------------
# manipulation and visualization
if(!require(tidyverse)) install.packages("tidyverse", dep = TRUE, quiet = TRUE)

# xlsx
if(!require(readxl)) install.packages("readxl", dep = TRUE, quiet = TRUE)
if(!require(writexl)) install.packages("writexl", dep = TRUE, quiet = TRUE)

# data
if(!require(palmerpenguins)) install.packages("palmerpenguins", dep = TRUE, quiet = TRUE)
if(!require(datasauRus)) install.packages("datasauRus", dep = TRUE, quiet = TRUE)

# plot
if(!require(ggpubr)) install.packages("ggpubr", dep = TRUE, quiet = TRUE)
if(!require(psych)) install.packages("psych", dep = TRUE, quiet = TRUE)
if(!require(cowplot)) install.packages("cowplot", dep = TRUE, quiet = TRUE)
if(!require(patchwork)) install.packages("patchwork", dep = TRUE, quiet = TRUE)
if(!require(gganimate)) devtools::install_github('thomasp85/gganimate')
if(!require(plotly)) install.packages("plotly", dep = TRUE, quiet = TRUE)
if(!require(esquisse)) install.packages("esquisse", dep = TRUE, quiet = TRUE)

# end ---------------------------------------------------------------------