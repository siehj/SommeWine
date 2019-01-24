
let LandingData = {
  'SommeWine' : {
    type: 1,
    title: 'Mission',
    text: 'Your personal Sommelier, SommeWine helps you to keep track of the wines you love and save the ones you want to taste.',
    msg: '~Enjoy~'
  },
  'Customize Search' : {
    type: 2,
    title: 'Search',
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGLgAABi4Bu5kyRgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAP0SURBVHic7dzNixxFHMbx72+ML6gbX0IiGIigIIggCXpIDoKeJCpJFINkEQ+JEAQFQUTwoAclJ8WDghdfiJGArCzRiPkTJBvjIhIFDUEiCWgIamYVVw2Ph+oZZ9vd1enpsVvq+cDCdjFV/IZnp6q7pnvBzMzMzMzMzMzMzMzMzMzMzGxY0ftF0kXATmAXcANwVVNFZeIH4DjwOvBWRPwORSCS1gIHgQ2NlZe3o8CWiDgdki4BDgO3NFxU7maBTR3gURxGG2wAdoekI8BtTVdjABwOSXPAZU1XYgB0Q5KarsL+0mm6AFvIgbSMA2kZB9IyDqRlHEjLOJCWWdF0AS1wBngf+Aj4CvietOm6GrgRuBvYWhyPXc4XhvPAy8CeiOgu90JJK4FngCeAi8dZVK6BfANsi4jPhukkaT1wALhuHEVBnoGcAjZFxLdVOktaB3wMXFtrVYXcFvVfSF8ELQhD0hpJz0makfRd8TMj6VlJC9aOiDhJWlN+HUuFysvzi7z/SUlzy/TpSnpwkX57xlFgTlPWWeD6iDjXa5C0HXiXgXsLliDggYiYHuh7BXACuLrOInOasg6UwlhNusHgn8KgeM0bklb1GyJ+Ip0u1yqnQD4oHT8OrByi/5XAY6W2gyNVtIicAvmydLy1whjlPuUxR5bTGjIREXO9A0ld4PIhx+hGRP9TJWkCOLfM64eW0ydkHH945+seMKdAyhdyJyqMcbx0fE3FWpaUUyA3lY6rnCGV+9xasZYl5RTIltLxKww3//8IvFpqu2ukihaRUyDblHZtAYiIM8Aj/Lu1RcCuiDjbb0gL+t+u4EeVUyCrgKcGGyJiCngI+HmZfnPAjsGr9MLTwEStFZLXaS+kzcXbI+LTwUZJa0j3ON8D3Fw0HwM+BF4rPk2U+uwjhVmr3AKBEbffeyStAPYD22upqpDTlNWzFpiVdOcog0TEH8AO4O1aqirkGAik9eSQpJcGNwyXIulSSS9I2i/pwl57RJwnPXE2VVdhOU5ZZV3SJuE08DlwknRWtQ5YD9wBTJI2FwHeAyZ7j6BBvdOXA6nmEHB/RPS/NZR0AfAm8PAoA+c6ZY1qMzCt9Dgg0J++djLimuJAquuF0r8taCCUfVUHdSCj2Qy8U6whQD+UKhuXqb/XkFocAu6LiHlJLwJPVh3IgdRnCviadIdjZQ6kZbyGtIwDaRkH0jIOpGUcSMs4kJZxIC3TYfnvk+2/1e0AXzRdhfUd6wB7m67C+vZGsX08g/+rXNNmgY2diJgnPYs923BBOTsK3BsRv3UAIuIUsJF0b9InpGe4bbzmgSPAbtJtSacbrsfMzMzMzMzMzMzMzMzMzMzM/rf+BEEGpleXYBmaAAAAAElFTkSuQmCC",
    text: 'Customized search feature integrates with a wine API with thousands of wines from regions around the world.'
  },
  'Get Suggestions' : {
    type: 2,
    title: 'Get Suggestions',
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGLgAABi4Bu5kyRgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOfSURBVHic7d1bbtNAFMbxM4jLCnjgAYklsBBAokKFgoQACcqtOwHxxlLYRlfAHYK4owJPtPnzUFe4xklq+7hz7Hw/qVIrxeMTf80knrEzZiIiIksKuAZ8BbaAldz1LD3gI/+8z11PVyl3AV0BlP9OKQ36OR3JXYDstzAQ4BbwA/gFXD2MosaseM/7WBzPG003PgH8LvXRO40b6RkVueuZB7hZHMM9P4FjTRo4XmxUFiqUoQRSEwbAd+Bo04au1zQUJpQhBDIjjB3avgXMafCKc+1tantdqull7nqqgLVe/qFnhPLJp+xOdZ0HJsXPudz1lAEJ+NJb71ITymdg0J/7+1QTiH9XD1wFvrE7XHHRtfERAlZKx2stdz0iIiIiIiJVjc+ygUtm9tTMTvqXM2ovzGwjpfRs3oPaBDIxs1Ntq1pyr1NKZ+Y9oE0gIYe4h2LRnL/m1INpNltVY+hXefStaY+iV0gwCiQYBRKMAglGgQSjQIJRIMEokGAUSDDZAgGesHsFeHTPgQuHdVw6Dy62GToBzprZZtPtMnqXUjrdZsOmxyvXK2Ro419HOKQrNBsFAqx77DSltGlmj81s26O9nn0ws3sppVjTDsAdYFrpXwd/k2Xfqm9IXo3ergkjxO0I0bkHAmzUhPEHWHWod/RcA1EY3bkFAjycEcZlx3pHzyWQGWFsK4zmOgdC/T1xU5w+8pb2E+VMvdcz8erOmm5cd0/cFLjrXOTZ/o9zI289n1/lue6z6PHVE8Nk/59FT81sy6vA0n4iObQz8cao77K2gWvO+3nE7oeE3CZE7bJKjazy/8GaAved6x09l0CKhhSKA7dAisYUSkeugRQNXp4RygOHekfPPZCiUQ0uttRLIEXDdcPv79x2MFK9BVI0vu61A+KcqS/S6Uy+2tiix2tO/WA0px5MzDl1L5pTny1Ll7VMhtJlyQwKJBgFEowCCUaBBKNAglEgwSiQYBRIMJ2/6+QgI5hycHqFBNMmEN0T0t7CC/LaBLJuZpMW2y2792bmegWoiIiIiIhIFnRZy3UJ0edawnRdy3XJ0OdawjVhQJu1XJ0Vr9ivwBawkrOWKvpaS3hGGO3XcnVUdJ97wg184r2WMH2t5eqkUlfIuZk5/9DN7q+h77VcHQwhEDOntYRrAgkVhtlwAjFzWkuY4Gu5DikQs8VrCQ/+yvVqCEO/Gl9z6sGMIZA3pd9f5SpCCsB5dr+vZAKcy12PiIhILn8BRkCkJiAFpa4AAAAASUVORK5CYII=",
    text: 'Get suggestions based on numerous flavor palette information that you save.'
  },
  'Save Wines' : {
    type: 3, 
    title: 'Custom Cellar',
    img1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAN+SURBVGiB7dhNaFxVGMbx94YqbbWS1EoTLW2sWnSjFWtxZwS7sGKooliFqogILgS1YPeuutWFgh8o4lcVwY24koJgIwGVmqrV6kJdxNZoC9bEtiY/F3OG3MpM5t6ZOx2QeTZn4Jz3ef/n3nPOnPtG9NVXX3311VdfkZUZjGURcUtE7IiImyJibUSsjIijETEdEfsj4p0sy4608NkUETsjYiwiRpLPbPKZiIgPImJ/lmXzZfiKTCDDTnynmD7EFQ18rsRHBT0O416UethLTWIl9uUSHMTTuA7DGMIItuEV/JXGzeKRnM+jmEt9J/ESbk2xQ8lrM/bgq1y+t7Gi00mswIFk+Ad2YaBFzCBeTjELeBK70294EYMtPAbwII6nmE/bnozacqq/iSO4qmT83TiTe7KncWdJj034IcW/1dYyS08fjmG0tEHN46HcRB5o02MUvyWP+8sGn48fOwHIeb2GVzv0eDi3Ms4rE3h7CjzYak8U8BpstScKeAxgKjHd1mhMM8i7UvtGlmULnUBkWXYiy7ITHXosRMSb/2FrLYvH3w2dAFQp3JiYviwTNJOCLu4iWynhkvrhUybodAoqvrG6rHQAwalG/c32SH1ND3UHqy2tTu3xRp3NJjKT2ssqx2lf61I706iz2US+SO3WynHaV53l80adzSYymdqxqmk60FhqJ5cadJawQe2SN4uLuoJVQulPdQ7zWNc64uzgT9IpsbtLfGVY9iSWj9sJHk/B07igC3xFOVbh18SyvR2DDJPJ4LkuMBbleD4xTHRisgX/pLW5rUK+ovm3p716Btd3ara3fjXA+ooYi+QdzV2VnqnCcECtmAA/afMjq2TOy/Fzyvm+CgsQa9SqGvAt1lZi3DjXsMVqzddY3TqqXIIN+CUlOFT6PC+WY32Cr7/9ynPkE9XfzAxurtB7DL8n7ykMV+XdLOGluWN5FvdU4HmfxZrXZxipgrVI4mW50wxex4Vt+Azi3ZzPXrWy7LkVHrf4EXYI15aI3YxvUuwpPNZN1iJAW/F9AprDE0sdl2o3hqfwd4o5jC3nkrmpsBzPWiyLHsDGBuM2YiKNmU9LaXkvmJcUduBoAj2GO3J94xYrhtMY7yVrS6lVO95LwAtql74Xcht6H9b0mrOw1Oq+J3MT+BO7es3VlnCN2p/bFK7uNU9HUvswWtVrjr766ut/on8BCwmieBC2MbEAAAAASUVORK5CYII=",
    img2: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEHSURBVGiB7dmxTgJBEIfx/1xLQq8N70NswJdBG2Np7nWIrcGeV6FBQ0LzWZyaLaDhdtyJzK86KHbmO0K1UkrpugD3wDuw43I7YAMsm8wB+hGHnvNyIsJvDnDncPiPeRHhO4fhJ/LyVoS4zjHgQ9Kkwt/slL2ZTb9DfOcAOB0uSTIzkyTvOZ3n4X8pQ6LJkGgyJJoMiSZDosmQaDIkmgyJJkOiyZBoMiSaDIkmQ6L5VyGfrZeoYN9J2rbeooJtJ6lvvUUFfWdma0nPrTcZ4cnMXn8/AUuG29ZDzTux4vyaDgxXeQvXVwTMgAfgWHx3BFbAzHW4B+CxeF613GUU4LZ4vmm5S0oX+gLpxaybGzSUcAAAAABJRU5ErkJggg==",
    text1: 'Save a list of wines that you love, for future reference.',
    text2: 'Set aside a list of the wines you would like to taste in the future.',
    col1: 'Favorite',
    col2: 'Taste List'
  },
  'Coming Soon' : {
    type: 4, 
    title: 'Features Coming Soon',
    bullets: ['Uploading photos of labels', 'Adding user comments to wines', 'Mobile Application']
  },
  'App Details' : {
    type: 4, 
    title: 'Tech Stack',
    bullets: ['React', 'Reactstrap', 'ReactRouter', 'Node', 'PostgreSQL']
  }
}

module.exports = { LandingData }