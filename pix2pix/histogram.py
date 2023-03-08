import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("RGB_diff.csv")

df.plot.hist(column=["AVG_diff"], bins=[0,13,26,39,52,65,78,91,104], edgecolor='black', linewidth=1.2)

plt.title('Histogram of RGB values')
plt.ylabel('Number of pixels')
plt.xlabel("Error value")

# For three histograms of R,G,B components
# fig, (ax0,ax1,ax2) = plt.subplots(3,1, sharex=True, sharey=True)

# fig.add_subplot(111, frameon=False)
# plt.tick_params(labelcolor='none', top=False, bottom=False, left=False, right=False)

# df.plot.hist(column=["R_diff"], bins=[0,13,26,39,52,65,78,91], edgecolor='black', linewidth=1.2, ax = ax0, color = "Red")
# df.plot.hist(column=["G_diff"], bins=[0,13,26,39,52,65,78,91], edgecolor='black', linewidth=1.2, ax = ax1, color = "Green")
# df.plot.hist(column=["B_diff"], bins=[0,13,26,39,52,65,78,91], edgecolor='black', linewidth=1.2, ax = ax2, color = "Blue")

# plt.title('Histogram of RGB values')
# plt.xlabel("Error value")

plt.legend()
# plt.savefig("Histogram_RGB.png")
plt.show()
plt.close()