### script r - criar um sticker ###

# mauricio h. vancine - mauriciovancine.github.io
# 12-01-2019

## packages
library("hexSticker")

## outros pacotes
# e necessario instalar o 'imageMagick'
# siga esses passos: https://www.imagemagick.org/script/download.php

## stickes
# a funcao sticker ira produzir um arquivo com as dimenssoes
# exatas para impressao de acordo com http://hexb.in/sticker.html

## github
# https://github.com/GuangchuangYu/hexSticker

## directory
setwd("")

## function
sticker(
  expression(plot(cars, cex = 1, cex.axis = 1, pch = 20, 
                  col = adjustcolor("black", .8), 
                  axes = F, xlab = "", ylab = ""),
             box(),
             axis(side = 1, tck = -.008, mgp = c(0,-.2,0)),
             axis(side = 2, las = 1, tck = -.008, mgp = c(0,.4,0))),
  
  package = "graphics", 
  p_x = 1,
  p_y = 1.57, 
  p_size = 20, 
  s_x = .8, 
  s_y = .7, 
  s_width = 1.5, 
  s_height = 1.5, 
  h_color = "dark blue", 
  h_size = 2, 
  filename = "sticker_graphics_package.png")

###--------------------------------------------------------------------###