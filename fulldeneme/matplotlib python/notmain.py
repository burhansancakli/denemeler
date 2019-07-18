import numpy as np
import matplotlib.pyplot as plt

fig = plt.figure()
ax = fig.add_subplot(111)

x=[1,2,3,4,5,6,7,8,9,10]
y=[1,1,1,2,10,2,1,1,1,1]
line, = ax.plot(x, y)

ymax = max(y)
xpos = y.index(ymax)
xmax = x[xpos]

ax.annotate('local max', xy=(xmax, ymax), xytext=(xmax, ymax+5),
            arrowprops=dict(facecolor='black', shrink=0.05),
            )

ax.set_ylim(0,20)
plt.show()
