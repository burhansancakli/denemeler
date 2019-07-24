import numpy as np
import matplotlib.pyplot as plt

objects=('NL','GR','FR','US','CA','TR')
incomes=[2000,1800,1400,4000,1000,333]
y_pos=np.arange(len(objects))
plt.bar(y_pos,incomes,align='center',alpha=0.5)
plt.xticks(y_pos,objects)
plt.ylabel('Income')
plt.title('Average income by country')
plt.show()