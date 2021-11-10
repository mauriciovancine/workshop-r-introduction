
library(vegan)

da <- vegan::decostand(dune, "hell")
da

biplot(stats::prcomp(da, scale = TRUE))
